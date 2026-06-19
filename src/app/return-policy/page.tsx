import { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Return Policy | Ekagrah Seva Foundation",
  description: "Return Policy of Ekagrah Seva Foundation",
};

export default function Page() {
  return (
    <LegalPageLayout 
      title="Return Policy"
      lastUpdated="June 2026"
    >
      <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">1. Purpose</h3>
<p>This Return Policy explains the applicability of returns in relation to donations made to Ekagrah Seva Foundation.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">2. Nature of Donations</h3>
<p>Donations made to Ekagrah Seva Foundation are voluntary charitable contributions intended to support social welfare, educational, environmental, and community development initiatives.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">3. No Return Applicable</h3>
<p>Since donations are not purchases of goods, products, or commercial services, no return, replacement, exchange, or product return policy is applicable to donations made through the Foundation's website or payment channels.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">4. Donation Acknowledgement</h3>
<p>Upon successful donation, donors may receive acknowledgements such as donation receipts, donation certificates, activity updates, photographs, videos, or impact reports, subject to operational feasibility.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">5. Clarification</h3>
<p>The Foundation's programs are charitable in nature. Therefore, the concept of returning a donation is not applicable in the same manner as consumer purchases or retail transactions.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">6. Contact Information</h3>
<p>For questions regarding donations or this policy, please contact:</p>
<p>Email: ekagrahfoundation@gmail.com<br />
Phone: +91 95598 50029<br />
Website: www.ekagrahsevafoundation.org</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Jurisdiction</h3>
<p>This policy shall be governed by the laws of India and subject to the jurisdiction of courts located in Varanasi, Uttar Pradesh.</p>
    </LegalPageLayout>
  );
}
