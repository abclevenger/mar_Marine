import { ContactForm } from "./ContactForm";
import { NAP } from "../lib/business";

export function QuoteRequestSection() {
  return (
    <section className="home-quote-section" id="quote" aria-labelledby="quote-section-heading">
      <div className="line home-quote-grid-layout">
        <div className="home-quote-copy">
          <h2 id="quote-section-heading" className="home-heading">
            Get a Quote
          </h2>
          <p className="home-quote-lead">
            Tell us what your boat needs and we&apos;ll get back to you quickly with practical next
            steps for repair, storage, maintenance, or inspection scheduling.
          </p>
          <p className="home-quote-lead">Typical requests are reviewed during business hours.</p>
          <address className="home-quote-nap">
            <strong>Mar Marina</strong>
            <br />
            {NAP.street}
            <br />
            {NAP.city}, {NAP.region} {NAP.postalCode}
            <br />
            <a href={`tel:${NAP.phoneTel}`}>{NAP.phone}</a>
            <br />
            <a href={`mailto:${NAP.email}`}>{NAP.email}</a>
          </address>
          <a href={`tel:${NAP.phoneTel}`} className="btn-hero btn-hero-primary home-quote-call">
            Call Now
          </a>
        </div>
        <div className="home-quote-form-wrap">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
