import { PageShell, ServicesContent, servicesMetadata } from "../siteContent";

export const metadata = servicesMetadata;

export default function DrystoragePage() {
  return (
    <PageShell currentPath="/drystorage.html">
      <ServicesContent />
    </PageShell>
  );
}
