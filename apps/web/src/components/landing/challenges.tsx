import {
  ArrowRight,
  Database,
  Layers3,
  Workflow,
} from "lucide-react";

const challenges = [
  {
    number: "01",
    icon: Database,
    title: "Information lives everywhere.",
    description:
      "Customer records, financial data, team activity, documents, and operational updates rarely live in the same place.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Work depends on coordination.",
    description:
      "People spend valuable time moving information between tools, checking progress, following up, and keeping processes moving.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "The bigger picture gets harder to see.",
    description:
      "As the business grows, understanding what matters now becomes increasingly difficult without a connected view of operations.",
  },
];

export default function Challenges() {
  return (
    <section id="challenges" className="border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            The complexity of running a business
          </p>
        </div>

        {/* Heading */}
        <div className="mt-6 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Growth creates complexity.
            <span className="text-muted-foreground">
              {" "}
              Your systems should create clarity.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Every growing business accumulates tools, processes, information,
            and decisions. Business OS brings those moving parts into one
            operational picture.
          </p>
        </div>

        {/* Challenge list */}
        <div className="mt-20">
          <div className="divide-y divide-border border-y border-border">
            {challenges.map((challenge) => {
              const Icon = challenge.icon;

              return (
                <article
                  key={challenge.number}
                  className="
                    group
                    grid gap-8 py-10
                    transition-colors duration-300
                    lg:grid-cols-[100px_60px_1fr_80px]
                    lg:items-center
                  "
                >
                  {/* Number */}
                  <span className="text-sm font-medium tabular-nums text-muted-foreground">
                    {challenge.number}
                  </span>

                  {/* Icon */}
                  <div
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-xl
                      border border-border
                      bg-surface
                      text-muted-foreground
                      transition-all duration-300
                      group-hover:border-primary/30
                      group-hover:bg-primary/10
                      group-hover:text-primary
                    "
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  {/* Content */}
                  <div className="max-w-2xl">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
                      {challenge.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-muted-foreground sm:text-base">
                      {challenge.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div
                    className="
                      hidden h-10 w-10 items-center justify-center
                      rounded-full
                      border border-border
                      text-muted-foreground
                      transition-all duration-300
                      group-hover:translate-x-1
                      group-hover:border-primary/30
                      group-hover:text-primary
                      lg:flex
                    "
                  >
                    <ArrowRight
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Business OS turns these disconnected layers into one system your
            business can actually operate from.
          </p>

          <a
            href="#capabilities"
            className="
              inline-flex shrink-0 items-center gap-2
              text-sm font-medium text-foreground
              transition-colors
              hover:text-primary
            "
          >
            See the operating layer
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </section>
  );
}