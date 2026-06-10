import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import Stripe from "stripe";

admin.initializeApp();
const db = admin.firestore();

// Ensure stripe secret key is set in environment or config
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-06-20" as any, // using a recent stable API version string
});

export const createStripeCheckoutSession = functions.https.onCall(async (request: any, context: any) => {
  const data = request.data || request; // Handle both v1 and v2 API styles
  const { amount, currency = "inr", campaignId } = data;

  if (!amount) {
    throw new functions.https.HttpsError("invalid-argument", "Amount is required");
  }

  const userId = context?.auth?.uid || request.auth?.uid;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: campaignId ? `Donation to ${campaignId}` : "General Donation to Ekagrah Seva Foundation",
              description: "Thank you for supporting our mission.",
            },
            unit_amount: amount * 100, // Stripe expects amounts in cents/paise
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/donate/cancel`,
      metadata: {
        userId: userId || "guest",
        campaignId: campaignId || "general",
      },
    });

    return { sessionId: session.id, url: session.url };
  } catch (error: any) {
    console.error("Stripe Session Creation Error:", error);
    throw new functions.https.HttpsError("internal", error.message);
  }
});

export const stripeWebhook = functions.https.onRequest(async (req, res) => {
  const sig = req.headers["stripe-signature"] as string;
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET || "";

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.rawBody, sig, endpointSecret);
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    res.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const userId = session.metadata?.userId;
    const campaignId = session.metadata?.campaignId;
    const amountTotal = session.amount_total; // in paise

    // Log donation in Firestore
    await db.collection("donations").add({
      stripeSessionId: session.id,
      userId: userId || "guest",
      campaignId: campaignId || "general",
      amount: amountTotal ? amountTotal / 100 : 0,
      currency: session.currency,
      status: "completed",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });

    // If campaignId exists, update campaign raised amount
    if (campaignId && campaignId !== "general") {
      const campaignRef = db.collection("campaigns").doc(campaignId);
      await db.runTransaction(async (transaction) => {
        const campaignDoc = await transaction.get(campaignRef);
        if (campaignDoc.exists) {
          const newRaised = (campaignDoc.data()?.raised || 0) + (amountTotal ? amountTotal / 100 : 0);
          transaction.update(campaignRef, { raised: newRaised });
        }
      });
    }
  }

  res.json({ received: true });
});
