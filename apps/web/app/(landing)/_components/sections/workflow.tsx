import {
  ArrowRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Settings2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect",
    description:
      "Bring your business data, workflows, and existing tools into one connected operating layer.",
    icon: Settings2,
  },
  {
    number: "02",
    title: "Understand",
    description:
      "Business OS turns operational activity into a clear picture of what is happening across your business.",
    icon: BrainCircuit,
  },
  {
    number: "03",
    title: "Act",
    description:
      "Use automation and intelligent insights to turn information into faster, better decisions.",
    icon: ChartNoAxesCombined,
  },
];

export default function Workflow() {
  return (
    <section
      id="operations"
      className="border-b border-border bg-surface/40"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section heading */}
        <div className="max-w-2xl">
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
              How Business OS works
            </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            From scattered operations to one intelligent workflow.
          </h2>

          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
            Business OS connects the pieces of your business so your team can
            move from understanding what happened to deciding what happens
            next.
          </p>
        </div>

        {/* Workflow */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div
                  className="
                    group h-full rounded-2xl
                    border border-border
                    bg-card
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-primary/30
                    hover:shadow-xl hover:shadow-primary/5
                  "
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium tracking-widest text-muted-foreground">
                      {step.number}
                    </span>

                    <span
                      className="
                        flex h-10 w-10 items-center justify-center
                        rounded-xl
                        bg-primary/10
                        text-primary
                        transition-colors duration-300
                        group-hover:bg-primary
                        group-hover:text-primary-foreground
                      "
                    >
                      <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                    </span>
                  </div>

                  <h3 className="mt-10 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="mt-8 h-px bg-border" />

                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-primary">
                    {index === 0 && "Build your foundation"}
                    {index === 1 && "See what matters"}
                    {index === 2 && "Move with confidence"}

                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                {/* Desktop connector */}
                {index < steps.length - 1 && (
                  <div
                    aria-hidden="true"
                    className="
                      absolute -right-3 top-1/2 z-10 hidden
                      h-6 w-6 -translate-y-1/2
                      items-center justify-center
                      rounded-full
                      border border-border
                      bg-background
                      text-muted-foreground
                      lg:flex
                    "
                  >
                    <ArrowRight className="h-3 w-3" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-5 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            One system for the operational layer of your business — designed
            to make complexity easier to see, understand, and act on.
          </p>

          <a
            href="#intelligence"
            className="
              inline-flex shrink-0 items-center gap-2
              text-sm font-medium text-foreground
              transition-colors
              hover:text-primary
            "
          >
            Explore intelligence
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}