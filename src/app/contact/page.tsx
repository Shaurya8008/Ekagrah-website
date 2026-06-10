import { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Ekagrah Seva Foundation. We welcome volunteers, partners, and donors.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <section className="bg-surface py-16 md:py-24 border-b border-border">
        <Container>
          <SectionHeading
            title="Contact Us"
            subtitle="Have a question or want to collaborate? We'd love to hear from you."
            accent="Get in Touch"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-10 reveal-left">
              <div>
                <h3 className="font-heading text-3xl font-bold text-foreground mb-4">
                  Let's create impact together
                </h3>
                <p className="font-body text-lg text-foreground-muted">
                  Whether you want to volunteer, partner with us, or learn more about our programs, our team is ready to connect.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-5 p-6 bg-surface rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary-50 text-primary rounded-full flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground mb-1">Registered Office</h4>
                    <p className="text-foreground-muted font-body">
                      {siteConfig.address.line1}, {siteConfig.address.line2}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.pin}<br />
                      {siteConfig.address.country}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 p-6 bg-surface rounded-xl border border-border shadow-sm">
                  <div className="w-12 h-12 bg-primary-50 text-primary rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-foreground mb-1">Email Us</h4>
                    <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline font-body">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {siteConfig.phone && (
                  <div className="flex items-start gap-5 p-6 bg-surface rounded-xl border border-border shadow-sm">
                    <div className="w-12 h-12 bg-primary-50 text-primary rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg text-foreground mb-1">Call Us</h4>
                      <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline font-body">
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-elevated border border-border reveal-scale">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <Input label="First Name" placeholder="John" required />
                  <Input label="Last Name" placeholder="Doe" required />
                </div>
                <Input label="Email Address" type="email" placeholder="john@example.com" required />
                <Input label="Subject" placeholder="How can I help?" required />
                <Textarea label="Message" placeholder="Type your message here..." required />
                
                <Button type="button" size="lg" className="mt-4 w-full" icon={<Send className="w-4 h-4" />}>
                  Send Message
                </Button>
                <p className="text-xs text-center text-foreground-muted mt-2">
                  We aim to respond to all inquiries within 48 hours.
                </p>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
