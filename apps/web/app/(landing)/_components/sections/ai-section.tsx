import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  FileText,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const capabilities = [
  "Understands your operational context",
  "Surfaces important changes and patterns",
  "Helps turn business data into decisions",
  "Works alongside your existing workflows",
];

export default function AISection() {
  return (
    <section
      id="intelligence"
      className="border-b border-border bg-surface/30"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Eyebrow */}
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-accent" />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Business intelligence
          </p>
        </div>

        {/* Heading */}
        <div className="mt-6 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Intelligence that understands your business.
          </h2>

          <p className="mt-6 text-base leading-7 text-muted-foreground sm:text-lg">
            Business OS uses AI where it is actually useful — helping your
            team understand information, identify what matters, and move from
            questions to decisions faster.
          </p>
        </div>

        {/* Intelligence workspace */}
        <div className="mt-16 grid overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left side */}
          <div className="border-b border-border p-7 sm:p-9 lg:border-b-0 lg:border-r lg:p-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
              <BrainCircuit className="h-5 w-5" aria-hidden="true" />
            </div>

            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-foreground">
              Ask better questions.
            </h3>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Instead of searching through dashboards and documents, ask
              questions about your business and get answers grounded in the
              information your organization already has.
            </p>

            <div className="mt-8 space-y-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check className="h-3 w-3" aria-hidden="true" />
                  </span>

                  <p className="text-sm text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side */}
          <div className="bg-background p-5 sm:p-7 lg:p-10">
            <div className="overflow-hidden rounded-xl border border-border bg-card shadow-lg shadow-foreground/5">
              {/* AI header */}
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <BrainCircuit
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-foreground">
                      Business Intelligence
                    </p>

                    <p className="text-[10px] text-muted-foreground">
                      Connected to your operations
                    </p>
                  </div>
                </div>

                <span className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Ready
                </span>
              </div>

              {/* Conversation */}
              <div className="space-y-5 p-5 sm:p-6">
                <div className="ml-auto max-w-[85%] rounded-xl rounded-tr-sm bg-secondary px-4 py-3">
                  <p className="text-xs leading-5 text-secondary-foreground">
                    What changed in our operations this week?
                  </p>
                </div>

                <div className="max-w-[90%]">
                  <div className="flex items-center gap-2">
                    <BrainCircuit
                      className="h-3.5 w-3.5 text-accent"
                      aria-hidden="true"
                    />

                    <span className="text-[10px] font-medium text-accent">
                      Business OS
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-6 text-muted-foreground">
                    Three notable changes stand out across your operations.
                    Customer activity increased, fulfillment time improved,
                    and one workflow is generating more exceptions than usual.
                  </p>

                  <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    <div className="rounded-lg border border-border bg-surface p-3">
                      <TrendingUp
                        className="h-4 w-4 text-accent"
                        aria-hidden="true"
                      />

                      <p className="mt-2 text-[11px] font-medium text-foreground">
                        Customer activity
                      </p>

                      <p className="mt-1 text-[10px] text-muted-foreground">
                        +14.2%
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-surface p-3">
                      <ArrowUpRight
                        className="h-4 w-4 text-primary"
                        aria-hidden="true"
                      />

                      <p className="mt-2 text-[11px] font-medium text-foreground">
                        Fulfillment
                      </p>

                      <p className="mt-1 text-[10px] text-muted-foreground">
                        18% faster
                      </p>
                    </div>

                    <div className="rounded-lg border border-border bg-surface p-3">
                      <FileText
                        className="h-4 w-4 text-muted-foreground"
                        aria-hidden="true"
                      />

                      <p className="mt-2 text-[11px] font-medium text-foreground">
                        Exceptions
                      </p>

                      <p className="mt-1 text-[10px] text-muted-foreground">
                        Needs review
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 border-t border-border pt-4">
                    <MessageSquare
                      className="h-3.5 w-3.5 text-muted-foreground"
                      aria-hidden="true"
                    />

                    <span className="text-[10px] text-muted-foreground">
                      Ask a follow-up question...
                    </span>
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