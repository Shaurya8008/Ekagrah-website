import os
import re

policies = {
    "privacy-policy": {
        "title": "Privacy Policy",
        "last_updated": "June 2026",
        "content": """
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
"""
    },
    "cancellation-policy": {
        "title": "Cancellation Policy",
        "last_updated": "June 2026",
        "content": """
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
"""
    },
    "refund-policy": {
        "title": "Refund Policy",
        "last_updated": "June 2026",
        "content": """
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
"""
    },
    "return-policy": {
        "title": "Return Policy",
        "last_updated": "June 2026",
        "content": """
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
"""
    },
    "faq": {
        "title": "Frequently Asked Questions (FAQ)",
        "last_updated": "",
        "content": """
<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">1. How can I donate to Ekagrah Seva Foundation?</h3>
<p>You can donate securely through the Foundation's website using available online payment methods.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">2. Will I receive a donation receipt?</h3>
<p>Yes. Donors receive a donation receipt after successful processing of their contribution.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">3. Will I receive a donation certificate?</h3>
<p>Yes. A donation certificate may be provided for eligible contributions and activities supported through the Foundation.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">4. Will I receive photographs or videos of the activity?</h3>
<p>The Foundation makes reasonable efforts to provide activity photographs, videos, and updates to maintain transparency and accountability.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">5. How does the Foundation maintain transparency?</h3>
<p>The Foundation follows a 100% transparency commitment by sharing receipts, certificates, activity updates, photographs, videos, and impact information wherever operationally feasible.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">6. Are donations refundable?</h3>
<p>No. Donations are generally non-refundable except in exceptional cases such as duplicate transactions or verified technical errors.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">7. Is there a minimum donation amount?</h3>
<p>No. Donations of any amount, including Rs. 1, are welcome and appreciated.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">8. What payment methods are accepted?</h3>
<p>Payments may be accepted through UPI, debit cards, credit cards, net banking, wallets, and other available online payment methods.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">9. What is Project SRIJAN?</h3>
<p>Project SRIJAN is an upcoming initiative focused on creating learning opportunities and educational support for children through community-based learning programs.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">10. How can I volunteer with the Foundation?</h3>
<p>Interested individuals may contact the Foundation through the website or official communication channels to explore volunteer opportunities.</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">11. How can I contact the Foundation?</h3>
<p>Email: ekagrahfoundation@gmail.com<br />
Phone: +91 95598 50029</p>

<h3 className="font-heading text-2xl font-bold text-foreground mt-8 mb-4">12. What are the key focus areas of the Foundation?</h3>
<p>The Foundation works in areas including food support, education support, hygiene initiatives, environmental sustainability, community welfare, and social impact programs.</p>
"""
    },
    "terms-and-conditions": {
        "title": "Terms & Conditions (Section A)",
        "last_updated": "",
        "content": """
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
"""
    }
}

base_template = """import { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";

export const metadata: Metadata = {
  title: "__TITLE__ | Ekagrah Seva Foundation",
  description: "__TITLE__ of Ekagrah Seva Foundation",
};

export default function Page() {
  return (
    <LegalPageLayout 
      title="__TITLE__"
      lastUpdated="__LAST_UPDATED__"
    >
      __CONTENT__
    </LegalPageLayout>
  );
}
"""

for slug, data in policies.items():
    page_dir = f"src/app/{slug}"
    os.makedirs(page_dir, exist_ok=True)
    content = base_template.replace("__TITLE__", data["title"]).replace("__LAST_UPDATED__", data["last_updated"]).replace("__CONTENT__", data["content"].strip())
    with open(f"{page_dir}/page.tsx", "w") as f:
        f.write(content)

print("Pages generated successfully.")
