import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/team";
import { milestones } from "@/data/milestones";
import { Heart, Building2, Target, Users, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Ekagrah Seva Foundation's mission, vision, and the team behind our grassroots initiatives in Varanasi.",
};

const iconMap: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-6 h-6 text-primary" />,
  Award: <Target className="w-6 h-6 text-primary" />,
  Heart: <Heart className="w-6 h-6 text-primary" />,
  Shield: <Shield className="w-6 h-6 text-primary" />,
  Globe: <Users className="w-6 h-6 text-primary" />,
};

export default function AboutPage() {
  return (
    <div className="pt-24 pb-16">
      {/* Page Header */}
      <section className="bg-surface py-16 md:py-24 border-b border-border relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 opacity-60" />
        <Container className="relative z-10">
          <SectionHeading
            title="About Ekagrah Seva"
            subtitle="We are a grassroots non-profit organisation committed to driving sustainable change in the heart of Uttar Pradesh."
            accent="Our Story"
          />
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            <div className="bg-primary-50 rounded-2xl p-10 border border-primary/10 reveal-left">
              <div className="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Target className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                To empower underserved and vulnerable communities in rural and semi-urban Varanasi through targeted interventions in education, healthcare, women’s empowerment, and environmental sustainability, fostering self-reliance and inclusive growth.
              </p>
            </div>
            <div className="bg-secondary-light rounded-2xl p-10 border border-secondary/10 reveal-right">
              <div className="w-14 h-14 bg-secondary text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                We envision a society where every individual, regardless of their socioeconomic background, has equitable access to quality education, essential healthcare, and opportunities for dignified livelihood, creating a resilient and self-sustaining community.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Journey Timeline */}
      <section id="timeline" className="py-24 bg-surface scroll-mt-24">
        <Container>
          <SectionHeading
            title="Our Journey"
            subtitle="The milestones that mark our path toward creating meaningful impact."
            accent="Timeline"
            className="mb-16"
          />
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-primary/20 -translate-x-1/2 rounded-full" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.id} className="relative flex items-center md:justify-center">
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-12 h-12 bg-white border-4 border-primary rounded-full flex items-center justify-center -translate-x-1/2 z-10 shadow-md">
                    {iconMap[milestone.icon] || <Target className="w-5 h-5 text-primary" />}
                  </div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right md:ml-auto md:mr-0' : 'md:pl-16 md:mr-auto md:ml-0'}`}>
                    <div className="bg-white p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow reveal">
                      <span className="font-heading font-semibold text-secondary text-sm mb-2 block">
                        {milestone.date}
                      </span>
                      <h4 className="font-heading text-xl font-bold text-foreground mb-2">
                        {milestone.title}
                      </h4>
                      <p className="font-body text-foreground-muted">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-24 scroll-mt-24">
        <Container>
          <SectionHeading
            title="Leadership Team"
            subtitle="Meet the dedicated individuals driving Ekagrah Seva Foundation forward."
            accent="The People"
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-surface rounded-xl overflow-hidden border border-border shadow-card reveal-scale group">
                <div className="h-64 bg-primary-100 relative">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center text-primary/30">
                    <Users className="w-20 h-20" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="font-heading text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h4>
                  <p className="font-heading text-sm text-secondary font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="font-body text-foreground-muted text-sm leading-relaxed line-clamp-4">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
