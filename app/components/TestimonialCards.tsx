import Link from "next/link";

type Testimonial = {
  quote: string;
  author: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They pulled my crab boat out and had us moving quickly. Their large-boat experience and coordination saved us downtime.",
    author: "Kevin F.",
  },
  {
    quote:
      "Private, secure, and dependable. It is the first place we call for long-term storage and out-of-water work.",
    author: "Rudy P.",
  },
  {
    quote:
      "The crew delivered strong workmanship and clear communication from start to finish. Scheduling was straightforward.",
    author: "Mike T.",
  },
];

export function TestimonialCards() {
  return (
    <>
      {/* TODO: Replace with additional verified testimonials and before/after project references. */}
      <div className="home-quote-grid">
        {TESTIMONIALS.map((item) => (
          <blockquote key={item.author} className="home-quote-card">
            <p>&ldquo;{item.quote}&rdquo;</p>
            <footer>— {item.author}</footer>
          </blockquote>
        ))}
      </div>
      <p className="home-testimonials-more">
        <Link href="/wetslips.html">Read More Reviews</Link>
      </p>
    </>
  );
}
