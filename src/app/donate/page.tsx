"use client";

import { useState, Suspense, FormEvent } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrutalistCard } from "@/components/ui/BrutalistCard";
import { ShieldCheck, Heart, ArrowRight, CheckCircle2 } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const AMOUNTS = [500, 1000, 2500, 5000];
const KITS = [
  { id: "ration", label: "Monthly Food Ration", price: 1500 },
  { id: "winter", label: "Winter Blanket", price: 500 },
  { id: "education", label: "Education Kit", price: 800 },
];

function DonateForm() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "once";
  
  const [donationType, setDonationType] = useState(initialType);
  const [amount, setAmount] = useState<number>(1000);
  const [customAmount, setCustomAmount] = useState<string>("");
  
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    pan: "",
    passport: "",
    country: "",
    billingCycle: "1st",
    kitType: "ration",
    kitQuantity: 1,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateTotal = () => {
    if (donationType === "product") {
      const kit = KITS.find(k => k.id === formData.kitType);
      return (kit?.price || 0) * formData.kitQuantity;
    }
    return customAmount ? parseInt(customAmount) : amount;
  };

  const handleDonate = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const donationAmount = calculateTotal();
      if (isNaN(donationAmount) || donationAmount <= 0) {
        throw new Error("Please enter a valid donation amount.");
      }

      // Basic Validation
      if (!formData.fullName || !formData.email) {
         throw new Error("Name and Email are required.");
      }
      if (["once", "monthly"].includes(donationType) && formData.pan.length > 0 && formData.pan.length !== 10) {
         throw new Error("PAN number must be exactly 10 characters.");
      }
      if (donationType === "overseas" && !formData.passport) {
         throw new Error("Passport number is required for overseas donations.");
      }

      // Simulate API call since backend isn't connected
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred while initiating the donation.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <BrutalistCard className="bg-white p-12 text-center border-4 h-full flex flex-col justify-center">
        <motion.div 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          className="w-24 h-24 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-[4px_4px_0px_#141414]"
        >
          <CheckCircle2 className="w-12 h-12" />
        </motion.div>
        <h2 className="font-heading text-4xl font-black mb-4">Thank You, {formData.fullName}!</h2>
        <p className="text-xl font-bold text-foreground-muted mb-8 max-w-lg mx-auto">
          {donationType === "monthly" 
            ? "Your monthly subscription has been successfully set up. This reliable support means the world to us."
            : donationType === "product"
            ? `Your contribution of ${formData.kitQuantity} kit(s) will directly impact families in need.`
            : "Your generous donation has been received. We will email your 80G tax exemption receipt shortly."}
        </p>
        <div className="flex justify-center">
            <Button onClick={() => setSuccess(false)} variant="outline">Make Another Donation</Button>
        </div>
      </BrutalistCard>
    );
  }

  // Define tab content
  const tabContent = {
    once: {
      reason: "Your one-time gift helps us respond immediately to urgent needs across our programs.",
    },
    monthly: {
      reason: "Monthly giving provides reliable funding, allowing us to plan long-term sustainable projects.",
    },
    product: {
      reason: "Directly fund specific items. A single kit can sustain a family for a month.",
    },
    overseas: {
      reason: "Your international support helps scale our grassroots impact. (Compliant with FCRA regulations).",
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
      <div className="lg:col-span-8">
        <BrutalistCard className="bg-white p-4 md:p-8 border-4 overflow-hidden">
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {[
              { id: "once", label: "Give Once" },
              { id: "monthly", label: "Monthly" },
              { id: "product", label: "Give Ration/Kits" },
              { id: "overseas", label: "Overseas (Non-Indian)" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setDonationType(tab.id)}
                className={`px-4 md:px-6 py-3 font-bold border-2 border-foreground whitespace-nowrap transition-all ${
                  donationType === tab.id
                    ? "bg-primary text-white shadow-[4px_4px_0px_#141414] translate-y-[-2px]"
                    : "bg-[#feecee] text-foreground hover:bg-[#f8b4b7]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <form onSubmit={handleDonate}>
            <AnimatePresence mode="wait">
              <motion.div
                key={donationType}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {/* Dynamic Reason */}
                <div className="bg-[#ffe5b3] border-2 border-foreground p-4 mb-8 font-bold text-sm flex gap-3 items-start shadow-[2px_2px_0px_#141414]">
                  <Heart className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p>{tabContent[donationType as keyof typeof tabContent].reason}</p>
                </div>

                {/* Amount Selection (Skipped for Product) */}
                {donationType !== "product" && (
                  <>
                    <h3 className="font-heading font-black text-xl mb-4 uppercase tracking-wide">
                      Select Amount
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {AMOUNTS.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => { setAmount(amt); setCustomAmount(""); }}
                          className={`py-3 border-2 border-foreground font-bold text-lg transition-all ${
                            amount === amt && !customAmount
                              ? "bg-secondary text-foreground shadow-[4px_4px_0px_#141414] translate-y-[-2px]"
                              : "bg-white hover:bg-[#ffe5b3] shadow-[2px_2px_0px_#141414]"
                          }`}
                        >
                          ₹{amt}
                        </button>
                      ))}
                    </div>
                    <div className="mb-8">
                      <input
                        type="number"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount(0);
                        }}
                        placeholder="Or enter custom amount (₹)"
                        className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold"
                        min="100"
                      />
                    </div>
                  </>
                )}

                {/* Product Selection */}
                {donationType === "product" && (
                  <div className="mb-8 p-6 border-2 border-foreground bg-white shadow-[4px_4px_0px_#141414]">
                    <h3 className="font-heading font-black text-xl mb-4 uppercase">Select Kit</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-bold mb-2 text-sm">Kit Type</label>
                        <select 
                          name="kitType" 
                          value={formData.kitType} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414]"
                        >
                          {KITS.map(k => <option key={k.id} value={k.id}>{k.label} - ₹{k.price}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block font-bold mb-2 text-sm">Quantity</label>
                        <input 
                          type="number" 
                          name="kitQuantity" 
                          min="1" 
                          value={formData.kitQuantity} 
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414]"
                        />
                      </div>
                    </div>
                    <div className="mt-4 text-right font-black text-2xl text-primary">
                      Total: ₹{calculateTotal()}
                    </div>
                  </div>
                )}

                <h3 className="font-heading font-black text-xl mb-4 uppercase tracking-wide">
                  Your Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div>
                    <label className="block font-bold mb-2 text-sm">Full Name *</label>
                    <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414]" />
                  </div>
                  <div>
                    <label className="block font-bold mb-2 text-sm">Email Address *</label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414]" />
                  </div>
                  
                  <div>
                    <label className="block font-bold mb-2 text-sm">Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414]" />
                  </div>

                  {/* PAN for Indians */}
                  {["once", "monthly", "product"].includes(donationType) && (
                    <div>
                      <label className="block font-bold mb-2 text-sm">PAN Number (For 80G)</label>
                      <input type="text" name="pan" maxLength={10} placeholder="ABCDE1234F" value={formData.pan} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414] uppercase" />
                    </div>
                  )}

                  {/* Monthly Specific */}
                  {donationType === "monthly" && (
                    <div>
                      <label className="block font-bold mb-2 text-sm">Billing Cycle Preference</label>
                      <select name="billingCycle" value={formData.billingCycle} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414]">
                        <option value="1st">1st of the month</option>
                        <option value="15th">15th of the month</option>
                      </select>
                    </div>
                  )}

                  {/* Overseas Specific */}
                  {donationType === "overseas" && (
                    <>
                      <div>
                        <label className="block font-bold mb-2 text-sm">Passport Number *</label>
                        <input type="text" name="passport" required value={formData.passport} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414]" />
                      </div>
                      <div>
                        <label className="block font-bold mb-2 text-sm">Country of Residence *</label>
                        <input type="text" name="country" required value={formData.country} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border-2 border-foreground focus:outline-none font-bold shadow-[2px_2px_0px_#141414]" />
                      </div>
                    </>
                  )}
                </div>

                {error && (
                  <div className="mb-6 p-4 bg-[#feecee] border-2 border-foreground shadow-[2px_2px_0px_#141414] text-primary font-bold">
                    {error}
                  </div>
                )}

                <Button 
                  type="submit"
                  variant="primary" 
                  size="lg" 
                  className="w-full py-5 text-xl uppercase tracking-wider"
                  loading={loading}
                >
                  <Heart className="w-6 h-6 mr-2" />
                  Donate ₹{calculateTotal()} Now
                </Button>
              </motion.div>
            </AnimatePresence>
          </form>
        </BrutalistCard>
      </div>

      <div className="lg:col-span-4 space-y-6">
        <BrutalistCard className="bg-secondary p-6">
          <h4 className="font-heading font-black text-xl mb-4">Tax Exemption</h4>
          <p className="font-bold mb-4">
            Donations to Ekagrah Seva Foundation are exempt from tax under Section 80G of the Income Tax Act.
          </p>
          <div className="flex items-center gap-2 bg-white px-4 py-2 border-2 border-foreground shadow-[2px_2px_0px_#141414] font-bold text-sm inline-flex">
            <ShieldCheck className="w-5 h-5 text-primary" />
            100% Secure
          </div>
        </BrutalistCard>
        
        <BrutalistCard className="bg-[#feecee] p-6">
          <h4 className="font-heading font-black text-xl mb-4 text-primary">Where does it go?</h4>
          <ul className="space-y-3 font-bold text-sm">
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              90% Directly to Programs
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              5% Administrative Costs
            </li>
            <li className="flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-primary" />
              5% Fundraising Costs
            </li>
          </ul>
        </BrutalistCard>
      </div>
    </div>
  );
}

export default function DonatePage() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#ffe5b3] relative">
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
      
      <Container className="relative z-10">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-black mb-4 uppercase tracking-wide">
            Make A <span className="text-primary bg-white px-2 border-4 border-foreground inline-block shadow-[4px_4px_0px_#141414] -rotate-2">Difference</span>
          </h1>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Your contribution helps us provide education, healthcare, and empowerment to underserved communities.
          </p>
        </div>

        <Suspense fallback={<div className="font-bold text-center">Loading form...</div>}>
          <DonateForm />
        </Suspense>
      </Container>
    </div>
  );
}
