import { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Ekagrah Seva Foundation",
  description: "Privacy Policy of Ekagrah Seva Foundation",
};

export default function Page() {
  return (
    <LegalPageLayout 
      title="Privacy Policy"
      lastUpdated="June 2026"
    >
      <p>Ekagrah Seva Foundation is committed to protecting the privacy and personal information of donors, volunteers, website visitors, and supporters. This Privacy Policy explains how information is collected, used, stored, and protected.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h3>
<ul className="list-disc pl-6 space-y-2">
  <li>Full Name</li>
  <li>Email Address</li>
  <li>Mobile Number</li>
  <li>Postal Address</li>
  <li>Donation Information</li>
  <li>Payment Transaction Details</li>
  <li>Information submitted through website forms</li>
</ul>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Information</h3>
<ul className="list-disc pl-6 space-y-2">
  <li>Processing donations</li>
  <li>Issuing receipts and certificates</li>
  <li>Sharing activity updates and impact reports</li>
  <li>Responding to inquiries</li>
  <li>Improving website performance</li>
  <li>Legal and compliance purposes</li>
</ul>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">3. Donation Payments</h3>
<p>Online donations are securely processed through Razorpay and authorized payment gateways. Sensitive payment details are not stored by the Foundation.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">4. Data Security</h3>
<p>Reasonable measures are taken to protect personal information from unauthorized access, disclosure, alteration, or misuse.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">5. Donor Transparency</h3>
<p>Donors may receive donation receipts, certificates, photographs, videos, and impact updates related to their contributions.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">6. Information Sharing</h3>
<p>Personal information is not sold, rented, or traded. Information may be shared only when required by law or with authorized service providers.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">7. Cookies and Analytics</h3>
<p>The website may use cookies and analytics tools to improve user experience and website performance.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">8. Third-Party Links</h3>
<p>The Foundation is not responsible for the privacy practices of external websites linked from this website.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">9. User Rights</h3>
<p>Users may request access, correction, or removal of information where legally permissible.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">10. Policy Updates</h3>
<p>The Foundation reserves the right to update this policy at any time.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Contact Information</h3>
<p>Email: ekagrahfoundation@gmail.com<br />
Website: www.ekagrahsevafoundation.org<br />
Jurisdiction: Varanasi, Uttar Pradesh, India</p>
    </LegalPageLayout>
  );
}
