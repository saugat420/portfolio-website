"use client";

import { FormEvent, useState } from "react";

const DEFAULT_WHATSAPP_NUMBER = "9779800000000";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const phone = formData.get("phone")?.toString().trim() ?? "";
    const businessType = formData.get("businessType")?.toString().trim() ?? "";

    const number =
      process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? DEFAULT_WHATSAPP_NUMBER;

    const message = encodeURIComponent(
      `Namaste, my name is ${name}. Phone: ${phone}. Business type: ${businessType}. I want to book a free strategy call for Meta Ads growth.`
    );

    window.open(`https://wa.me/${number}?text=${message}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Name</span>
          <input
            required
            name="name"
            type="text"
            placeholder="Your name"
            className="w-full rounded-2xl border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-400 focus:ring-primary-400"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-slate-700">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            placeholder="98XXXXXXXX"
            className="w-full rounded-2xl border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-400 focus:ring-primary-400"
          />
        </label>
      </div>
      <label className="block">
        <span className="mb-2 block text-sm font-semibold text-slate-700">
          Business type
        </span>
        <input
          required
          name="businessType"
          type="text"
          placeholder="Education, Ecommerce, Service, Real Estate..."
          className="w-full rounded-2xl border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary-400 focus:ring-primary-400"
        />
      </label>
      <button type="submit" className="cta-primary w-full">
        Book a Free Strategy Call
      </button>
      <p className="text-sm leading-6 text-slate-500">
        Low friction. No long forms. Just your basic details and we&apos;ll start the
        conversation.
      </p>
      {submitted ? (
        <p className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
          Your message window has been opened on WhatsApp.
        </p>
      ) : null}
    </form>
  );
}
