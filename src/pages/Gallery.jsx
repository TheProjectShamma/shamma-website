import { Page } from "../ui";
import WorkshopBanner from "../components/WorkshopBanner";
import GalleryContent from "../components/GalleryContent";
import { banners, workshops } from "../content";

export default function Gallery() {
  return (
    <Page
      title="Gallery"
      lede="A collection of photos and videos from our events, activities, and initiatives."
    >
      <WorkshopBanner banners={banners} />

      <section className="mt-8 border-t border-line pt-6">
        <header className="mb-5">
          <h2 className="text-2xl text-ink sm:text-3xl">Our Workshops</h2>
          <p className="mt-2 text-muted">
          Explore the moments captured during our workshops and events.
          </p>
        </header>
        <GalleryContent workshops={workshops} />
      </section>
    </Page>
  );
}