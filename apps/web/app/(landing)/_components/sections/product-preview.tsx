import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Users,
} from "lucide-react";

const metrics = [
  {
    label: "Revenue",
    value: "$248.6K",
    change: "+12.8%",
    icon: CircleDollarSign,
  },
  {
    label: "Active customers",
    value: "1,284",
    change: "+8.4%",
    icon: Users,
  },
  {
    label: "Operations",
    value: "94.2%",
    change: "+5.6%",
    icon: Activity,
  },
];

const activity = [
  {
    title: "Quarterly report generated",
    time: "2 min ago",
  },
  {
    title: "Customer workflow completed",
    time: "18 min ago",
  },
  {
    title: "Inventory alert resolved",
    time: "42 min ago",
  },
];

export default function ProductPreview() {
  return (
    <section
      id="product-preview"
      className="border-b border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            The operating view
          </p>
        </div>

        {/* Heading */}
        <div className="mt-6 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            See your business as it actually operates.
          </h2>

          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Business OS brings the signals that matter into one intelligent
            workspace, giving your team a clearer view of what is happening
            across the business.
          </p>
        </div>

        {/* Product preview */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/5">
          {/* Window header */}
          <div className="flex h-14 items-center justify-between border-b border-border px-4 sm:px-6">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              </div>

              <div className="ml-4 hidden h-7 w-40 items-center rounded-md border border-border bg-surface px-3 sm:flex">
                <span className="text-[11px] text-muted-foreground">
                  business-os
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden text-xs text-muted-foreground sm:inline">
                Live
              </span>

              <span className="h-2 w-2 rounded-full bg-cyan-400" />
            </div>
          </div>

          {/* Dashboard */}
          <div className="grid min-h-130 lg:grid-cols-[190px_1fr]">
            {/* Sidebar */}
            <aside className="hidden border-r border-border bg-surface/50 p-4 lg:block">
              <div className="mb-8 px-2">
                <div className="h-5 w-24 rounded bg-foreground/10" />
              </div>

              <nav className="space-y-1">
                {["Overview", "Operations", "Customers", "Insights"].map(
                  (item, index) => (
                    <div
                      key={item}
                      className={`rounded-lg px-3 py-2 text-xs ${
                        index === 0
                          ? "bg-primary/10 font-medium text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item}
                    </div>
                  ),
                )}
              </nav>

              <div className="mt-8 border-t border-border pt-6">
                <p className="px-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  Workspace
                </p>

                <div className="mt-3 space-y-2 px-2">
                  <div className="h-2 w-24 rounded bg-foreground/10" />
                  <div className="h-2 w-16 rounded bg-foreground/10" />
                  <div className="h-2 w-20 rounded bg-foreground/10" />
                </div>
              </div>
            </aside>

            {/* Main content */}
            <div className="p-5 sm:p-7 lg:p-9">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">
                    Monday, August 10
                  </p>

                  <h3 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
                    Good morning.
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2">
                  <BarChart3 className="h-4 w-4 text-primary" />

                  <span className="text-xs font-medium text-foreground">
                    Business overview
                  </span>
                </div>
              </div>

              {/* Metrics */}
              <div className="mt-7 grid gap-3 md:grid-cols-3">
                {metrics.map((metric) => {
                  const Icon = metric.icon;

                  return (
                    <div
                      key={metric.label}
                      className="rounded-xl border border-border bg-background p-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          {metric.label}
                        </span>

                        <Icon className="h-4 w-4 text-muted-foreground" />
                      </div>

                      <div className="mt-4 flex items-end justify-between gap-3">
                        <span className="text-xl font-semibold tracking-tight text-foreground">
                          {metric.value}
                        </span>

                        <span className="text-[11px] font-medium text-cyan-500">
                          {metric.change}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Lower dashboard */}
              <div className="mt-3 grid gap-3 lg:grid-cols-[1.4fr_0.8fr]">
                {/* Chart */}
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Business activity
                      </p>

                      <p className="mt-1 text-xs text-muted-foreground">
                        Operational activity over the last 30 days
                      </p>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </div>

                  <div className="mt-8 flex h-40 items-end gap-2">
                    {[35, 48, 42, 65, 52, 74, 62, 80, 68, 88, 76, 94].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-sm bg-primary/15 transition-colors hover:bg-primary/30"
                          style={{ height: `${height}%` }}
                        />
                      ),
                    )}
                  </div>

                  <div className="mt-4 flex justify-between text-[10px] text-muted-foreground">
                    <span>Jul 12</span>
                    <span>Jul 19</span>
                    <span>Jul 26</span>
                    <span>Aug 2</span>
                    <span>Aug 10</span>
                  </div>
                </div>

                {/* Activity */}
                <div className="rounded-xl border border-border bg-background p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-foreground">
                      Recent activity
                    </p>

                    <span className="text-[10px] text-muted-foreground">
                      Live
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {activity.map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-3"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />

                        <div className="min-w-0">
                          <p className="text-xs font-medium text-foreground">
                            {item.title}
                          </p>

                          <p className="mt-1 text-[10px] text-muted-foreground">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}