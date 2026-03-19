import { PageShell, ReviewsContent, reviewsMetadata } from "../siteContent";

export const metadata = reviewsMetadata;

export default function WetslipsPage() {
  return (
    <PageShell currentPath="/wetslips.html">
      <ReviewsContent />
    </PageShell>
  );
}
