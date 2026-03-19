"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { NAP } from "../lib/business";

type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/index.html", label: "Home" },
  { href: "/drystorage.html", label: "Services" },
  { href: "/wetslips.html", label: "Reviews" },
  { href: "/boatyardgallery.html", label: "Gallery" },
  { href: "/#why-choose-us", label: "Why Us" },
  { href: "/contact.html", label: "Contact" },
];

function isActive(currentPath: string, href: string): boolean {
  if (href === "/index.html" || href === "/") return currentPath === "/" || currentPath === "/index.html";
  if (href.startsWith("/#")) return currentPath === "/" || currentPath === "/index.html";
  return currentPath === href;
}

export function SiteHeaderNav({ currentPath }: { currentPath: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHomeSection, setActiveHomeSection] = useState<string>("");
  const isHomeRoute = currentPath === "/" || currentPath === "/index.html";
  const primarySectionLink = "why-choose-us";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);
      if (y < 220) setActiveHomeSection("");
    };
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onEscape);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    document.body.dataset.menuOpen = menuOpen ? "true" : "false";
    return () => {
      document.body.style.overflow = "";
      delete document.body.dataset.menuOpen;
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [currentPath]);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    const onResize = () => {
      if (window.innerWidth > 1060) closeMenu();
    };

    window.addEventListener("hashchange", closeMenu);
    window.addEventListener("popstate", closeMenu);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("hashchange", closeMenu);
      window.removeEventListener("popstate", closeMenu);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if (!isHomeRoute) return;

    const sectionAnchors = ["why-choose-us", "projects", "testimonials"];
    const updateFromHash = () => {
      const id = window.location.hash.replace("#", "");
      if (sectionAnchors.includes(id)) {
        setActiveHomeSection(id);
      } else if (!window.location.hash) {
        setActiveHomeSection("");
      }
    };
    const targets = sectionAnchors
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveHomeSection(visible[0].target.id);
        }
      },
      {
        // Offset for sticky header height.
        rootMargin: "-100px 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    targets.forEach((el) => observer.observe(el));
    updateFromHash();
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [isHomeRoute]);

  const isNavItemActive = (href: string): boolean => {
    if (href === "/index.html" || href === "/") {
      return isHomeRoute && activeHomeSection !== primarySectionLink;
    }

    if (href.startsWith("/#")) {
      if (!isHomeRoute) return false;
      const id = href.replace("/#", "");
      return activeHomeSection === id;
    }

    return isActive(currentPath, href);
  };

  const navAriaCurrent = (href: string): "page" | "location" | undefined => {
    if (!isNavItemActive(href)) return undefined;
    return href.startsWith("/#") ? "location" : "page";
  };

  const headerClass = useMemo(
    () => `top-nav-shell ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "menu-open" : ""}`.trim(),
    [scrolled, menuOpen],
  );

  return (
    <header className={headerClass}>
      <div className="line top-nav-grid">
        <Link href="/index.html" className="nav-logo" aria-label="MAR-MARINA Home">
          <span className="nav-logo-top">MAR-MARINA</span>
          <span className="nav-logo-sub">Tarpon Springs · Open to the public</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          <ul>
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isNavItemActive(item.href) ? "active" : undefined}
                  aria-current={navAriaCurrent(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <a href={`tel:${NAP.phoneTel}`} className="nav-call">
            Call Now
          </a>
          <Link href="/contact.html#quote" className="nav-quote">
            Get a Fast Quote
          </Link>
        </div>

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu-panel"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="mobile-menu-backdrop"
            aria-label="Close menu overlay"
            onClick={() => setMenuOpen(false)}
          />
          <div id="mobile-menu-panel" className="mobile-menu-panel">
            <div className="mobile-menu-top">
              <p className="mobile-menu-title">Navigation</p>
              <button
                type="button"
                className="mobile-menu-close"
                aria-label="Close mobile menu"
                onClick={() => setMenuOpen(false)}
              >
                X
              </button>
            </div>
            <nav aria-label="Mobile primary">
              <ul>
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={isNavItemActive(item.href) ? "active" : undefined}
                      aria-current={navAriaCurrent(item.href)}
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu-actions">
              <a href={`tel:${NAP.phoneTel}`} onClick={() => setMenuOpen(false)}>
                Call Now
              </a>
              <Link href="/contact.html#quote" onClick={() => setMenuOpen(false)}>
                Get a Fast Quote
              </Link>
            </div>
          </div>
        </>
      ) : null}
    </header>
  );
}

