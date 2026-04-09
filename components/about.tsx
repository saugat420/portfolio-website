const proofPoints = [
  "Full-funnel Meta Ads service",
  "Conversion-focused strategy and creative",
  "Built for business owners who need consistency"
];

export function About() {
  return (
    <section id="about" className="section-shell py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="section-card rounded-[34px] p-8 sm:p-10">
          <span className="pill">About me</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
            I help businesses stop guessing and start building a repeatable customer system.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            I work with businesses that are tired of inconsistent sales and random ad
            results. My approach is simple: align the offer, sharpen the message,
            build the funnel, and optimize for leads that turn into revenue.
          </p>
        </div>
        <div className="section-card rounded-[34px] p-8 sm:p-10">
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Experience
              </p>
              <p className="mt-3 text-3xl font-black text-slate-950">Meta Ads</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Focused on customer acquisition and ROI, not vanity metrics.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Approach
              </p>
              <p className="mt-3 text-3xl font-black text-slate-950">Full Funnel</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Ads, landing flow, lead capture, and follow-up working together.
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                Outcome
              </p>
              <p className="mt-3 text-3xl font-black text-slate-950">Consistency</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Predictable customer flow so growth feels controlled.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-5"
              >
                <p className="text-sm font-semibold leading-7 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
