import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { team } from "@/data/team";
import { milestones } from "@/data/milestones";
import { Heart, Building2, Target, Users, Shield } from "lucide-react";
import Image from "next/image";

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
                To create sustainable social impact through transparent, accountable, and community-focused initiatives that improve lives and strengthen communities.
              </p>
            </div>
            <div className="bg-secondary-light rounded-2xl p-10 border border-secondary/10 reveal-right">
              <div className="w-14 h-14 bg-secondary text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                To build a compassionate and empowered society where every individual has access to opportunities, dignity, and a better future.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* About Us & Our Story */}
      <section className="py-20 bg-surface border-b border-border">
        <Container>
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="reveal-scale">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4 text-center">About Us</h3>
              <p className="font-body text-lg text-foreground-muted leading-relaxed mb-4">
                Ekagrah Seva Foundation is a Section 8 non-profit organization committed to creating meaningful social impact through transparent and community-driven initiatives. We work towards supporting underserved communities by addressing essential needs such as education, nutrition, hygiene, environmental sustainability, and community welfare.
              </p>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                Through the collective efforts of donors, volunteers, and supporters, the foundation strives to create positive and lasting change while promoting dignity, equality, and opportunity for all.
              </p>
            </div>
            <div className="reveal-scale">
              <h3 className="font-heading text-3xl font-bold text-foreground mb-4 text-center">Our Story</h3>
              <p className="font-body text-lg text-foreground-muted leading-relaxed mb-4">
                Ekagrah Seva Foundation was established with the belief that meaningful change begins with collective responsibility and consistent action. The foundation was created to serve as a transparent and trustworthy platform where individuals can contribute towards causes that create real impact in society.
              </p>
              <p className="font-body text-lg text-foreground-muted leading-relaxed">
                By connecting people with meaningful social initiatives, the organization aims to strengthen communities and support those who need it most.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-primary-50">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-10 border border-primary/10 shadow-lg reveal-scale">
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6 text-center">Founder&apos;s Message</h3>
            <div className="space-y-4 font-body text-lg text-foreground-muted leading-relaxed">
              <p>At Ekagrah Seva Foundation, we believe that meaningful change begins with empathy, responsibility, and collective action.</p>
              <p>Our vision is to contribute towards a society where every individual has access to opportunities, dignity, and support when needed. Through our initiatives, we strive to address important social challenges while creating sustainable impact at the community level.</p>
              <p>One of our strongest commitments is maintaining 100% transparency in everything we do. We believe that trust is the foundation of social impact, and every contribution received is managed with accountability and responsibility.</p>
              <p>I sincerely thank every donor, volunteer, supporter, and well-wisher who has chosen to be part of this journey. Together, we can continue creating positive change and building stronger communities for a better future.</p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <h4 className="font-heading text-xl font-bold text-foreground">Nishant Singh</h4>
              <p className="font-heading text-sm text-secondary font-medium">Founder & CEO</p>
              <p className="font-heading text-sm text-foreground-muted">Ekagrah Seva Foundation</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 100% Transparency Commitment */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="max-w-4xl mx-auto text-center reveal-scale">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 text-success rounded-full mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-3xl font-bold text-foreground mb-6">100% Transparency Commitment</h3>
            <p className="font-body text-lg text-foreground-muted leading-relaxed mb-8">
              We are committed to ensuring that every contribution is utilized responsibly and reaches its intended purpose with complete transparency and accountability.
            </p>
            <div className="bg-white rounded-xl p-8 border border-border shadow-sm inline-block text-left">
              <h4 className="font-heading text-xl font-bold text-foreground mb-4">Every donor receives:</h4>
              <ul className="space-y-3 font-body text-foreground-muted">
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Donation Receipt</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Donation Certificate</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Activity Photographs</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Activity Videos</li>
                <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-primary" /> Impact Updates</li>
              </ul>
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
                  {member.image ? (
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-primary/30">
                      <Users className="w-20 h-20" />
                    </div>
                  )}
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
