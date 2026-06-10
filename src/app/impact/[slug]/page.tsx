import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { impactStories } from "@/data/impact-stories";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/utils";

interface ImpactStoryPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return impactStories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: ImpactStoryPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const story = impactStories.find((s) => s.slug === resolvedParams.slug);
  
  if (!story) {
    return {
      title: "Story Not Found",
    };
  }

  return {
    title: story.title,
    description: story.excerpt,
  };
}

export default async function ImpactStoryPage({ params }: ImpactStoryPageProps) {
  const resolvedParams = await params;
  const story = impactStories.find((s) => s.slug === resolvedParams.slug);

  if (!story) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-surface py-12 md:py-20 border-b border-border">
        <Container size="md">
          <Link href="/impact" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Impact Stories
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {story.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            {story.title}
          </h1>

          <div className="flex items-center gap-4 text-foreground-muted font-medium border-t border-border pt-6 mt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-secondary" />
              {formatDate(story.publishedAt)}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <Container size="md">
          <div className="aspect-video w-full bg-primary-100 rounded-2xl overflow-hidden mb-12 flex items-center justify-center relative shadow-md">
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg md:prose-xl text-foreground-muted font-body prose-headings:font-heading prose-headings:text-foreground prose-a:text-primary mx-auto">
            {story.body.split('\n\n').map((paragraph, i) => (
              <p key={i} className="mb-6 leading-relaxed">{paragraph}</p>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-border flex flex-col items-center text-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Help Us Write the Next Story</h3>
            <p className="text-foreground-muted mb-8 max-w-lg">
              Your support makes these transformations possible. Join us in making a real difference.
            </p>
            <div className="flex gap-4">
              <Button href="/donate" variant="primary">
                Donate Now
              </Button>
              <Button href="/get-involved" variant="outline">
                Get Involved
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
