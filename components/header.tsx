import Image from "next/image";

const navItems = [
  { label: "How It Works", href: "#solution" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About", href: "#about" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
      <div className="section-shell flex items-center justify-between gap-4 py-4">
        <a href="#top" className="flex items-center">
          <span className="flex h-14 w-[136px] items-center justify-center sm:h-16 sm:w-[164px]">
            <Image
              src="/Meta flow logo.png"
              alt="Meta Flow logo"
              width={260}
              height={96}
              className="h-auto max-h-full w-full object-contain"
              priority
            />
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-slate-600 transition hover:text-slate-950"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#cta" className="cta-primary px-5 py-2.5 text-sm sm:text-base">
          Book a Free Strategy Call
        </a>
      </div>
    </header>
  );
}
