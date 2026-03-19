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
        <p className="cta-heading">Get a quote for storage or service</p>
        <p>
          <Link href="/contact.html" className="quick-action">
            Request a quote
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
        <p className="cta-heading">Contact MAR-MARINA</p>
        <p>
          <a href={`tel:${NAP.phoneTel}`} className="quick-action">Call {NAP.phone}</a>
          {" · "}
          <Link href="/contact.html" className="cta-link">Send a message</Link>
        </p>
      </div>
    );
  }

  return (
    <div className={`cta-block ${className}`}>
      <p>
        <a href={`tel:${NAP.phoneTel}`} className="quick-action">Call the marina</a>
        {" · "}
        <Link href="/contact.html" className="cta-link">Contact us</Link>
      </p>
    </div>
  );
}
