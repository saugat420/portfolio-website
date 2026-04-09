const services = [
  {
    title: "Meta Ads Strategy",
    description:
      "Campaign planning built around business goals, budget, and buying behavior."
  },
  {
    title: "Creative Direction",
    description:
      "Hooks, offers, and ad creatives designed to stop scrolls and start conversations."
  },
  {
    title: "Funnel Setup",
    description:
      "Landing flow and lead capture structure that converts traffic into ready leads."
  },
  {
    title: "Lead Generation System",
    description:
      "A simple system for capturing, qualifying, and following up with prospects."
  },
  {
    title: "Retargeting & Scaling",
    description:
      "Bring back warm audiences and scale what works with numbers you can trust."
  }
];

function ServiceIcon({ index }: { index: number }) {
  const icons = ["◎", "▲", "◌", "◐", "✦"];

  return (
    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-100 to-emerald-50 text-2xl text-primary-700">
      {icons[index]}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section-shell py-12 sm:py-16">
      <div className="space-y-6 text-center">
        <span className="pill">Services</span>
        <h2 className="section-heading mx-auto max-w-3xl">
          Everything needed to turn Meta Ads into a real growth channel
        </h2>
        <p className="section-copy mx-auto max-w-2xl">
          Clean strategy. Better creatives. Smarter funnels. Stronger follow-up.
          This is how ad spend turns into predictable leads.
        </p>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="section-card rounded-[30px] p-6 transition duration-300 hover:-translate-y-1"
          >
            <ServiceIcon index={index} />
            <h3 className="mt-5 text-xl font-black text-slate-950">{service.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
