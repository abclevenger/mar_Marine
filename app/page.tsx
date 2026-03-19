import { HomeContent, PageShell, homeMetadata } from "./siteContent";

export const metadata = homeMetadata;

export default function HomePage() {
  return (
    <PageShell currentPath="/">
      <HomeContent />
    </PageShell>
  );
}
