import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  completeMeetingSchedule2026,
  completeMeetingSchedule2027,
  getDefaultMeetingYear,
  getUpcomingMeetings,
  meetingSchedules,
  publishedMeetingYears,
} from "../data/board-meetings.ts";

const dates2027 = [
  "2027-01-26", "2027-02-23", "2027-03-23", "2027-04-13",
  "2027-04-27", "2027-05-25", "2027-06-22", "2027-07-27",
  "2027-08-24", "2027-09-28", "2027-10-26", "2027-11-23",
  "2027-12-28",
];
const dates = (meetings) => meetings.map(({ isoDate }) => isoDate);

test("all 13 official 2027 dates are published with consistent display fields", () => {
  assert.deepEqual(dates(completeMeetingSchedule2027), dates2027);
  for (const meeting of completeMeetingSchedule2027) {
    const date = new Date(`${meeting.isoDate}T12:00:00Z`);
    assert.equal(meeting.date, date.toLocaleDateString("en-US", {
      timeZone: "America/Chicago", month: "long", day: "numeric", year: "numeric",
    }));
    assert.equal(meeting.day, String(date.getUTCDate()));
    assert.equal(meeting.month, date.toLocaleDateString("en-US", {
      timeZone: "America/Chicago", month: "short",
    }).toUpperCase());
  }
});

test("April 13 is the Annual Town Meeting at 6:01 PM; April 27 remains regular", () => {
  const annual = completeMeetingSchedule2027.filter(({ type }) => type === "annual");
  assert.deepEqual(annual, [{
    date: "April 13, 2027", isoDate: "2027-04-13", day: "13", month: "APR",
    label: "Annual Town Meeting", time: "6:01 PM", type: "annual",
  }]);
  const regular = completeMeetingSchedule2027.filter(({ type }) => type === "regular");
  assert.equal(regular.length, 12);
  for (const meeting of regular) {
    assert.equal(meeting.time, "6:00 PM");
    assert.equal(meeting.label, "Regular Board Meeting");
  }
  assert.deepEqual(regular.find(({ isoDate }) => isoDate === "2027-04-27"), {
    date: "April 27, 2027", isoDate: "2027-04-27", day: "27", month: "APR",
    label: "Regular Board Meeting", time: "6:00 PM", type: "regular",
  });
});

test("the entire 2026 schedule is retained", () => {
  assert.deepEqual(dates(completeMeetingSchedule2026), [
    "2026-01-27", "2026-02-24", "2026-03-24", "2026-04-14",
    "2026-04-28", "2026-05-26", "2026-06-23", "2026-07-28",
    "2026-08-25", "2026-09-22", "2026-10-27", "2026-11-24",
    "2026-12-22",
  ]);
  for (const meeting of completeMeetingSchedule2026) {
    const annual = meeting.isoDate === "2026-04-14";
    assert.equal(meeting.type, annual ? "annual" : "regular");
    assert.equal(meeting.time, annual ? "6:01 PM" : "6:00 PM");
    assert.equal(meeting.label, annual ? "Annual Town Meeting" : "Regular Board Meeting");
  }
});

test("published years and their unique meeting records are chronological", () => {
  assert.deepEqual(publishedMeetingYears, [2026, 2027]);
  for (const year of publishedMeetingYears) {
    const meetings = meetingSchedules[year].meetings;
    const isoDates = dates(meetings);
    assert.deepEqual(isoDates, [...isoDates].sort());
    assert.equal(new Set(isoDates).size, meetings.length);
    assert(meetings.every(({ isoDate }) => isoDate.startsWith(`${year}-`)));
  }
  const allDates = dates(getUpcomingMeetings(new Date("2026-01-01T12:00:00Z")));
  assert.equal(allDates.length, 26);
  assert.deepEqual(allDates, [...allDates].sort());
});

test("the next three meetings cross from December 2026 into 2027", () => {
  assert.deepEqual(dates(getUpcomingMeetings(new Date("2026-11-25T06:00:00Z"), 3)), [
    "2026-12-22", "2027-01-26", "2027-02-23",
  ]);
  assert.equal(getUpcomingMeetings(new Date("2027-01-01T06:00:00Z"))[0].isoDate, "2027-01-26");
});

test("upcoming meetings filter past dates, retain annual meetings, and respect limits", () => {
  const reference = new Date("2027-04-13T05:00:00Z");
  const upcoming = getUpcomingMeetings(reference);
  assert.equal(upcoming.length, 10);
  assert.equal(upcoming[0].type, "annual");
  assert.equal(upcoming[0].time, "6:01 PM");
  assert(upcoming.every(({ isoDate }) => isoDate >= "2027-04-13"));
  assert.deepEqual(getUpcomingMeetings(reference, 1), upcoming.slice(0, 1));
  assert.deepEqual(getUpcomingMeetings(reference, 3), upcoming.slice(0, 3));
  assert.deepEqual(getUpcomingMeetings(reference, 99), upcoming);
  assert.deepEqual(getUpcomingMeetings(reference, 0), []);
  assert.deepEqual(getUpcomingMeetings(reference, -1), []);
});

test("winter and summer meetings remain visible until midnight in Chicago", () => {
  for (const [beforeMidnight, midnight, meetingDate, nextDate] of [
    ["2027-01-27T05:59:59.999Z", "2027-01-27T06:00:00Z", "2027-01-26", "2027-02-23"],
    ["2027-04-14T04:59:59.999Z", "2027-04-14T05:00:00Z", "2027-04-13", "2027-04-27"],
    ["2027-07-28T04:59:59.999Z", "2027-07-28T05:00:00Z", "2027-07-27", "2027-08-24"],
  ]) {
    assert.equal(getUpcomingMeetings(new Date(beforeMidnight), 1)[0].isoDate, meetingDate);
    assert.equal(getUpcomingMeetings(new Date(midnight), 1)[0].isoDate, nextDate);
  }
});

test("year selection defaults to the Chicago calendar year, falling back to the latest published year", () => {
  assert.equal(getDefaultMeetingYear(new Date("2026-11-13T12:00:00Z")), 2026);
  assert.equal(getDefaultMeetingYear(new Date("2027-01-01T05:59:59.999Z")), 2026);
  assert.equal(getDefaultMeetingYear(new Date("2027-01-01T06:00:00Z")), 2027);
  assert.equal(getDefaultMeetingYear(new Date("2025-01-01T12:00:00Z")), 2027);
  assert.equal(getDefaultMeetingYear(new Date("2028-01-01T12:00:00Z")), 2027);
});

test("no future published meetings returns an empty list, including with a limit", () => {
  assert.equal(getUpcomingMeetings(new Date("2027-12-29T05:59:59.999Z"))[0].isoDate, "2027-12-28");
  for (const timestamp of ["2027-12-29T06:00:00Z", "2028-01-01T12:00:00Z"]) {
    assert.deepEqual(getUpcomingMeetings(new Date(timestamp)), []);
    assert.deepEqual(getUpcomingMeetings(new Date(timestamp), 3), []);
  }
});

test("aggregation sorts and deduplicates without mutating the source arrays", () => {
  const originalSchedule = meetingSchedules[2027];
  const unordered = [...completeMeetingSchedule2027].reverse();
  unordered.push(completeMeetingSchedule2027[0]);
  const snapshot = [...unordered];
  try {
    meetingSchedules[2027] = { ...originalSchedule, meetings: unordered };
    assert.deepEqual(dates(getUpcomingMeetings(new Date("2027-01-01T12:00:00Z"))), dates2027);
    assert.deepEqual(unordered, snapshot);
  } finally {
    meetingSchedules[2027] = originalSchedule;
  }
});

test("the registered official 2027 PDF exists at the required public path", () => {
  assert.equal(meetingSchedules[2027].officialPdf,
    "/meeting-schedules/Plato-Township-2027-Meeting-Schedule.pdf");
  for (const { officialPdf } of Object.values(meetingSchedules)) {
    if (!officialPdf) continue;
    const pdf = readFileSync(new URL(`../public${officialPdf}`, import.meta.url));
    assert.equal(pdf.subarray(0, 5).toString(), "%PDF-");
  }
});
