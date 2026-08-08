import Link from "next/link";

const meetings = [
  { day: "12", month: "SEP", title: "Township Board Meeting", time: "7:00 PM" },
  { day: "08", month: "OCT", title: "Township Board Meeting", time: "7:00 PM" },
  { day: "05", month: "NOV", title: "Township Board Meeting", time: "7:00 PM" },
];

const MeetingsSection = () => {
  return (
    <section id="meetings" className="bg-(--navy) py-24 text-white sm:py-30">
      <div className="mx-auto max-w-(--container-width) px-6">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow text-white/55 before:bg-(--red)">Public meetings</p>
            <h2 className="mt-5 max-w-lg font-heading text-5xl font-medium uppercase leading-[0.98] sm:text-7xl">
              Your township at work
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/62">
              Follow upcoming public meetings and find agendas and minutes in
              one consistent location. Dates below are sample demo content.
            </p>
            <Link
              href="#postings"
              className="mt-9 inline-flex items-center gap-8 border border-white/30 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] transition hover:bg-white hover:text-(--navy)"
            >
              View all meetings <span>→</span>
            </Link>
          </div>

          <div className="border-t border-white/20">
            {meetings.map((meeting) => (
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
                  <p className="mb-1 text-[9px] font-bold uppercase tracking-[0.17em] text-white/40">
                    Sample schedule
                  </p>
                  <h3 className="font-heading text-2xl font-medium uppercase">{meeting.title}</h3>
                  <p className="mt-1 text-sm text-white/55">Township Office · {meeting.time}</p>
                </div>
                <Link
                  href="#postings"
                  className="col-start-2 text-xs font-bold uppercase tracking-[0.14em] text-white/65 hover:text-white sm:col-start-auto"
                >
                  Details →
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
