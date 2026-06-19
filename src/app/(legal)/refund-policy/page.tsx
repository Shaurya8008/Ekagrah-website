import { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Refund Policy | Ekagrah Seva Foundation",
  description: "Refund Policy of Ekagrah Seva Foundation",
};

export default function Page() {
  return (
    <LegalPageLayout 
      title="Refund Policy"
      lastUpdated="June 2026"
    >
      <p>Ekagrah Seva Foundation is committed to maintaining transparency and accountability in all donation-related activities.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">1. General Policy</h3>
<p>All donations made to Ekagrah Seva Foundation are voluntary contributions made to support charitable and social welfare activities. Donations are generally non-refundable.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">2. Non-Refundable Donations</h3>
<p>Once a donation has been successfully processed and acknowledged, it cannot be refunded, returned, or exchanged for any reason, including change of mind by the donor.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">3. Exceptional Circumstances</h3>
<p>Refund requests may only be considered in exceptional cases such as duplicate transactions, technical payment errors, or unauthorized transactions, subject to verification by the Foundation.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">4. Review Process</h3>
<p>Any refund request received by the Foundation will be reviewed on a case-by-case basis. The decision of Ekagrah Seva Foundation shall be final.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">5. Donation Utilization</h3>
<p>Donations received by the Foundation may be allocated to the selected cause or, where necessary, to a similar charitable purpose in accordance with organizational requirements and public benefit objectives.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">6. Payment Gateway Charges</h3>
<p>Where applicable, payment gateway charges, banking charges, or third-party processing fees may not be refundable even if a refund is approved.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">7. Contact for Refund Queries</h3>
<p>Email: ekagrahfoundation@gmail.com<br />
Phone: +91 95598 50029</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Jurisdiction</h3>
<p>This policy shall be governed by the laws of India and subject to the jurisdiction of courts in Varanasi, Uttar Pradesh.</p>
    </LegalPageLayout>
  );
}
