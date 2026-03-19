import { ContactContent, PageShell, contactMetadata } from "../siteContent";

export const metadata = contactMetadata;

export default function ContactPage() {
  return (
    <PageShell currentPath="/contact.html">
      <ContactContent />
    </PageShell>
  );
}
