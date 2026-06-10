import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { faqs } from "@/data/faq";
import { Heart, Users, HandHeart, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Join Ekagrah Seva Foundation as a volunteer, donor, or corporate partner. Together we can create lasting impact.",
};

export default function GetInvolvedPage() {
  const volunteerFaqs = faqs.filter(item => item.category === 'volunteering');

  return (
    <div className="pt-24 pb-16">
      {/* Header */}
      <section className="bg-surface py-16 md:py-24 border-b border-border">
        <Container>
          <SectionHeading
            title="Join the Movement"
            subtitle="Social change is a collective effort. Discover how you can contribute your time, resources, or skills to empower communities."
            accent="Get Involved"
          />
        </Container>
      </section>

      {/* Ways to get involved */}
      <section className="py-20 relative">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Volunteer */}
            <div id="volunteer" className="bg-white border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all reveal-up stagger-1 flex flex-col h-full scroll-mt-24">
              <div className="w-14 h-14 bg-primary-50 text-primary rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Volunteer</h3>
              <p className="font-body text-foreground-muted mb-8 flex-grow">
                Give your time and skills to our grassroots initiatives. From teaching children to assisting in health camps, your presence matters.
              </p>
              <Button href="/contact" variant="outline" className="w-full mt-auto">
                Become a Volunteer
              </Button>
            </div>

            {/* Donate */}
            <div id="donate" className="bg-primary border border-primary-dark rounded-2xl p-8 shadow-elevated transform md:-translate-y-4 reveal-up stagger-2 flex flex-col h-full relative overflow-hidden scroll-mt-24">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/3" />
              <div className="w-14 h-14 bg-white/20 text-white rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/20">
                <Heart className="w-7 h-7 fill-white/20" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white mb-3">Donate</h3>
              <p className="font-body text-primary-50 mb-8 flex-grow">
                Your financial contribution directly funds our education, health, and empowerment programs. All donations are 80G tax-exempt.
              </p>
              <Button href="/donate" variant="secondary" className="w-full mt-auto text-lg">
                Donate Now
              </Button>
            </div>

            {/* Partner */}
            <div id="partner" className="bg-white border border-border rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all reveal-up stagger-3 flex flex-col h-full scroll-mt-24">
              <div className="w-14 h-14 bg-secondary-light text-secondary rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Partner</h3>
              <p className="font-body text-foreground-muted mb-8 flex-grow">
                Corporate CSR partnerships, institutional collaborations, and resource sharing to scale impact across Eastern Uttar Pradesh.
              </p>
              <Button href="/contact" variant="outline" className="w-full mt-auto">
                Explore Partnerships
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Volunteer Focus Area */}
      <section className="py-20 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal-left">
              <div className="aspect-square max-w-md mx-auto bg-primary-100 rounded-full flex items-center justify-center border-8 border-white shadow-xl relative z-10">
                <HandHeart className="w-32 h-32 text-primary/30" />
              </div>
              <div className="absolute inset-0 max-w-md mx-auto bg-secondary opacity-10 rounded-full blur-3xl transform translate-x-10 translate-y-10" />
            </div>
            
            <div className="reveal-right">
              <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Volunteer With Us?
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold font-heading">1</div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Direct Grassroots Impact</h4>
                    <p className="text-foreground-muted">Work directly with beneficiaries in rural areas, seeing the tangible difference your efforts make.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold font-heading">2</div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Skill Development</h4>
                    <p className="text-foreground-muted">Gain hands-on experience in project management, community mobilization, and social sector operations.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 font-bold font-heading">3</div>
                  <div>
                    <h4 className="font-heading font-bold text-lg mb-1">Certificate of Appreciation</h4>
                    <p className="text-foreground-muted">Receive formal recognition for your dedicated hours, valuable for academic and professional portfolios.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <Container size="sm">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Common queries about volunteering and getting involved."
            className="mb-12"
          />
          <Accordion items={volunteerFaqs} />
        </Container>
      </section>
    </div>
  );
}
