import React from 'react';
import { CheckCircle } from 'lucide-react';

interface CertificateProps {
  name: string;
  amount: number;
  date: string;
}

export function Certificate({ name, amount, date }: CertificateProps) {
  return (
    <div 
      id="donation-certificate"
      className="bg-white border-[12px] border-[#141414] p-8 md:p-12 w-[800px] h-[600px] flex flex-col justify-between relative overflow-hidden"
      style={{
        backgroundImage: "url('/pattern-dots.svg')",
        backgroundSize: "20px 20px",
      }}
    >
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#feecee] rounded-bl-full -z-10 opacity-50 border-b-4 border-l-4 border-foreground"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#ffe5b3] rounded-tr-full -z-10 opacity-50 border-t-4 border-r-4 border-foreground"></div>

      {/* Header */}
      <div className="flex justify-between items-start border-b-4 border-foreground pb-6">
        <div>
          <h2 className="font-heading text-4xl font-black uppercase text-foreground tracking-wider mb-2">
            Ekagrah Seva <span className="text-primary bg-white px-2 border-2 border-foreground shadow-[2px_2px_0px_#141414] inline-block -rotate-1">Foundation</span>
          </h2>
          <p className="font-body text-sm font-bold text-foreground-muted uppercase">
            Certificate of Appreciation & 80G Receipt
          </p>
        </div>
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center border-2 border-success shrink-0">
          <CheckCircle className="w-8 h-8 text-success" />
        </div>
      </div>

      {/* Body */}
      <div className="text-center py-10 flex-1 flex flex-col justify-center">
        <p className="font-heading text-xl uppercase font-bold text-foreground-muted mb-4">
          This certificate is proudly presented to
        </p>
        <h1 className="font-heading text-5xl md:text-6xl font-black text-primary mb-6 bg-white inline-block px-6 py-2 border-4 border-foreground shadow-[6px_6px_0px_#141414] rotate-1 mx-auto">
          {name}
        </h1>
        <p className="font-body text-xl font-bold max-w-2xl mx-auto leading-relaxed">
          For your generous contribution of <span className="text-2xl font-black text-foreground underline decoration-wavy decoration-secondary underline-offset-4">₹{amount}</span> towards empowering communities and creating sustainable social impact.
        </p>
      </div>

      {/* Footer Details */}
      <div className="grid grid-cols-3 gap-6 pt-6 border-t-4 border-foreground text-center">
        <div>
          <p className="text-xs font-bold text-foreground-muted uppercase mb-1">Date</p>
          <p className="font-heading text-lg font-black">{date}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground-muted uppercase mb-1">Tax Exemption</p>
          <p className="font-heading text-lg font-black">80G Applicable</p>
        </div>
        <div>
          <p className="text-xs font-bold text-foreground-muted uppercase mb-1">Authorized By</p>
          <div className="relative">
            <p className="font-signature text-3xl text-primary -rotate-3 mt-1">Ekagrah Team</p>
          </div>
        </div>
      </div>
    </div>
  );
}
