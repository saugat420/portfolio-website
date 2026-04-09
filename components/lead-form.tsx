const WHATSAPP_REDIRECT_URL = "https://wa.me/message/SP2UQ22RS3KOD1";

export function LeadForm() {
  return (
    <form
      action="https://formsubmit.co/bsaugat59@gmail.com"
      method="POST"
      className="space-y-7"
    >
      <input type="hidden" name="_subject" value="New Strategy Call Lead" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value={WHATSAPP_REDIRECT_URL} />

      <div className="grid gap-4 rounded-[28px] border border-slate-200 bg-slate-50/80 p-4 sm:grid-cols-2 sm:p-5">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Full name
          </span>
          <input
            required
            name="full_name"
            type="text"
            placeholder="Your full name"
            className="w-full rounded-2xl border border-white bg-white px-4 py-3.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary-400 focus:ring-primary-400"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Email
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-2xl border border-white bg-white px-4 py-3.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary-400 focus:ring-primary-400"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            WhatsApp number
          </span>
          <input
            required
            name="whatsapp_number"
            type="tel"
            placeholder="98XXXXXXXX"
            className="w-full rounded-2xl border border-white bg-white px-4 py-3.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary-400 focus:ring-primary-400"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">
            Website / Facebook URL
          </span>
          <input
            name="website_or_facebook_url"
            type="url"
            placeholder="https://example.com"
            className="w-full rounded-2xl border border-white bg-white px-4 py-3.5 text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary-400 focus:ring-primary-400"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">
          Message
        </span>
        <textarea
          name="message"
          rows={6}
          placeholder="Tell me a bit about your business, current challenge, or goal..."
          className="w-full rounded-[28px] border border-slate-200 bg-gradient-to-b from-slate-50 to-white px-4 py-4 text-slate-900 placeholder:text-slate-400 focus:border-primary-400 focus:ring-primary-400"
        />
      </label>

      <div className="grid gap-4 rounded-[28px] border border-primary-100 bg-gradient-to-r from-primary-50 via-white to-emerald-50 p-4 sm:grid-cols-[0.9fr_1.1fr] sm:p-5">
        <div className="rounded-[22px] bg-white/80 px-4 py-4 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-700">
            What happens next
          </p>
          <p className="mt-2 text-lg font-black tracking-tight text-slate-950">
            Submit, email, WhatsApp
          </p>
        </div>
        <p className="text-sm leading-7 text-slate-600">
          After you submit, your details will be sent to your email and the user
          will be redirected directly to WhatsApp for an immediate conversation.
        </p>
      </div>

      <button
        type="submit"
        className="cta-primary w-full rounded-[22px] py-4 text-base shadow-[0_22px_50px_-22px_rgba(37,99,235,0.55)]"
      >
        Book a Free Strategy Call
      </button>
    </form>
  );
}
