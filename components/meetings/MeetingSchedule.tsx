"use client";

import { useEffect, useState } from "react";
import {
  getUpcomingMeetings,
  meetingSchedules,
  publishedMeetingYears,
} from "@/data/board-meetings";

const MeetingSchedule = ({ initialYear }: { initialYear: number }) => {
  const [selectedYear, setSelectedYear] = useState(initialYear);
  const [currentDate, setCurrentDate] = useState<Date | null>(null);
  const schedule = meetingSchedules[selectedYear];
  const latestYear = publishedMeetingYears[publishedMeetingYears.length - 1];

  useEffect(() => {
    const refreshDate = () => setCurrentDate(new Date());
    const animationFrame = window.requestAnimationFrame(refreshDate);
    const interval = window.setInterval(refreshDate, 60_000);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearInterval(interval);
    };
  }, []);

  const nextMeeting = currentDate
    ? getUpcomingMeetings(currentDate, 1)[0]
    : undefined;

  return (
    <div className="mt-12 grid gap-8 lg:grid-cols-[0.38fr_1fr]">
      <div>
        <h2 id="meeting-schedule-heading" aria-live="polite" className="text-3xl font-semibold tracking-tight text-(--navy)">
          {selectedYear} Meeting Schedule
        </h2>
        <p className="mt-4 max-w-sm text-base leading-7 text-(--ink-muted)">
          Regular meetings take place at the township hall. The Annual Town Meeting is listed separately within the schedule.
        </p>
        <label htmlFor="meeting-year" className="mt-6 block text-sm font-semibold text-(--navy)">
          Schedule year
        </label>
        <select
          id="meeting-year"
          value={selectedYear}
          onChange={(event) => setSelectedYear(Number(event.target.value))}
          aria-controls="meeting-schedule-list"
          className="mt-2 min-h-11 w-full border border-(--line) bg-white px-4 py-2 text-base font-semibold text-(--navy) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--red) sm:w-48"
        >
          {publishedMeetingYears.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
        <p className="mt-4 text-sm leading-6 text-(--ink-muted)">
          The {latestYear} meeting schedule is available now.
        </p>
        {selectedYear !== latestYear && (
          <button
            type="button"
            onClick={() => setSelectedYear(latestYear)}
            className="inline-flex min-h-11 items-center py-2 text-sm font-semibold text-(--navy) underline decoration-(--red)/40 underline-offset-4 hover:text-(--red)"
          >
            View {latestYear} schedule
          </button>
        )}
        {schedule.officialPdf && (
          <a
            href={schedule.officialPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 items-center border border-(--navy) px-4 py-2.5 text-sm font-semibold text-(--navy) transition hover:bg-(--navy) hover:text-white"
          >
            View Official {selectedYear} Schedule (PDF)
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        )}
      </div>
      <div id="meeting-schedule-list" aria-labelledby="meeting-schedule-heading" className="border-t border-(--line)">
        {schedule.meetings.map((meeting) => {
          const isAnnualMeeting = meeting.type === "annual";
          const isNextMeeting = meeting.isoDate === nextMeeting?.isoDate;

          return (
            <article
              key={`${meeting.isoDate}-${meeting.type}`}
              className={`grid gap-3 border-b border-(--line) py-5 sm:grid-cols-[1fr_auto] sm:items-center ${
                isAnnualMeeting
                  ? "border-l-4 border-l-(--red) bg-(--mist) px-5"
                  : "px-1"
              } ${
                isNextMeeting
                  ? "outline-2 outline-offset-[-2px] outline-(--navy)"
                  : ""
              }`}
            >
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-(--navy)">
                    {meeting.date}
                  </h3>
                  {isNextMeeting && (
                    <span className="bg-(--navy) px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                      Next meeting
                    </span>
                  )}
                </div>
                <p className="mt-1 text-base text-(--ink-muted)">
                  {meeting.label}
                  {isAnnualMeeting && (
                    <span className="ml-2 font-semibold text-(--red-dark)">
                      Special meeting
                    </span>
                  )}
                </p>
              </div>
              <p className="text-base font-semibold text-(--navy)">
                {meeting.time}
              </p>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default MeetingSchedule;
