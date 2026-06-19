import { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | Ekagrah Seva Foundation",
  description: "Frequently Asked Questions (FAQ) of Ekagrah Seva Foundation",
};

export default function Page() {
  return (
    <LegalPageLayout 
      title="Frequently Asked Questions (FAQ)"
      lastUpdated=""
    >
      <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">1. How can I donate to Ekagrah Seva Foundation?</h3>
<p>You can donate securely through the Foundation's website using available online payment methods.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">2. Will I receive a donation receipt?</h3>
<p>Yes. Donors receive a donation receipt after successful processing of their contribution.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">3. Will I receive a donation certificate?</h3>
<p>Yes. A donation certificate may be provided for eligible contributions and activities supported through the Foundation.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">4. Will I receive photographs or videos of the activity?</h3>
<p>The Foundation makes reasonable efforts to provide activity photographs, videos, and updates to maintain transparency and accountability.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">5. How does the Foundation maintain transparency?</h3>
<p>The Foundation follows a 100% transparency commitment by sharing receipts, certificates, activity updates, photographs, videos, and impact information wherever operationally feasible.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">6. Are donations refundable?</h3>
<p>No. Donations are generally non-refundable except in exceptional cases such as duplicate transactions or verified technical errors.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">7. Is there a minimum donation amount?</h3>
<p>No. Donations of any amount, including Rs. 1, are welcome and appreciated.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">8. What payment methods are accepted?</h3>
<p>Payments may be accepted through UPI, debit cards, credit cards, net banking, wallets, and other available online payment methods.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">9. What is Project SRIJAN?</h3>
<p>Project SRIJAN is an upcoming initiative focused on creating learning opportunities and educational support for children through community-based learning programs.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">10. How can I volunteer with the Foundation?</h3>
<p>Interested individuals may contact the Foundation through the website or official communication channels to explore volunteer opportunities.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">11. How can I contact the Foundation?</h3>
<p>Email: ekagrahfoundation@gmail.com<br />
Phone: +91 95598 50029</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">12. What are the key focus areas of the Foundation?</h3>
<p>The Foundation works in areas including food support, education support, hygiene initiatives, environmental sustainability, community welfare, and social impact programs.</p>
    </LegalPageLayout>
  );
}
