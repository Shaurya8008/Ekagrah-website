import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { XCircle, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Donation Cancelled",
};

export default function CancelPage() {
  return (
    <div className="pt-32 pb-16 min-h-[70vh] flex flex-col justify-center bg-surface">
      <Container className="text-center max-w-2xl">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-up">
          <XCircle className="w-12 h-12 text-red-600" />
        </div>
        
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Payment Cancelled
        </h1>
        
        <p className="font-body text-foreground-muted text-lg mb-8">
          The donation process was cancelled. You have not been charged. 
          If you experienced a technical issue, please try again or contact us for offline donation methods.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/donate" variant="primary">
            Try Again
          </Button>
          <Button href="/" variant="ghost" icon={<ArrowLeft className="w-4 h-4" />}>
            Return Home
          </Button>
        </div>
      </Container>
    </div>
  );
}
