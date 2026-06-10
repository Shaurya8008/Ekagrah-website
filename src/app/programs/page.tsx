import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";
import { HeartPulse, BookOpen, Sparkles, Building, Leaf, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs",
  description: "Explore Ekagrah Seva Foundation's key initiatives in education, healthcare, women empowerment, community development, and environment.",
};

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-8 h-8 text-white" />,
  HeartPulse: <HeartPulse className="w-8 h-8 text-white" />,
  Sparkles: <Sparkles className="w-8 h-8 text-white" />,
  Building: <Building className="w-8 h-8 text-white" />,
  Leaf: <Leaf className="w-8 h-8 text-white" />,
};

export default function ProgramsPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-surface py-16 md:py-24 border-b border-border relative overflow-hidden">
        <Container className="relative z-10 text-center max-w-4xl">
          <SectionHeading
            title="Our Programs"
            subtitle="Holistic interventions designed to uplift marginalized communities through sustainable, grassroots-level action."
            accent="What We Do"
          />
        </Container>
      </section>

      {/* Programs List */}
      <section className="py-20">
        <Container>
          <div className="flex flex-col gap-24">
            {programs.map((program, index) => (
              <div
                key={program.id}
                id={program.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-32 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Side */}
                <div className={`relative reveal-scale ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-primary-100 shadow-elevated relative">
                    {/* Placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      {iconMap[program.icon] || <BookOpen className="w-24 h-24 text-primary/20" />}
                    </div>
                  </div>
                  {/* Floating Icon Badge */}
                  <div className="absolute -bottom-6 -right-6 lg:-right-8 lg:-bottom-8 w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-lg transform rotate-3">
                    {iconMap[program.icon]}
                  </div>
                </div>

                {/* Content Side */}
                <div className={`flex flex-col gap-6 reveal-${index % 2 === 0 ? "right" : "left"} ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary font-heading text-sm font-semibold mb-4 uppercase tracking-wider">
                      {program.category}
                    </span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {program.title}
                    </h2>
                    <div className="w-16 h-1 bg-secondary rounded-full mb-6" />
                  </div>
                  
                  <div className="prose prose-lg text-foreground-muted font-body">
                    {program.fullDescription.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="mb-4">{paragraph}</p>
                    ))}
                  </div>

                  <div className="bg-surface border border-border rounded-xl p-6 mt-4">
                    <h4 className="font-heading font-semibold text-lg mb-4 text-foreground">Key Activities:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.activities.map((activity, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-foreground-muted">
                          <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-2">
                    <Button href={`/programs/${program.slug}`} variant="outline" className="w-full sm:w-auto">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
