import Link from "next/link";

export function HeroSection() {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white/95 px-6 py-8 shadow-[0_25px_60px_-28px_rgba(15,23,42,0.18)] backdrop-blur-xl">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="lg:w-[45%] space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Business OS
          </p>
          <h1 className="text-4xl font-semibold uppercase tracking-tight text-slate-950 sm:text-5xl">
            Run Your Entire Business From One Place.
          </h1>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            Bring customers, inventory, sales, invoices, expenses, and business
            intelligence into one calm, focused operating system for modern
            African businesses.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:bg-slate-800"
              href="/sign-in"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 lg:w-[50%]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Built for clarity
          </p>
          <div className="mt-5 space-y-4">
            {[
              "Coordinate daily operations in one place",
              "Track cash flow without the usual noise",
              "Turn raw activity into simple decisions",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-sm">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-950" />
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
