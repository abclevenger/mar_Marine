import Link from "next/link";
import { NAP } from "../lib/business";

type Props = {
  variant?: "default" | "quote" | "contact";
  className?: string;
};

export function ConversionCTA({ variant = "default", className = "" }: Props) {
  if (variant === "quote") {
    return (
      <div className={`cta-block ${className}`}>
        <p className="cta-heading">Get a Quote for Storage or Service</p>
        <p>
          <Link href="/contact.html" className="quick-action">
            Get a Quote
          </Link>
          {" · "}
          <a href={`tel:${NAP.phoneTel}`} className="cta-link">{NAP.phone}</a>
          {" · "}
          <a href={`mailto:${NAP.email}`} className="cta-link">Email us</a>
        </p>
      </div>
    );
  }

  if (variant === "contact") {
    return (
      <div className={`cta-block ${className}`}>
        <p className="cta-heading">Contact Mar Marina</p>
        <p>
          <a href={`tel:${NAP.phoneTel}`} className="quick-action">Call Now</a>
          {" · "}
          <Link href="/contact.html" className="cta-link">Contact Us</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={`cta-block ${className}`}>
      <p>
        <a href={`tel:${NAP.phoneTel}`} className="quick-action">Call Now</a>
        {" · "}
        <Link href="/contact.html" className="cta-link">Contact Us</Link>
      </p>
    </div>
  );
}
