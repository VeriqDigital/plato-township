export type BoardMeeting = {
  date: string;
  isoDate: string;
  day: string;
  month: string;
  label: string;
  time: string;
  type: "regular" | "annual";
};

export const completeMeetingSchedule2026: BoardMeeting[] = [
  { date: "January 27, 2026", isoDate: "2026-01-27", day: "27", month: "JAN", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "February 24, 2026", isoDate: "2026-02-24", day: "24", month: "FEB", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "March 24, 2026", isoDate: "2026-03-24", day: "24", month: "MAR", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "April 14, 2026", isoDate: "2026-04-14", day: "14", month: "APR", label: "Annual Town Meeting", time: "6:01 PM", type: "annual" },
  { date: "April 28, 2026", isoDate: "2026-04-28", day: "28", month: "APR", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "May 26, 2026", isoDate: "2026-05-26", day: "26", month: "MAY", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "June 23, 2026", isoDate: "2026-06-23", day: "23", month: "JUN", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "July 28, 2026", isoDate: "2026-07-28", day: "28", month: "JUL", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "August 25, 2026", isoDate: "2026-08-25", day: "25", month: "AUG", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "September 22, 2026", isoDate: "2026-09-22", day: "22", month: "SEP", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "October 27, 2026", isoDate: "2026-10-27", day: "27", month: "OCT", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "November 24, 2026", isoDate: "2026-11-24", day: "24", month: "NOV", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "December 22, 2026", isoDate: "2026-12-22", day: "22", month: "DEC", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
];

export const completeMeetingSchedule2027: BoardMeeting[] = [
  { date: "January 26, 2027", isoDate: "2027-01-26", day: "26", month: "JAN", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "February 23, 2027", isoDate: "2027-02-23", day: "23", month: "FEB", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "March 23, 2027", isoDate: "2027-03-23", day: "23", month: "MAR", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "April 13, 2027", isoDate: "2027-04-13", day: "13", month: "APR", label: "Annual Town Meeting", time: "6:01 PM", type: "annual" },
  { date: "April 27, 2027", isoDate: "2027-04-27", day: "27", month: "APR", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "May 25, 2027", isoDate: "2027-05-25", day: "25", month: "MAY", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "June 22, 2027", isoDate: "2027-06-22", day: "22", month: "JUN", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "July 27, 2027", isoDate: "2027-07-27", day: "27", month: "JUL", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "August 24, 2027", isoDate: "2027-08-24", day: "24", month: "AUG", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "September 28, 2027", isoDate: "2027-09-28", day: "28", month: "SEP", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "October 26, 2027", isoDate: "2027-10-26", day: "26", month: "OCT", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "November 23, 2027", isoDate: "2027-11-23", day: "23", month: "NOV", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "December 28, 2027", isoDate: "2027-12-28", day: "28", month: "DEC", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
];

export const meetingSchedules: Record<number, {
  meetings: BoardMeeting[];
  officialPdf?: string;
}> = {
  2026: { meetings: completeMeetingSchedule2026 },
  2027: {
    meetings: completeMeetingSchedule2027,
    officialPdf: "/meeting-schedules/Plato-Township-2027-Meeting-Schedule.pdf",
  },
};

export const publishedMeetingYears = Object.keys(meetingSchedules)
  .map(Number)
  .sort((first, second) => first - second);

const getCentralIsoDate = (date: Date) => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const part = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((value) => value.type === type)?.value ?? "";

  return `${part("year")}-${part("month")}-${part("day")}`;
};

export const getDefaultMeetingYear = (referenceDate: Date) => {
  const currentYear = Number(getCentralIsoDate(referenceDate).slice(0, 4));
  return meetingSchedules[currentYear]
    ? currentYear
    : publishedMeetingYears[publishedMeetingYears.length - 1];
};

export const getUpcomingMeetings = (referenceDate: Date, limit?: number) => {
  const today = getCentralIsoDate(referenceDate);
  const allMeetings = Object.values(meetingSchedules).flatMap(({ meetings }) => meetings);
  const uniqueMeetings = new Map(allMeetings.map((meeting) => [
    `${meeting.isoDate}-${meeting.type}`,
    meeting,
  ]));
  // Keep meetings visible through their full Chicago calendar date.
  const upcomingMeetings = [...uniqueMeetings.values()]
    .filter((meeting) => meeting.isoDate >= today)
    .sort((first, second) => first.isoDate.localeCompare(second.isoDate));

  if (limit === undefined) {
    return upcomingMeetings;
  }

  const limitedMeetings: BoardMeeting[] = [];
  for (const meeting of upcomingMeetings) {
    if (limitedMeetings.length >= limit) {
      break;
    }
    limitedMeetings.push(meeting);
  }

  return limitedMeetings;
};
