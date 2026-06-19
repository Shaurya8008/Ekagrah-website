"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrutalistCard } from "@/components/ui/BrutalistCard";
import { Send } from "lucide-react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function StartCampaignPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    description: "",
    targetAmount: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await addDoc(collection(db, "campaign_requests"), {
        ...formData,
        status: "pending",
        createdAt: new Date(),
      });
      setSuccess(true);
    } catch (error) {
      console.error("Error submitting campaign:", error);
      alert("Failed to submit campaign. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#ffe5b3] relative">
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
      
      <Container className="relative z-10 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-black mb-4 uppercase tracking-wide">
            Start A <span className="text-primary bg-white px-2 border-4 border-foreground inline-block shadow-[4px_4px_0px_#141414] -rotate-2">Campaign</span>
          </h1>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Partner with us to raise funds for a community or individual in need. Fill out the details below.
          </p>
        </div>

        <BrutalistCard className="p-8 md:p-12 bg-white border-4">
          {success ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-[#feecee] border-4 border-foreground shadow-[4px_4px_0px_#141414] rounded-full flex items-center justify-center mx-auto mb-8">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h2 className="font-heading text-3xl font-black mb-4">Request Submitted!</h2>
              <p className="font-bold text-lg mb-8">
                Our team will review your campaign details and get back to you within 48 hours.
              </p>
              <Button href="/" variant="primary" size="lg">Return Home</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 uppercase">Your Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase">Campaign Title</label>
                <input 
                  type="text" 
                  name="title"
                  required
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold"
                  placeholder="e.g. Save local school roof"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase">Target Amount (₹)</label>
                <input 
                  type="number" 
                  name="targetAmount"
                  required
                  value={formData.targetAmount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold"
                  min="5000"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase">Campaign Description & Story</label>
                <textarea 
                  name="description"
                  required
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border-2 border-foreground shadow-[2px_2px_0px_#141414] focus:shadow-[4px_4px_0px_#141414] focus:outline-none transition-all font-body font-bold resize-none"
                  placeholder="Describe why you are starting this campaign..."
                ></textarea>
              </div>

              <Button 
                variant="primary" 
                type="submit" 
                size="lg" 
                className="w-full py-5 text-xl uppercase tracking-wider mt-4"
                loading={loading}
              >
                Submit Campaign Request
              </Button>
            </form>
          )}
        </BrutalistCard>
      </Container>
    </div>
  );
}
