import { ArrowUpRight } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden border-b border-border bg-surface"
    >
      {/* Ambient brand accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
          {/* Copy */}
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                Get started
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Give your business a better operating system.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Bring your operations, intelligence, and automation into one
              place—and build a clearer way to run your business.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href="#pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Start building
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href="#product-preview"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background/70 px-5 py-3 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Explore Business OS
            </a>
          </div>
        </div>

        {/* Supporting strip */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            Built for businesses that want clarity without unnecessary
            complexity.
          </p>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Designed for modern teams
          </div>
        </div>
      </div>
    </section>
  );
}