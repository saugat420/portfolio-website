const caseStudies = [
  {
    result: "50+ leads/month",
    title: "From 0 leads to consistent monthly inquiries",
    stats: ["Local service business", "30 days setup", "Lower CPL"],
    summary:
      "New offer angle, stronger creatives, and a cleaner lead funnel transformed inconsistent traffic into steady sales calls."
  },
  {
    result: "3X ROI",
    title: "Revenue growth in 60 days",
    stats: ["Ecommerce brand", "Retargeting fix", "Creative refresh"],
    summary:
      "We stopped random spending, rebuilt the ad structure, and scaled the winning audience-creative combination."
  },
  {
    result: "2.4X higher conversion",
    title: "Better follow-up. Better close rate.",
    stats: ["Education business", "Lead nurturing", "Systemized follow-up"],
    summary:
      "Lead generation improved because the funnel and handoff process were built to move prospects quickly."
  }
];

export function CaseStudies() {
  return (
    <section id="results" className="section-shell py-12 sm:py-16">
      <div className="section-card rounded-[36px] p-8 sm:p-10 lg:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-5">
            <span className="pill">Results</span>
            <h2 className="section-heading max-w-3xl">
              Real numbers matter more than clicks and likes
            </h2>
            <p className="section-copy max-w-2xl">
              The goal is simple: more qualified leads, stronger ROI, and business
              growth that actually feels predictable.
            </p>
          </div>
          <a href="#cta" className="cta-secondary w-full sm:w-fit">
            Get My Growth Plan
          </a>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-[30px] border border-slate-200 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:bg-white"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-700">
                {study.result}
              </p>
              <h3 className="mt-4 text-2xl font-black text-slate-950">{study.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{study.summary}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {study.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
                  >
                    {stat}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
