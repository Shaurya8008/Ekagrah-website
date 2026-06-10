import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { programs } from "@/data/programs";
import { HeartPulse, BookOpen, Sparkles, Building, Leaf, CheckCircle2, MapPin, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ProgramPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: ProgramPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const program = programs.find((p) => p.slug === resolvedParams.slug);
  
  if (!program) {
    return {
      title: "Program Not Found",
    };
  }

  return {
    title: program.title,
    description: program.shortDescription,
  };
}

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen className="w-16 h-16 text-primary" />,
  HeartPulse: <HeartPulse className="w-16 h-16 text-primary" />,
  Sparkles: <Sparkles className="w-16 h-16 text-primary" />,
  Building: <Building className="w-16 h-16 text-primary" />,
  Leaf: <Leaf className="w-16 h-16 text-primary" />,
};

export default async function ProgramPage({ params }: ProgramPageProps) {
  const resolvedParams = await params;
  const program = programs.find((p) => p.slug === resolvedParams.slug);

  if (!program) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-surface py-12 md:py-20 border-b border-border relative overflow-hidden">
        <Container className="relative z-10">
          <Link href="/programs" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to All Programs
          </Link>
          <div className="flex items-center gap-6 mb-6">
            <div className="hidden md:flex w-24 h-24 bg-white rounded-2xl shadow-sm items-center justify-center shrink-0">
              {iconMap[program.icon] || <BookOpen className="w-12 h-12 text-primary" />}
            </div>
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-50 text-primary font-heading text-sm font-semibold mb-3 uppercase tracking-wider">
                {program.category}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                {program.title}
              </h1>
            </div>
          </div>
          <p className="text-xl text-foreground-muted font-body max-w-3xl leading-relaxed">
            {program.shortDescription}
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
            
            {/* Left Col: Description */}
            <div className="lg:col-span-2 space-y-8">
              <h2 className="font-heading text-3xl font-bold text-foreground border-b border-border pb-4">
                About the Program
              </h2>
              <div className="prose prose-lg text-foreground-muted font-body">
                {program.fullDescription.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-6 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Right Col: Sidebar */}
            <div className="space-y-8">
              <div className="bg-surface border border-border rounded-2xl p-8 shadow-sm">
                <h3 className="font-heading text-xl font-bold text-foreground mb-6">Key Activities</h3>
                <ul className="space-y-4">
                  {program.activities.map((activity, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground-muted font-medium">
                      <CheckCircle2 className="w-6 h-6 text-success shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4">Location</h3>
                <div className="flex items-start gap-3 text-foreground-muted">
                  <MapPin className="w-6 h-6 text-primary shrink-0" />
                  <span className="font-medium">{program.geographicFocus}</span>
                </div>
              </div>

              <div className="bg-secondary-light border border-secondary/20 rounded-2xl p-8 text-center">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Support this Initiative</h3>
                <p className="text-foreground-muted mb-6">Your contribution helps us expand our reach and deepen our impact.</p>
                <Button href="/donate" variant="secondary" className="w-full">
                  Donate Now
                </Button>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
}
