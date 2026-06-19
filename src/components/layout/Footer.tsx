import Link from "next/link";
import Image from "next/image";
import logoImg from "../../../public/logo.png";
import { Heart, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { NAV_ITEMS, ROUTES, SOCIAL_LINKS } from "@/lib/constants";
import { siteConfig } from "@/data/site-config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white pt-16 pb-8 overflow-hidden relative">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-[100px] opacity-50 -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-800 rounded-full blur-[80px] opacity-50 translate-y-1/3 -translate-x-1/3" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-12">
          {/* Brand Col */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center group inline-flex">
              <div className="bg-white p-2 rounded-xl">
                <Image 
                  src={logoImg} 
                  alt="Ekagrah Seva Foundation" 
                  width={140} 
                  height={45} 
                  className="object-contain"
                  unoptimized={true}
                />
              </div>
            </Link>
            <p className="text-primary-100 font-body text-sm leading-relaxed max-w-sm">
              {siteConfig.tagline}. A registered Section 8 Non-Profit Company
              dedicated to creating lasting change in rural communities through
              education, health, and empowerment.
            </p>
            <div className="flex items-center gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-100 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-secondary" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Policies Col */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Legal & Policies
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms & Conditions', href: '/terms-and-conditions' },
                { label: 'Cancellation Policy', href: '/cancellation-policy' },
                { label: 'Refund Policy', href: '/refund-policy' },
                { label: 'Return Policy', href: '/return-policy' },
                { label: 'FAQ', href: '/faq' },
                { label: 'About Us Document', href: '/documents/Ekagrah_Section_C_About_Us.pdf', external: true },
                { label: 'Branding Details', href: '/documents/Ekagrah_Section_B_Branding_Details.pdf', external: true },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-primary-100 hover:text-white transition-colors duration-200 text-sm font-medium flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-secondary" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Contact Us
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-primary-100 text-sm">
                <MapPin className="w-5 h-5 shrink-0 text-secondary" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.pin}
                </span>
              </li>
              <li className="flex items-center gap-3 text-primary-100 text-sm">
                <Mail className="w-5 h-5 shrink-0 text-secondary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {siteConfig.email}
                </a>
              </li>
              {siteConfig.phone && (
                <li className="flex items-center gap-3 text-primary-100 text-sm">
                  <Phone className="w-5 h-5 shrink-0 text-secondary" />
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>

          {/* Registration Info Col */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-6 text-white flex items-center gap-2">
              <span className="w-8 h-1 bg-secondary rounded-full" />
              Registrations
            </h3>
            <div className="bg-primary/50 border border-primary/50 rounded-xl p-5 text-sm text-primary-100 space-y-3">
              <p>
                <strong className="text-white block mb-1">CIN:</strong>
                {siteConfig.registrations.cin}
              </p>
              <div className="pt-2 border-t border-primary/30 space-y-1">
                {siteConfig.registrations.certification12A && (
                  <p className="flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    12A Registered
                  </p>
                )}
                {siteConfig.registrations.certification80G && (
                  <p className="flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    80G Tax Exemption
                  </p>
                )}
                {siteConfig.registrations.nitiAayog && (
                  <p className="flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    NITI Aayog Darpan Listed
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary/30 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-200">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary fill-secondary" /> for
            social impact
          </p>
        </div>
      </Container>
    </footer>
  );
}
