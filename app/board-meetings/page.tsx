import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { completeMeetingSchedule2026 } from "@/data/board-meetings";

export const metadata: Metadata = {
  title: "Board Meetings",
  description: "View the 2026 Plato Township Board meeting schedule and meeting location.",
};

export default function BoardMeetingsPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <h1 className="font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Board Meetings
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
            Schedule and location information for Plato Township public meetings.
          </p>
        </div>
      </header>

      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-(--container-width) px-6">
          <div className="grid border border-(--line) sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-b border-(--line) p-5 sm:border-r lg:border-b-0">
              <p className="text-sm font-semibold text-(--ink-muted)">Regular schedule</p>
              <p className="mt-2 text-lg font-semibold text-(--navy)">Fourth Tuesday monthly</p>
            </div>
            <div className="border-b border-(--line) p-5 lg:border-b-0 lg:border-r">
              <p className="text-sm font-semibold text-(--ink-muted)">Meeting time</p>
              <p className="mt-2 text-lg font-semibold text-(--navy)">6:00 PM</p>
            </div>
            <div className="border-b border-(--line) p-5 sm:border-r sm:border-b-0">
              <p className="text-sm font-semibold text-(--ink-muted)">Location</p>
              <p className="mt-2 text-lg font-semibold text-(--navy)">Plato Township Hall</p>
            </div>
            <div className="p-5">
              <p className="text-sm font-semibold text-(--ink-muted)">Address</p>
              <a className="mt-2 block text-lg font-semibold text-(--navy) underline decoration-(--red)/40 underline-offset-4 hover:text-(--red)" href={siteConfig.contact.mapUrl} target="_blank" rel="noreferrer">
                10N924 Rippburger Rd<br />Elgin, IL 60124
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.38fr_1fr]">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-(--navy)">2026 Meeting Schedule</h2>
              <p className="mt-4 max-w-sm text-base leading-7 text-(--ink-muted)">
                Regular meetings take place at the township hall. The Annual Town Meeting is listed separately within the schedule.
              </p>
            </div>

            <div className="border-t border-(--line)">
              {completeMeetingSchedule2026.map((meeting) => (
                <article
                  key={`${meeting.date}-${meeting.type}`}
                  className={`grid gap-3 border-b border-(--line) px-1 py-5 sm:grid-cols-[1fr_auto] sm:items-center ${meeting.type === "annual" ? "border-l-4 border-l-(--red) bg-(--mist) px-5" : ""}`}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-(--navy)">{meeting.date}</h3>
                    <p className="mt-1 text-base text-(--ink-muted)">{meeting.label}</p>
                  </div>
                  <p className="text-base font-semibold text-(--navy)">{meeting.time}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
