import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-surface py-16 md:py-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60" />
        <Container className="relative z-10">
          <SectionHeading
            title={title}
            subtitle={lastUpdated ? `Last Updated: ${lastUpdated}` : undefined}
            accent="Legal Information"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8 font-body text-lg text-foreground-muted leading-relaxed">
            {children}
          </div>
        </Container>
      </section>
    </div>
  );
}
