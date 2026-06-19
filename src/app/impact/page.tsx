import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrutalistCard } from "@/components/ui/BrutalistCard";
import { impactStories } from "@/data/impact-stories";
import { formatDate } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "Read stories of change and see the real-world impact of Ekagrah Seva Foundation's programs.",
};

export default function ImpactPage() {
  const featuredStory = impactStories.find((s) => s.featured) || impactStories[0];
  const otherStories = impactStories.filter((s) => s.id !== featuredStory.id);

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-surface py-16 md:py-24 border-b border-border">
        <Container>
          <SectionHeading
            title="Stories of Change"
            subtitle="Real stories from the communities we serve. Witness how your support transforms lives on the ground."
            accent="Our Impact"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          {/* Featured Story */}
          {featuredStory && (
            <div className="mb-20">
              <h3 className="font-heading text-2xl font-bold mb-8 flex items-center gap-2">
                <span className="w-8 h-1 bg-secondary rounded-full" />
                Featured Story
              </h3>
              <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-elevated group reveal-scale">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-64 lg:h-auto bg-primary-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply transition-opacity group-hover:opacity-0 duration-500 z-10" />
                    <Image
                      src={featuredStory.image}
                      alt={featuredStory.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex gap-2 mb-4">
                      {featuredStory.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-primary-50 text-primary text-xs font-semibold uppercase tracking-wider rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                      {featuredStory.title}
                    </h4>
                    <p className="font-body text-lg text-foreground-muted mb-6 leading-relaxed">
                      {featuredStory.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-foreground-muted mb-8 font-medium">
                      <Calendar className="w-4 h-4" />
                      {formatDate(featuredStory.publishedAt)}
                    </div>
                    <Link href={`/impact/${featuredStory.slug}`} className="inline-flex items-center gap-2 font-heading font-semibold text-white bg-primary px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors self-start cursor-pointer">
                      Read Full Story
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Stories Grid */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Latest Updates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherStories.map((story, index) => (
                <BrutalistCard key={story.id} className={`reveal-fade flex flex-col p-0 overflow-hidden stagger-${(index % 3) + 1}`}>
                  <div className="h-48 bg-primary-50 relative overflow-hidden">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {story.tags.map((tag) => (
                        <span key={tag} className="text-xs font-semibold text-secondary uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-heading text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {story.title}
                    </h4>
                    <p className="font-body text-foreground-muted mb-4 line-clamp-3 text-sm">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                      <span className="text-xs text-foreground-muted font-medium flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {formatDate(story.publishedAt)}
                      </span>
                      <Link href={`/impact/${story.slug}`} className="text-primary font-semibold text-sm flex items-center gap-1 hover:text-primary-dark cursor-pointer">
                        Read more <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </BrutalistCard>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
