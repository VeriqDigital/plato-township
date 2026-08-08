"use client";

import { useEffect, useState } from "react";
import {
  completeMeetingSchedule2026,
  getUpcomingMeetings,
} from "@/data/board-meetings";

const MeetingSchedule = () => {
  const [currentDate, setCurrentDate] = useState<Date | null>(null);

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
    <div className="border-t border-(--line)">
      {completeMeetingSchedule2026.map((meeting) => {
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
  );
};

export default MeetingSchedule;
