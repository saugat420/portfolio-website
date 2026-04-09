import { About } from "@/components/about";
import { CallToAction } from "@/components/call-to-action";
import { CaseStudies } from "@/components/case-studies";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Problem } from "@/components/problem";
import { Services } from "@/components/services";
import { Solution } from "@/components/solution";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <CaseStudies />
        <Testimonials />
        <About />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
