import { GalleryContent, PageShell, galleryMetadata } from "../siteContent";

export const metadata = galleryMetadata;

export default function BoatyardGalleryPage() {
  return (
    <PageShell currentPath="/boatyardgallery.html">
      <GalleryContent />
    </PageShell>
  );
}
