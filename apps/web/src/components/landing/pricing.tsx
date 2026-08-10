const plans = [
  {
    name: "Starter",
    description: "For small teams getting their operations organized.",
    price: "Free",
    period: "",
    features: [
      "Business workspace",
      "Core operational views",
      "Basic insights",
      "Essential integrations",
    ],
    featured: false,
  },
  {
    name: "Growth",
    description: "For growing businesses that need more intelligence.",
    price: "$29",
    period: "/ user / month",
    features: [
      "Everything in Starter",
      "AI business intelligence",
      "Advanced automation",
      "Operational analytics",
      "Priority integrations",
    ],
    featured: true,
  },
  {
    name: "Scale",
    description: "For organizations operating across complex workflows.",
    price: "Custom",
    period: "",
    features: [
      "Everything in Growth",
      "Advanced workflows",
      "Organization-wide intelligence",
      "Custom integrations",
      "Dedicated support",
    ],
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Pricing
          </p>
        </div>

        {/* Heading */}
        <div className="mt-6 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Start simple. Grow with your business.
          </h2>

          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Business OS is designed to grow alongside the way your business
            operates. Start with the essentials and add more intelligence as
            your needs evolve.
          </p>
        </div>

        {/* Plans */}
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-1 sm:p-7 ${
                plan.featured
                  ? "border-primary/40 bg-primary/4 shadow-lg shadow-primary/10"
                  : "border-border bg-card"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6 rounded-full border border-primary/20 bg-background px-3 py-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                    Most useful
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mt-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-semibold tracking-tight text-foreground">
                    {plan.price}
                  </span>

                  {plan.period && (
                    <span className="text-xs text-muted-foreground">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <div className="my-7 h-px bg-border" />

              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Includes
              </p>

              <ul className="mt-4 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <a
                  href="#get-started"
                  className={`block rounded-xl px-4 py-2.5 text-center text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    plan.featured
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border bg-background text-foreground hover:bg-surface"
                  }`}
                >
                  {plan.name === "Scale" ? "Talk to us" : "Get started"}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          No complicated setup. Upgrade when your business needs more.
        </p>
      </div>
    </section>
  );
}