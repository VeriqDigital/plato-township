export type BoardMeeting = {
  date: string;
  day: string;
  month: string;
  label: string;
  time: string;
  type: "regular" | "annual";
};

export const regularBoardMeetings2026: BoardMeeting[] = [
  { date: "January 27, 2026", day: "27", month: "JAN", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "February 24, 2026", day: "24", month: "FEB", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "March 24, 2026", day: "24", month: "MAR", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "April 28, 2026", day: "28", month: "APR", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "May 26, 2026", day: "26", month: "MAY", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "June 23, 2026", day: "23", month: "JUN", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "July 28, 2026", day: "28", month: "JUL", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "August 25, 2026", day: "25", month: "AUG", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "September 22, 2026", day: "22", month: "SEP", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "October 27, 2026", day: "27", month: "OCT", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "November 24, 2026", day: "24", month: "NOV", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
  { date: "December 22, 2026", day: "22", month: "DEC", label: "Regular Board Meeting", time: "6:00 PM", type: "regular" },
];

export const annualTownMeeting2026: BoardMeeting = {
  date: "April 14, 2026",
  day: "14",
  month: "APR",
  label: "Annual Town Meeting",
  time: "6:01 PM",
  type: "annual",
};

export const completeMeetingSchedule2026 = [
  ...regularBoardMeetings2026.slice(0, 3),
  annualTownMeeting2026,
  ...regularBoardMeetings2026.slice(3),
];

export const upcomingBoardMeetings2026 = regularBoardMeetings2026.slice(7, 10);
