"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Minus,
  Sparkles,
} from "lucide-react";

type BillingPeriod = "monthly" | "yearly";

type Plan = {
  name: string;
  audience: string;
  description: string;
  price: { monthly: number; yearly: number };
  pricePrefix?: string;
  capacity: string[];
  highlights: string[];
};

const plans: Plan[] = [
  {
    name: "Foundation",
    audience: "For individuals and small businesses getting started.",
    description:
      "A genuinely useful foundation for bringing your everyday business into one place.",
    price: { monthly: 0, yearly: 0 },
    capacity: [
      "1 team member",
      "1 business",
      "Up to 25 clients",
      "Up to 5 active projects",
    ],
    highlights: [
      "Business workspace",
      "Clients, projects & basic tasks",
      "Basic workflows",
      "3 active automations",
      "Basic AI assistance",
      "2 integrations",
      "Core insights & community support",
    ],
  },
  {
    name: "Momentum",
    audience: "For growing teams and businesses",
    description:
      "Bring your growing team, workflows, and business operations into one system.",
    price: { monthly: 19, yearly: 190 },
    capacity: [
      "Up to 10 team members",
      "Up to 3 businesses",
      "Up to 150 clients",
      "Up to 50 active projects",
    ],
    highlights: [
      "Team collaboration",
      "Advanced workflows",
      "15 active automations",
      "Expanded AI",
      "8 integrations",
      "Advanced insights & priority support",
    ],
  },
  {
    name: "Elevation",
    audience: "For established and increasingly complex operations",
    description:
      "Take control of complex operations across teams and businesses.",
    price: { monthly: 49, yearly: 490 },
    capacity: [
      "Up to 30 team members",
      "Up to 10 businesses",
      "Up to 750 clients",
      "High project capacity",
    ],
    highlights: [
      "Advanced workflows",
      "Advanced automation",
      "75 active automations",
      "Advanced AI",
      "20 integrations",
      "Operational intelligence",
      "Advanced permissions & team controls",
      "Cross-business visibility",
      "Advanced reporting & priority support",
    ],
  },
  {
    name: "Enterprise",
    audience: "For larger organizations with complex operational requirements",
    description:
      "A powerful organization-level plan with customization available when your operation needs more.",
    price: { monthly: 149, yearly: 1490 },
    pricePrefix: "From",
    capacity: [
      "Up to 100 team members",
      "Up to 25 businesses",
      "Up to 5,000 clients",
      "High project capacity",
    ],
    highlights: [
      "Advanced workflows & automation",
      "Advanced AI & operational intelligence",
      "Organization-level controls",
      "Advanced permissions & department controls",
      "Cross-business management",
      "Advanced reporting & extensive integrations",
      "Dedicated onboarding & priority support",
      "Custom limits and integrations available",
    ],
  },
];

const comparisonRows = [
  {
    category: "Business",
    rows: [
      ["Team members", "1", "Up to 10", "Up to 30", "Up to 100"],
      ["Businesses", "1", "Up to 3", "Up to 10", "Up to 25"],
      ["Clients", "Up to 25", "Up to 150", "Up to 750", "Up to 5,000"],
      ["Projects", "Up to 5 active", "Up to 50 active", "High capacity", "High capacity"],
    ],
  },
  {
    category: "Operations",
    rows: [
      ["Workflows", "Basic", "Advanced", "Advanced", "Advanced"],
      ["Automations", "3 active", "15 active", "75 active", "Advanced"],
      ["Permissions", "Workspace access", "Team access", "Advanced", "Advanced"],
      ["Team / department controls", "—", "Team collaboration", "Departments", "Organization-level"],
    ],
  },
  {
    category: "Intelligence",
    rows: [
      ["AI assistance", "Basic", "Expanded", "Advanced", "Advanced"],
      ["Insights", "Core", "Advanced", "Advanced", "Advanced"],
      ["Operational intelligence", "—", "—", "Included", "Advanced"],
      ["Reporting", "Core", "Advanced", "Advanced", "Advanced"],
    ],
  },
  {
    category: "Integrations",
    rows: [
      ["Integration capacity", "2", "8", "20", "Extensive"],
      ["Advanced / custom integrations", "—", "—", "—", "Available"],
    ],
  },
  {
    category: "Support",
    rows: [
      ["Support level", "Community", "Priority", "Priority", "Priority"],
      ["Onboarding", "Self-serve", "Self-serve", "Self-serve", "Dedicated"],
    ],
  },
];

const faqs = [
  {
    question: "Can I start for free?",
    answer:
      "Yes. Foundation is free and includes a business workspace, everyday operating tools, basic automation and AI, and capacity for one person and one business.",
  },
  {
    question: "What happens when my business outgrows Foundation?",
    answer:
      "Move to Momentum when you need more people, businesses, clients, projects, automation, or advanced insights. Your operating system grows with your operation.",
  },
  {
    question: "Can I change plans as my business evolves?",
    answer:
      "Yes. Upgrade or downgrade to match your team and operating needs. Plan capacities are designed around business scale rather than arbitrary feature restrictions.",
  },
  {
    question: "What's included in annual billing?",
    answer:
      "Annual billing costs the equivalent of 10 monthly payments—approximately two months free. Momentum is $190/year, Elevation is $490/year, and Enterprise starts at $1,490/year.",
  },
  {
    question: "How does Enterprise work?",
    answer:
      "Enterprise includes capacity for up to 100 team members, 25 businesses, and 5,000 clients, plus organization-level controls, dedicated onboarding, and priority support. Larger requirements can be customized.",
  },
  {
    question: "Can I manage multiple businesses?",
    answer:
      "Yes. Momentum supports up to 3 businesses, Elevation up to 10, and Enterprise up to 25, with cross-business visibility and management at higher operational scales.",
  },
  {
    question: "Can I upgrade or downgrade?",
    answer:
      "Yes. You can change plans as your operating requirements change. Payment and subscription management are not connected on this page yet.",
  },
];

function formatPrice(price: number, prefix?: string) {
  return `${prefix ? `${prefix} ` : ""}$${price.toLocaleString("en-US")}`;
}

export default function PricingContent() {
  const [billingPeriod, setBillingPeriod] =
    useState<BillingPeriod>("monthly");
  const isYearly = billingPeriod === "yearly";

  return (
    <>
      <section className="relative isolate overflow-hidden px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-136 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background"
        />
        <div className="mx-auto max-w-7xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground shadow-sm">
            <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
            PEOPLE · BUSINESSES · CAPACITY
          </p>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl lg:text-6xl">
            Your business grows. Your Business OS should grow with it.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Start with the operating essentials, expand your capacity, and
            unlock deeper intelligence as your business evolves.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3">
            <fieldset className="inline-flex items-center rounded-xl border border-border bg-card p-1 shadow-sm">
              <legend className="sr-only">Billing frequency</legend>
              <button
                type="button"
                aria-pressed={!isYearly}
                onClick={() => setBillingPeriod("monthly")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  !isYearly
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                aria-pressed={isYearly}
                onClick={() => setBillingPeriod("yearly")}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                  isYearly
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Yearly
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                    isYearly
                      ? "bg-primary-foreground/15 text-primary-foreground"
                      : "bg-accent/20 text-foreground"
                  }`}
                >
                  2 months free on paid plans
                </span>
              </button>
            </fieldset>
            <p className="text-xs text-muted-foreground">
              {isYearly
                ? "Billed annually · equivalent to 10 monthly payments"
                : "Pay monthly or save with annual billing"}
            </p>
          </div>
        </div>
      </section>

      <section
        aria-label="Business OS plans"
        className="px-5 pb-20 sm:px-8 lg:pb-28"
      >
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const price = plan.price[billingPeriod];
            const recommended = plan.name === "Momentum";

            return (
              <article
                key={plan.name}
                style={
                  recommended
                    ? {
                        background:
                          "radial-gradient(ellipse at 12% 0%, rgba(34, 211, 238, 0.065), transparent 42%) padding-box, radial-gradient(ellipse at 100% 100%, rgba(217, 70, 239, 0.035), transparent 45%) padding-box, linear-gradient(var(--card), var(--card)) padding-box, conic-gradient(from 220deg, #67e8f9, #60a5fa, #a78bfa, #f0abfc, #fcd34d, #67e8f9) border-box",
                      }
                    : undefined
                }
                className={`relative flex flex-col rounded-2xl border p-6 transition-transform duration-200 hover:-translate-y-1 motion-reduce:transition-none ${
                  recommended
                    ? "isolate border-2 border-transparent shadow-[0_24px_80px_-28px_rgba(99,102,241,0.42)] ring-1 ring-white/70 before:absolute before:-inset-3 before:-z-10 before:rounded-[inherit] before:bg-[conic-gradient(from_220deg,#67e8f9,#60a5fa,#a78bfa,#f0abfc,#fcd34d,#67e8f9)] before:opacity-30 before:blur-2xl before:content-[''] before:animate-[spin_36s_linear_infinite] motion-reduce:before:animate-none motion-reduce:transition-none dark:shadow-[0_24px_80px_-28px_rgba(129,140,248,0.32)] dark:ring-white/10"
                    : "border-border bg-card shadow-sm"
                }`}
              >
                {recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground shadow-sm">
                    Most Popular
                  </div>
                )}
                <div className={recommended ? "pt-2" : ""}>
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-lg font-semibold tracking-tight text-foreground">
                      {plan.name}
                    </h2>
                    {recommended && (
                      <Sparkles
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <p className="mt-1 min-h-10 text-xs leading-5 text-muted-foreground">
                    {plan.audience}
                  </p>
                  <p className="mt-5 min-h-18 text-sm leading-6 text-foreground/80">
                    {plan.description}
                  </p>
                </div>

                <div className="mt-6 min-h-17 border-y border-border py-4">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-semibold tracking-tight text-foreground">
                      {formatPrice(price, plan.pricePrefix)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      / {isYearly ? "year" : "month"}
                    </span>
                  </div>
                  {isYearly && (
                    <p className="mt-1 text-xs text-muted-foreground">
                      {price === 0
                        ? "$0 / month"
                        : `$${price / 10} / month, billed annually`}
                    </p>
                  )}
                </div>

                {plan.name === "Enterprise" ? (
                  <button
                    type="button"
                    disabled
                    aria-label="Talk to Sales (sales contact is not configured yet)"
                    className="mt-5 inline-flex min-h-11 cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold text-muted-foreground opacity-70"
                  >
                    Talk to Sales
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </button>
                ) : (
                  <Link
                    href="/#get-started"
                    className={`mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${
                      recommended
                        ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 hover:bg-primary/90"
                        : "border border-border bg-background text-foreground hover:bg-secondary"
                    }`}
                  >
                    Get started
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                )}

                <div className="mt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    Capacity
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.capacity.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-5 text-foreground/80"
                      >
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                    What&apos;s included
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {plan.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex gap-2 text-xs leading-5 text-foreground/80"
                      >
                        <Check
                          className="mt-0.5 size-3.5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mx-auto mt-6 max-w-4xl text-center text-xs leading-5 text-muted-foreground">
          <span className="font-semibold text-foreground">
            Pay for the scale of your operation, not arbitrary feature
            restrictions.
          </span>{" "}
          Plan capacities grow with your team, businesses, and operating needs.
        </p>
      </section>

      <section
        id="comparison"
        className="scroll-mt-28 border-y border-border bg-surface/70 px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Capacity at a glance
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              One operating system. Room to grow.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              Compare the capacity and support that comes with each stage of
              your business.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card shadow-sm">
            <table className="w-full min-w-190 border-collapse text-left text-sm">
              <caption className="sr-only">
                Business OS plan capacity comparison
              </caption>
              <thead>
                <tr className="border-b border-border bg-background/70">
                  <th
                    scope="col"
                    className="w-[22%] px-5 py-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Plan capacity
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      scope="col"
                      className={`px-5 py-4 text-sm font-semibold ${
                        plan.name === "Momentum"
                          ? "text-primary"
                          : "text-foreground"
                      }`}
                    >
                      {plan.name}
                      {plan.name === "Momentum" && (
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                          POPULAR
                        </span>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((group) => (
                  <FragmentRows key={group.category} group={group} />
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Enterprise can customize limits, integrations, and requirements
            for larger operations. Elevation includes high project capacity
            and 20 integrations.
          </p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Frequently asked
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Clear answers for what comes next.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Need help finding the right capacity for your operation?{" "}
              <a
                href="#get-started"
                className="font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
              >
                Talk with our team.
              </a>
            </p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group py-5"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                  {faq.question}
                  <ArrowDown
                    className="size-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-3 max-w-2xl pr-8 text-sm leading-6 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        id="get-started"
        className="scroll-mt-24 border-y border-border bg-surface px-5 py-20 sm:px-8 lg:py-24"
      >
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-3xl border border-border bg-background px-6 py-10 shadow-sm sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-14">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              One operating system. Room to grow.
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready to build a better way to operate?
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
              Start with the capacity you need today. When your business
              expands, your Business OS can grow with it.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/#get-started"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Get started
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <button
              type="button"
              disabled
              aria-label="Talk to Sales (sales contact is not configured yet)"
              className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-xl border border-border bg-background px-5 py-3 text-sm font-semibold text-muted-foreground opacity-70"
            >
              Talk to Sales
            </button>
            <p className="text-xs text-muted-foreground">
              Sales contact is not configured yet.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

function FragmentRows({
  group,
}: {
  group: (typeof comparisonRows)[number];
}) {
  return (
    <>
      <tr className="border-b border-border bg-secondary/40">
        <th
          scope="rowgroup"
          colSpan={5}
          className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground"
        >
          {group.category}
        </th>
      </tr>
      {group.rows.map((row) => (
        <tr
          key={row[0]}
          className="border-b border-border last:border-0"
        >
          <th
            scope="row"
            className="px-5 py-4 text-xs font-medium text-muted-foreground"
          >
            {row[0]}
          </th>
          {row.slice(1).map((value, index) => (
            <td
              key={`${row[0]}-${index}`}
              className={`px-5 py-4 text-xs ${
                index === 1
                  ? "bg-primary/[0.035] font-medium text-primary"
                  : "text-foreground/80"
              }`}
            >
              {value === "—" ? (
                <Minus
                  className="size-3.5 text-muted-foreground"
                  aria-label="Not included"
                />
              ) : (
                value
              )}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
}
