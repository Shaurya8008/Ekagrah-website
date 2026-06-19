import { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "Terms & Conditions (Section A) | Ekagrah Seva Foundation",
  description: "Terms & Conditions (Section A) of Ekagrah Seva Foundation",
};

export default function Page() {
  return (
    <LegalPageLayout 
      title="Terms & Conditions (Section A)"
      lastUpdated=""
    >
      <h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Organization Name</h3>
<p>Ekagrah Seva Foundation</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Foundation Type</h3>
<p>Section 8 Company (Non-Profit Organization)</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Key Details</h3>
<ul className="list-disc pl-6 space-y-2">
  <li><strong>Date of Incorporation:</strong> 21 November 2025</li>
  <li><strong>CIN:</strong> U88900UP2025NPL236783</li>
  <li><strong>PAN:</strong> AAJCE2811R</li>
  <li><strong>TAN:</strong> ALDE01310B</li>
  <li><strong>NGO Darpan ID:</strong> UP/2025/0910929</li>
  <li><strong>12A Status:</strong> Provisional Registration Granted</li>
  <li><strong>80G Status:</strong> Provisional Registration Granted</li>
</ul>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Registration Details</h3>
<ul className="list-disc pl-6 space-y-2">
  <li><strong>Registered With:</strong> Ministry of Corporate Affairs (MCA), Government of India</li>
  <li><strong>State of Registration:</strong> Uttar Pradesh</li>
  <li><strong>District:</strong> Varanasi</li>
  <li><strong>Country:</strong> India</li>
</ul>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Registered Office Address</h3>
<p>C/O Rakesh Kumar Singh<br />
Dindaspur, Jansa Bazar,<br />
Pindra, Varanasi – 221405,<br />
Uttar Pradesh, India</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Official Contact Details</h3>
<p>Official Email: ekagrahfoundation@gmail.com<br />
Official Contact Number: +91 95598 50029<br />
Official WhatsApp Number: +91 95598 50029<br />
Official Website: ekagrahsevafoundation.org</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Operational Area</h3>
<p>Current Operational Area: Varanasi, Uttar Pradesh</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Legal Registrations</h3>
<ul className="list-disc pl-6 space-y-2">
  <li>Section 8 Company Registered under Companies Act, 2013</li>
  <li>Registered with Ministry of Corporate Affairs (MCA)</li>
  <li>NGO Darpan Registered</li>
  <li>12A Provisional Registration Granted</li>
  <li>80G Provisional Registration Granted</li>
</ul>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">Organization Description</h3>
<p>Ekagrah Seva Foundation is a Section 8 non-profit organization established to create sustainable social impact through community welfare initiatives. The foundation works in areas such as food distribution, education support, hygiene awareness, environmental conservation, animal welfare, and community development. Through volunteer-driven programs and donor-supported campaigns, the organization strives to support underserved communities and promote positive social change.</p>
    </LegalPageLayout>
  );
}
