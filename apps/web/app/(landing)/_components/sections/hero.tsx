import { ArrowRight} from "lucide-react";

export default function Hero() {
  return (
    <section
      id="overview"
      className="relative isolate overflow-hidden border-b border-border"
    >
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-150 w-225 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl dark:bg-accent/10" />

        <div
          className="
            absolute inset-0
            bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)]
            bg-size:72px_72px
            opacity-30
            mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)
          "
        />
      </div>

      <div className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-6 pb-20 pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="grid w-full gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          {/* Copy */}
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-primary/20
                bg-primary/5
                px-3 py-1.5
                text-xs font-medium
                text-primary
              "
            >
              Intelligent business infrastructure
            </div>

            {/* Heading */}
            <h1
              className="
                mt-7
                max-w-4xl
                text-5xl
                font-semibold
                tracking-[-0.04em]
                text-foreground
                sm:text-6xl
                lg:text-7xl
                lg:leading-[1.02]
              "
            >
              Run your business
              <span className="block">
                with{" "}
                <span className="text-primary">clarity.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Business OS brings your operations, data, automation, and
              intelligence into one connected system — so your team can spend
              less time managing complexity and more time moving the business
              forward.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#get-started"
                className="
                  group inline-flex h-11 items-center justify-center gap-2
                  rounded-lg
                  bg-primary
                  px-5
                  text-sm font-medium
                  text-primary-foreground
                  shadow-lg shadow-primary/15
                  transition-all duration-200
                  hover:-translate-y-0.5
                  hover:opacity-90
                  hover:shadow-xl hover:shadow-primary/20
                "
              >
                Get started
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#product-preview"
                className="
                  inline-flex h-11 items-center justify-center
                  rounded-lg
                  border border-border
                  bg-background/70
                  px-5
                  text-sm font-medium
                  text-foreground
                  backdrop-blur-sm
                  transition-colors duration-200
                  hover:bg-secondary
                "
              >
                Explore the platform
              </a>
            </div>

            {/* Trust signal */}
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-muted-foreground">
              <span>Operations</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Automation</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>Business intelligence</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span>AI</span>
            </div>
          </div>

          {/* Product visual */}
          <div
            id="product-preview"
            className="relative mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative rounded-2xl border border-border/80 bg-card/80 p-2 shadow-2xl shadow-primary/10 backdrop-blur-xl dark:shadow-black/30">
              {/* Window header */}
              <div className="flex h-11 items-center justify-between border-b border-border px-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted/40" />
                </div>

                <div className="rounded-md bg-secondary px-3 py-1 text-[10px] text-muted-foreground">
                  Business OS
                </div>

                <div className="h-6 w-6 rounded-md bg-secondary" />
              </div>

              {/* Dashboard */}
              <div className="grid min-h-90 grid-cols-[72px_1fr]">
                <aside className="border-r border-border p-2">
                  <div className="space-y-2">
                    <div className="h-8 rounded-md bg-primary/15" />
                    <div className="h-8 rounded-md bg-secondary" />
                    <div className="h-8 rounded-md bg-secondary" />
                    <div className="h-8 rounded-md bg-secondary" />
                    <div className="h-8 rounded-md bg-secondary" />
                  </div>
                </aside>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-3 w-24 rounded bg-foreground/15" />
                      <div className="mt-2 h-2 w-36 rounded bg-muted/20" />
                    </div>

                    <div className="h-8 w-20 rounded-md bg-primary/15" />
                  </div>

                  {/* Metrics */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {[
                      ["Revenue", "₦24.8M"],
                      ["Tasks", "1,284"],
                      ["Growth", "+18.4%"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="rounded-xl border border-border bg-background/70 p-3"
                      >
                        <p className="text-[10px] text-muted-foreground">
                          {label}
                        </p>
                        <p className="mt-2 text-sm font-semibold text-foreground">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="mt-3 rounded-xl border border-border bg-background/70 p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-2 w-20 rounded bg-foreground/15" />
                        <div className="mt-2 h-2 w-28 rounded bg-muted/15" />
                      </div>

                      <div className="h-6 w-16 rounded bg-secondary" />
                    </div>

                    <div className="mt-7 flex h-28 items-end gap-2">
                      {[35, 48, 42, 68, 56, 74, 65, 88, 78, 96].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-sm bg-primary/30"
                            style={{ height: `${height}%` }}
                          />
                        ),
                      )}
                    </div>
                  </div>

                  {/* Activity */}
                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-border bg-background/70 p-3">
                      <div className="h-2 w-16 rounded bg-foreground/15" />
                      <div className="mt-4 h-2 w-full rounded bg-secondary" />
                      <div className="mt-2 h-2 w-4/5 rounded bg-secondary" />
                    </div>

                    <div className="rounded-xl border border-border bg-background/70 p-3">
                      <div className="h-2 w-20 rounded bg-foreground/15" />
                      <div className="mt-4 h-2 w-full rounded bg-accent/30" />
                      <div className="mt-2 h-2 w-3/5 rounded bg-secondary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating intelligence card */}
            <div className="absolute -bottom-6 -left-5 hidden w-52 rounded-xl border border-border bg-card/90 p-4 shadow-xl backdrop-blur-xl sm:block">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-foreground">
                  AI insight
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-muted-foreground">
                Revenue momentum is increasing across your highest-performing
                operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}