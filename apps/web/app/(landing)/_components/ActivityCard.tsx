import { LucideIcon } from "lucide-react";

export function ActivityCard({
  title,
  details,
  icon,
}: {
  title: string;
  details: string;
  icon: LucideIcon;
}) {
  const Icon = icon;
  return (
    <div className="group rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_18px_45px_-24px_rgba(15,23,42,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.24)]">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-200 bg-sky-50 text-sky-600 shadow-sm">
        <Icon className="h-6 w-6" />
      </div>
      <div className="py-6">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{title}</h2>
        <p className="mt-3 text-sm leading-7 text-slate-600">{details}</p>
      </div>
    </div>
  );
}
