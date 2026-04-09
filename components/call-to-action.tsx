import { LeadForm } from "@/components/lead-form";

export function CallToAction() {
  return (
    <section id="cta" className="section-shell py-12 sm:py-16">
      <div className="section-card rounded-[36px] bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 px-8 py-10 text-white sm:px-10 sm:py-12">
        <div className="mx-auto max-w-4xl">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90">
            Step 1: Book your strategy call
          </span>
          <h2 className="mt-6 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
            Ready to get consistent customers?
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
            Fill out the form below and share your details, business link, and
            anything important I should know. This is the best place to start if
            you want a proper growth conversation.
          </p>
          <div className="mt-8 rounded-[30px] border border-white/10 bg-white p-6 shadow-2xl shadow-primary-950/20 sm:p-8">
            <div>
              <h3 className="text-2xl font-black text-slate-950">
                Claim your free strategy call
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Clean, simple, and direct. Once submitted, the lead details are
                sent to your email and the visitor is redirected to WhatsApp.
              </p>
            </div>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
