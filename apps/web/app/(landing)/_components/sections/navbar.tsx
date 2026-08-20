"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import ThemeToggle from "../ThemeToggle";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Intelligence", href: "#intelligence" },
  { label: "Operations", href: "#operations" },
  { label: "Automation", href: "#automation" },
  { label: "Insights", href: "#insights" },
  { label: "Integrations", href: "#integrations" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="
          mx-auto max-w-7xl
          overflow-hidden
          rounded-2xl
          border border-border/70
          bg-background/75
          shadow-sm
          backdrop-blur-xl
          supports-backdrop-filter:bg-background/60
        "
      >
        <div className="flex min-h-16 items-center justify-between gap-6 px-4 sm:px-5">
          {/* Brand */}
          <a
            href="#overview"
            aria-label="Business OS home"
            className="
              group
              flex shrink-0 items-center gap-2.5
              rounded-lg
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-ring
              focus-visible:ring-offset-2
              focus-visible:ring-offset-background
            "
          >
            <span
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                bg-primary
                text-xs font-bold
                tracking-tight
                text-primary-foreground
                shadow-sm
                transition-transform duration-200
                group-hover:scale-[1.03]
              "
              aria-hidden="true"
            >
              B
            </span>

            <span className="text-sm font-semibold tracking-tight text-foreground">
              Business{" "}
              <span className="text-muted-foreground">OS</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-0.5 xl:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="
                  rounded-lg px-3 py-2
                  text-[13px] font-medium
                  text-muted-foreground
                  transition-colors duration-200
                  hover:bg-secondary/70
                  hover:text-foreground
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-ring
                "
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-1.5 lg:flex">
            <ThemeToggle />

            <a
              href="#login"
              className="
                rounded-lg px-3 py-2
                text-sm font-medium
                text-muted-foreground
                transition-colors duration-200
                hover:text-foreground
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
              "
            >
              Log in
            </a>

            <a
              href="#get-started"
              className="
                inline-flex items-center justify-center
                rounded-lg
                bg-primary
                px-4 py-2
                text-sm font-medium
                text-primary-foreground
                shadow-sm
                transition-all duration-200
                hover:-translate-y-px
                hover:shadow-md
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
                focus-visible:ring-offset-2
                focus-visible:ring-offset-background
              "
            >
              Get started
            </a>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <ThemeToggle />

            <button
              type="button"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              aria-label={
                mobileOpen ? "Close navigation" : "Open navigation"
              }
              className="
                flex h-9 w-9 items-center justify-center
                rounded-lg
                border border-border
                text-foreground
                transition-colors duration-200
                hover:bg-secondary
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-ring
              "
            >
              {mobileOpen ? (
                <X className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Menu className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div
            id="mobile-navigation"
            className="
              border-t border-border/70
              px-4 pb-4 pt-3
              lg:hidden
            "
          >
            <div className="grid gap-1">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="
                    rounded-lg px-3 py-2.5
                    text-sm font-medium
                    text-muted-foreground
                    transition-colors duration-200
                    hover:bg-secondary
                    hover:text-foreground
                  "
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border/70 pt-3">
                <a
                  href="#login"
                  onClick={closeMobileMenu}
                  className="
                    rounded-lg border border-border
                    px-3 py-2.5
                    text-center text-sm font-medium
                    text-foreground
                    transition-colors duration-200
                    hover:bg-secondary
                  "
                >
                  Log in
                </a>

                <a
                  href="#get-started"
                  onClick={closeMobileMenu}
                  className="
                    rounded-lg
                    bg-primary
                    px-3 py-2.5
                    text-center text-sm font-medium
                    text-primary-foreground
                    shadow-sm
                    transition-all duration-200
                    hover:-translate-y-px
                    hover:shadow-md
                  "
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}