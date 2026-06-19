"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BrutalistCard } from "@/components/ui/BrutalistCard";
import { CheckCircle } from "lucide-react";

export default function DonateSuccessPage() {
  return (
    <div className="pt-32 pb-24 min-h-[85vh] flex flex-col justify-center bg-[#feecee] border-b-2 border-foreground relative">
      <div className="absolute inset-0 bg-[url('/pattern-dots.svg')] opacity-10"></div>
      <Container className="max-w-lg w-full relative z-10 text-center">
        <BrutalistCard className="p-10 bg-white border-4">
          <div className="w-24 h-24 bg-[#CCFBF1] border-4 border-foreground shadow-[4px_4px_0px_#141414] rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-[#10B981]" />
          </div>
          
          <h1 className="font-heading text-4xl font-black mb-4 uppercase tracking-wide">
            Thank You!
          </h1>
          
          <p className="font-bold text-lg mb-8 text-foreground-muted">
            Your donation has been successfully processed. An 80G tax exemption receipt will be emailed to you shortly.
          </p>

          <Button href="/" variant="primary" size="lg" className="w-full py-4 text-xl uppercase">
            Return Home
          </Button>
        </BrutalistCard>
      </Container>
    </div>
  );
}
