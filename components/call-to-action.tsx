import { LeadForm } from "@/components/lead-form";

export function CallToAction() {
  return (
    <section id="cta" className="section-shell py-12 sm:py-16">
      <div className="section-card overflow-hidden rounded-[36px]">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-slate-950 px-8 py-10 text-white sm:px-10 sm:py-12">
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
              Ready when you are
            </span>
            <h2 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
              Ready to get consistent customers?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
              If your business needs a clear plan for leads, sales calls, and ROI,
              let&apos;s talk. We&apos;ll look at your current situation and map out the
              fastest path to a working acquisition system.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noreferrer"
                className="cta-primary bg-white text-slate-950 hover:bg-slate-100"
              >
                Open Calendly
              </a>
              <a
                href="https://wa.me/9779800000000"
                target="_blank"
                rel="noreferrer"
                className="cta-secondary border-white/20 bg-white/10 text-white hover:bg-white/15"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-50 via-white to-emerald-50 px-8 py-10 sm:px-10 sm:py-12">
            <div className="mx-auto max-w-xl rounded-[30px] border border-white bg-white/90 p-6 shadow-xl shadow-primary-100/50">
              <h3 className="text-2xl font-black text-slate-950">
                Claim your free strategy call
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                Fill this out and continue on WhatsApp. Fast. Simple. Easy to start.
              </p>
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
