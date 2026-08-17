import { ActivityGrid } from "./_components/ActivityGrid";
import { HeroSection } from "./_components/HeroSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.15),_transparent_35%),linear-gradient(135deg,_#f8fafc_0%,_#eef2ff_100%)] px-4 pb-10 pt-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <HeroSection />
        <ActivityGrid />
      </div>
    </div>
  );
}
