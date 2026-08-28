import {
  Activity,
  BrainCircuit,
  Database,
  GitBranch,
  Layers3,
  Workflow,
} from "lucide-react";

const capabilities = [
  {
    icon: Database,
    title: "Unified operations",
    description:
      "Bring the information your business depends on into one connected operational layer.",
  },
  {
    icon: Workflow,
    title: "Intelligent workflows",
    description:
      "Turn repetitive processes into structured workflows that are easier to manage and improve.",
  },
  {
    icon: BrainCircuit,
    title: "Business intelligence",
    description:
      "Understand your operations through context-rich insights instead of disconnected reports.",
  },
  {
    icon: Activity,
    title: "Real-time visibility",
    description:
      "See what is happening across your business without constantly asking for updates.",
  },
  {
    icon: GitBranch,
    title: "Connected processes",
    description:
      "Connect teams, systems, and processes so work can move across the business without unnecessary friction.",
  },
  {
    icon: Layers3,
    title: "One operating layer",
    description:
      "Create a common foundation for managing the systems and information behind your business.",
  },
];

export default function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-b border-border bg-surface/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary" />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            One operating layer
          </p>
        </div>

        {/* Heading */}
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything your business needs to operate with clarity.
          </h2>

          <p className="max-w-xl text-base leading-7 text-muted-foreground lg:ml-auto">
            Business OS connects the operational pieces of your business into
            one environment built around visibility, intelligence, and action.
          </p>
        </div>

        {/* Capabilities */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.title}
                className="
                  group
                  bg-background
                  p-7
                  transition-colors duration-300
                  hover:bg-surface
                "
              >
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

                <h3 className="mt-10 text-lg font-semibold tracking-tight text-foreground">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {capability.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}