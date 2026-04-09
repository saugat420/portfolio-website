const pains = [
  "Sales nai aaudaina...",
  "Boost gareko, tara result chaina...",
  "Customers pahila jasto aaudaina...",
  "Competitors le market khaisakyo..."
];

export function Problem() {
  return (
    <section className="section-shell py-12 sm:py-16">
      <div className="section-card grid gap-8 overflow-hidden rounded-[32px] p-8 sm:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <div className="space-y-5">
          <span className="pill">The real problem</span>
          <h2 className="section-heading max-w-xl">
            Random ads le business grow hudaina.
          </h2>
          <p className="section-copy max-w-xl">
            Most businesses don&apos;t have an ad problem only. They have a system
            problem. Wrong offer. Weak creative. No funnel. No follow-up. Result?
            Budget spend huncha, customers aaudaina.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {pains.map((pain, index) => (
            <div
              key={pain}
              className={`rounded-[28px] border p-6 ${
                index === 3
                  ? "border-rose-200 bg-rose-50"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <p className="text-lg font-bold text-slate-950">{pain}</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                If every month feels uncertain, it&apos;s hard to plan growth,
                hire, or scale with confidence.
              </p>
            </div>
          ))}
          <div className="rounded-[28px] border border-primary-100 bg-primary-600 p-6 sm:col-span-2">
            <p className="text-xl font-black text-white">
              If this sounds like you, you&apos;re not alone.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-primary-100">
              Nepal ko dherai business owners same cycle ma chan. Run ads, wait,
              hope, repeat. The fix is not more boosting. The fix is a real
              customer acquisition system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
