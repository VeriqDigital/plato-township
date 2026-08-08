import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import LocationSection from "@/components/sections/LocationSection";
import MeetingsSection from "@/components/sections/MeetingsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Hero />

      <section id="about" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-(--container-width) gap-10 px-6 lg:grid-cols-[0.6fr_1.4fr] lg:items-start">
          <h2 className="text-2xl font-semibold text-(--navy)">About Plato Township</h2>
          <div>
            <div className="grid gap-7 border-t border-(--line) pt-6 md:grid-cols-2">
              <p className="text-[1.05rem] leading-8 text-(--ink-muted)">
                Plato Township serves residents in western Kane County with
                essential local services, responsive public leadership, and
                access to trusted community resources.
              </p>
              <p className="text-[1.05rem] leading-8 text-(--ink-muted)">
                This demo brings the township’s information into a modern,
                accessible home base designed around the questions residents
                ask most often.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section id="postings" className="bg-(--warm-white)">
        <TestimonialsSection />
      </Section>

      <MeetingsSection />

      <Section id="departments" className="bg-white">
        <ServicesSection />
      </Section>

      <Section id="community" className="bg-(--mist)">
        <FAQ />
      </Section>

      <section id="contact" className="bg-(--warm-white) py-16 sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <LocationSection />
        </div>
      </section>

      <Analytics />
      <SpeedInsights />
    </main>
  );
}
