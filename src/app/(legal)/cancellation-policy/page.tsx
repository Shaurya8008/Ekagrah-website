import { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Cancellation Policy | Ekagrah Seva Foundation",
  description: "Cancellation Policy of Ekagrah Seva Foundation",
};

export default function Page() {
  return (
    <LegalPageLayout 
      title="Cancellation Policy"
      lastUpdated="June 2026"
    >
      <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">1. Purpose</h3>
<p>This Cancellation Policy outlines the terms governing cancellation requests related to donations made to Ekagrah Seva Foundation.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">2. Donation Cancellation</h3>
<p>Donations made to Ekagrah Seva Foundation are voluntary contributions intended to support charitable activities and social welfare programs. Once a donation has been successfully processed, cancellation requests are generally not accepted.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">3. Exceptional Cases</h3>
<p>In exceptional circumstances, including technical errors or duplicate transactions, the Foundation may review cancellation-related requests on a case-by-case basis.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">4. Foundation Discretion</h3>
<p>Any review of a cancellation request shall be conducted solely at the discretion of Ekagrah Seva Foundation. Submission of a request does not guarantee approval.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">5. Payment Gateway Transactions</h3>
<p>Transactions processed through Razorpay or other authorized payment service providers are subject to their operational and technical procedures. Processing delays or failures beyond the Foundation's control shall not automatically qualify for cancellation.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">6. Communication</h3>
<p>Individuals seeking clarification regarding a transaction may contact the Foundation using the details below.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Contact Information</h3>
<p>Email: ekagrahfoundation@gmail.com<br />
Phone: +91 95598 50029<br />
Website: www.ekagrahsevafoundation.org</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Jurisdiction</h3>
<p>This policy shall be governed by the laws of India and subject to the jurisdiction of courts located in Varanasi, Uttar Pradesh.</p>
    </LegalPageLayout>
  );
}
