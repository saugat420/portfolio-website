import { LeadForm } from "@/components/lead-form";

export function CallToAction() {
  return (
    <section id="cta" className="section-shell py-12 sm:py-16">
      <div className="space-y-6">
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
        <div className="section-card rounded-[34px] border border-primary-100 bg-gradient-to-r from-primary-50 via-white to-emerald-50 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                Step 2: Prefer quick chat?
              </span>
              <h3 className="mt-4 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
                Chat on WhatsApp
              </h3>
              <p className="mt-3 text-base leading-8 text-slate-600">
                If you want to ask a quick question before booking or just want a
                faster back-and-forth, send a message on WhatsApp and continue the
                conversation there.
              </p>
            </div>
            <div className="rounded-[28px] border border-white bg-white/90 p-4 shadow-lg shadow-primary-100/60">
              <a
                href="https://wa.me/message/SP2UQ22RS3KOD1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-base font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
