import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import AnnouncementsSection from "@/components/sections/AnnouncementsSection";
import CommunityResourcesSection from "@/components/sections/CommunityResourcesSection";
import DepartmentsSection from "@/components/sections/DepartmentsSection";
import Hero from "@/components/sections/Hero";
import LocationSection from "@/components/sections/LocationSection";
import MeetingsSection from "@/components/sections/MeetingsSection";
import Section from "@/components/ui/Section";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section id="postings" className="bg-(--warm-white)">
        <AnnouncementsSection />
      </Section>

      <MeetingsSection />

      <Section id="departments" className="bg-white">
        <DepartmentsSection />
      </Section>

      <Section id="community" className="bg-(--mist)">
        <CommunityResourcesSection />
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
