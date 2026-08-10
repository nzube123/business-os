const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Overview", href: "#overview" },
      { label: "Intelligence", href: "#intelligence" },
      { label: "Operations", href: "#operations" },
      { label: "Automation", href: "#automation" },
      { label: "Pricing", href: "#pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Insights", href: "#insights" },
      { label: "Integrations", href: "#integrations" },
      { label: "Documentation", href: "#documentation" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
      { label: "Careers", href: "#careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 border-b border-border py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_2fr] lg:py-20">
          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#overview"
              className="inline-flex items-center gap-2"
              aria-label="Business OS home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-bold text-primary-foreground">
                B
              </span>

              <span className="text-sm font-semibold tracking-tight text-foreground">
                Business <span className="text-muted-foreground">OS</span>
              </span>
            </a>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              An intelligent operating system for businesses that want to
              understand their operations, automate their work, and make
              better decisions.
            </p>

            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Built for modern businesses
            </div>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Business OS. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <a
              href="#privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy
            </a>

            <a
              href="#terms"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Terms
            </a>

            <a
              href="#security"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}