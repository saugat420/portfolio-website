const metrics = [
  { label: "Qualified leads", value: "50+" },
  { label: "ROI growth", value: "3X" },
  { label: "Launch time", value: "30 Days" }
];

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="section-shell pb-20 pt-10 sm:pb-24 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="animate-rise space-y-8">
            <span className="pill">For Nepal businesses that need consistent customers</span>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
                Customers aaudaina?
                <span className="block text-primary-700">
                  Facebook Ads chalayo, result aayena?
                </span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                I help you build a system that brings you consistent customers in 30
                days. No random boosting. No guesswork. Just a clear funnel built
                for leads, ROI, and growth.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#cta" className="cta-primary">
                Book a Free Strategy Call
              </a>
              <a href="#solution" className="cta-secondary">
                See How It Works
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="section-card rounded-3xl px-5 py-5 transition duration-300 hover:-translate-y-1"
                >
                  <p className="text-3xl font-black text-slate-950">{metric.value}</p>
                  <p className="mt-2 text-sm font-medium text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-float">
            <div className="section-card relative overflow-hidden rounded-[32px] p-4 sm:p-6">
              <div className="absolute inset-0 bg-grid bg-[size:32px_32px] opacity-40" />
              <div className="relative space-y-5">
                <div className="flex items-center justify-between rounded-3xl border border-slate-200 bg-slate-950 px-5 py-4 text-white">
                  <div>
                    <p className="text-sm text-white/70">Monthly pipeline</p>
                    <p className="text-3xl font-black">Rs. 12.4L</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-semibold text-emerald-300">
                    +218%
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-slate-500">Lead trend</p>
                        <p className="text-xl font-bold text-slate-950">
                          Stronger every week
                        </p>
                      </div>
                      <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary-700">
                        System On
                      </span>
                    </div>
                    <div className="mt-6 flex h-40 items-end gap-3">
                      {[28, 46, 52, 70, 96, 112].map((height, index) => (
                        <div key={height} className="flex flex-1 flex-col items-center gap-3">
                          <div
                            className={`w-full rounded-t-2xl bg-gradient-to-t ${
                              index === 5
                                ? "from-emerald-400 to-primary-500"
                                : "from-primary-200 to-primary-500"
                            }`}
                            style={{ height }}
                          />
                          <span className="text-xs font-semibold text-slate-400">
                            W{index + 1}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Lead quality</p>
                      <p className="mt-2 text-3xl font-black text-slate-950">82%</p>
                      <p className="mt-2 text-sm text-slate-500">
                        Ready-to-talk prospects from smarter targeting
                      </p>
                    </div>
                    <div className="rounded-[28px] border border-slate-200 bg-gradient-to-br from-emerald-50 to-white p-5 shadow-sm">
                      <p className="text-sm text-slate-500">Cost per lead</p>
                      <p className="mt-2 text-3xl font-black text-emerald-600">
                        -37%
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        Better creatives. Better funnel. Better economics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[28px] border border-primary-100 bg-primary-50 p-5">
                  <p className="text-sm font-semibold text-primary-700">
                    I don&apos;t just run ads, I build a system that brings you
                    consistent customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
