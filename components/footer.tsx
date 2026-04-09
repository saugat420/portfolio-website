export function Footer() {
  return (
    <footer className="section-shell pb-8 pt-4">
      <div className="section-card rounded-[30px] px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-lg font-black text-slate-950">Meta Ads Expert</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Helping Nepal businesses get consistent customers with full-funnel
              Meta Ads systems.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:items-center sm:gap-6">
            <a href="mailto:hello@example.com" className="font-semibold hover:text-slate-950">
              hello@example.com
            </a>
            <a href="tel:+9779800000000" className="font-semibold hover:text-slate-950">
              +977 9800000000
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold hover:text-slate-950"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-6 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 Meta Ads Expert. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
