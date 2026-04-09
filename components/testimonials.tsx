const testimonials = [
  {
    name: "Ramesh Shrestha",
    business: "Home Service Business",
    quote:
      "Pahila ads chalayo, tara lead quality weak thiyo. System setup pachi every week qualified inquiries aauna thalyo."
  },
  {
    name: "Sujata Karki",
    business: "Education Consultancy",
    quote:
      "What I liked most was clarity. Offer, funnel, follow-up sabai structured bhayo. Results finally felt stable."
  },
  {
    name: "Aashish Gurung",
    business: "Ecommerce Brand",
    quote:
      "Random boosting bata niskera proper strategy ma gayo. CPL ghatyo, ROI badhyo, and growth became easier to forecast."
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-shell py-12 sm:py-16">
      <div className="space-y-6 text-center">
        <span className="pill">Testimonials</span>
        <h2 className="section-heading mx-auto max-w-3xl">
          Business owners don&apos;t need more hype. They need results.
        </h2>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="section-card rounded-[30px] p-6 transition duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-lg font-black text-white">
                {testimonial.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-950">{testimonial.name}</h3>
                <p className="text-sm text-slate-500">{testimonial.business}</p>
              </div>
            </div>
            <p className="mt-6 text-base leading-8 text-slate-600">
              “{testimonial.quote}”
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
