import Link from "next/link";

type Testimonial = {
  quote: string;
  author: string;
  context: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They pulled my crab boat out and had us moving quickly. Their large-boat experience and coordination saved us downtime.",
    author: "Kevin F.",
    context: "Tarpon Springs crab boat owner",
  },
  {
    quote:
      "Private, secure, and dependable. It is the first place we call for long-term storage and out-of-water work.",
    author: "Rudy P.",
    context: "Long-term storage customer",
  },
  {
    quote:
      "The crew delivered strong workmanship and clear communication from start to finish. Scheduling was straightforward.",
    author: "Mike T.",
    context: "Local repair and maintenance customer",
  },
];

export function TestimonialCards() {
  return (
    <>
      <div className="home-quote-grid">
        {TESTIMONIALS.map((item) => (
          <blockquote key={item.author} className="home-quote-card">
            <p>&ldquo;{item.quote}&rdquo;</p>
            <footer>
              — {item.author}
              <span className="testimonial-context"> · {item.context}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      <p className="home-testimonials-more">
        <Link href="/wetslips.html">Read More Reviews</Link>
        {" · "}
        <Link href="/wetslips.html">Leave a Review</Link>
      </p>
    </>
  );
}
