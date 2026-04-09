const steps = [
  {
    title: "Offer Optimization",
    copy: "Your offer is sharpened so the right customer instantly understands why they should act now."
  },
  {
    title: "Ad Strategy & Creative",
    copy: "We create message angles, hooks, and creatives that stop the scroll and generate qualified leads."
  },
  {
    title: "Funnel Setup",
    copy: "Landing flow, lead capture, and follow-up are built so clicks turn into real conversations."
  },
  {
    title: "Scaling System",
    copy: "Winning campaigns are tracked, refined, and scaled with clear numbers instead of guesswork."
  }
];

export function Solution() {
  return (
    <section id="solution" className="section-shell py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-5">
          <span className="pill">The system</span>
          <h2 className="section-heading max-w-xl">
            We don&apos;t run ads randomly. We build a customer acquisition system.
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
            From offer to creative to funnel to scaling, every part is designed to
            bring in consistent customers, not just vanity metrics.
          </p>
          <div className="section-card rounded-[32px] border-primary-200 bg-gradient-to-br from-white via-primary-50/50 to-emerald-50/40 p-6 shadow-[0_18px_50px_-30px_rgba(37,99,235,0.22)]">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary-700">
              What this means for you
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
                <span className="font-semibold text-slate-950">Clear acquisition path</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-800">
                  Less waste
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
                <span className="font-semibold text-slate-950">Stronger lead quality</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-800">
                  More calls
                </span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-sm">
                <span className="font-semibold text-slate-950">Better follow-up flow</span>
                <span className="rounded-full bg-primary-100 px-3 py-1 text-sm font-bold text-primary-800">
                  More sales
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="section-card rounded-[30px] p-6 transition duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-50 text-lg font-black text-primary-700">
                0{index + 1}
              </div>
              <h3 className="mt-5 text-2xl font-black text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
