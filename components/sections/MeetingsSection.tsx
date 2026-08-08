import Link from "next/link";
import { upcomingBoardMeetings2026 } from "@/data/board-meetings";

const MeetingsSection = () => {
  return (
    <section id="meetings" className="bg-(--navy) py-20 text-white sm:py-24">
      <div className="mx-auto max-w-(--container-width) px-6">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="max-w-lg font-heading text-5xl font-medium uppercase leading-[0.98] sm:text-6xl">
              Township Meetings
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-white/72">
              Regular board meetings are held at 6:00 PM on the fourth Tuesday
              of each month at Plato Township Hall.
            </p>
            <Link
              href="/board-meetings"
              className="mt-8 inline-flex items-center border border-white/30 px-5 py-3 text-sm font-semibold transition hover:bg-white hover:text-(--navy)"
            >
              View all meetings
            </Link>
          </div>

          <div className="border-t border-white/20">
            {upcomingBoardMeetings2026.map((meeting) => (
              <article
                key={`${meeting.month}-${meeting.day}`}
                className="grid grid-cols-[4.5rem_1fr] gap-6 border-b border-white/16 py-6 sm:grid-cols-[6rem_1fr_auto] sm:items-center"
              >
                <div className="border-r border-white/18 pr-5 text-center">
                  <p className="font-heading text-4xl leading-none">{meeting.day}</p>
                  <p className="mt-1 text-[10px] font-bold tracking-[0.2em] text-(--red-light)">
                    {meeting.month}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-medium text-white/45">
                    {meeting.date}
                  </p>
                  <h3 className="text-xl font-semibold">{meeting.label}</h3>
                  <p className="mt-1 text-base text-white/65">Plato Township Hall · {meeting.time}</p>
                </div>
                <Link
                  href="/board-meetings"
                  className="col-start-2 text-sm font-semibold text-white/70 underline decoration-white/25 underline-offset-4 hover:text-white sm:col-start-auto"
                >
                  Details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetingsSection;
