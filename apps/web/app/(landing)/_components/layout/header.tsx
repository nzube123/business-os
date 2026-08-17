import Link from "next/link";

const NavGroup = {
  middle: [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Pricing", href: "/pricing" },
    { id: 3, label: "Docs", href: "/docs" },
    { id: 4, label: "Blog", href: "/blog" },
  ],

  auth: [
    { id: 1, label: "Sign In", href: "/sign-in" },
    { id: 2, label: "Get Started", href: "/sign-up" },
  ],
};

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/90 px-6 py-3 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex min-w-45 items-center">
          <h1 className="text-xl font-semibold tracking-tight text-zinc-950">
            Business OS
          </h1>
        </div>

        <nav className="flex flex-1 items-center justify-center gap-6">
          {NavGroup.middle.map((navItem) => (
            <Link
              key={navItem.id}
              href={navItem.href}
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950"
            >
              {navItem.label}
            </Link>
          ))}
        </nav>

        <div className="flex min-w-45 items-center justify-end gap-3">
          {NavGroup.auth.map((authItem) => (
            <Link
              key={authItem.id}
              href={authItem.href}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                authItem.label === "Get Started"
                  ? "bg-zinc-950 text-white hover:bg-zinc-800"
                  : "border border-zinc-300 bg-white text-zinc-700 hover:border-zinc-950 hover:text-zinc-950"
              }`}
            >
              {authItem.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
