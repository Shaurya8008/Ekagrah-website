import type { Metadata } from "next";
import { Red_Hat_Display, Nunito } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { AuthProvider } from "@/contexts/AuthContext";
import { ScrollObserver } from "@/components/ui/ScrollObserver";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const nunito = Nunito({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Ekagrah Seva Foundation | Focused Service for Sustainable Social Impact",
    template: "%s | Ekagrah Seva Foundation",
  },
  description:
    "Ekagrah Seva Foundation is a Section 8 non-profit company working towards sustainable social impact through education, health, women empowerment, and community development in Varanasi, Uttar Pradesh.",
  keywords: [
    "Ekagrah Seva Foundation",
    "NGO Varanasi",
    "non-profit India",
    "social impact",
    "Section 8 company",
    "education",
    "women empowerment",
    "community development",
    "Uttar Pradesh",
  ],
  authors: [{ name: "Ekagrah Seva Foundation" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ekagrahfoundation.org",
    siteName: "Ekagrah Seva Foundation",
    title: "Ekagrah Seva Foundation | Focused Service for Sustainable Social Impact",
    description:
      "A Section 8 non-profit working towards sustainable social impact in Varanasi, UP through education, health, and community empowerment.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ekagrah Seva Foundation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ekagrah Seva Foundation",
    description: "Focused Service for Sustainable Social Impact",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${redHatDisplay.variable} ${nunito.variable} h-full`}
    >
      <body className="min-h-full flex flex-col font-body antialiased bg-background text-foreground">
        <ScrollObserver />
        <AuthProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <WhatsAppButton />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
