import assert from "node:assert/strict";
import test from "node:test";
import {
  getAnnouncementBySlug,
  getArchivedAnnouncements,
  getHomepageAnnouncements,
  getPlatoTownshipCalendarDate,
  isAnnouncementExpired,
} from "../data/announcements.ts";

const coatDrive = getAnnouncementBySlug("coat-drive-2026");

test("coat drive remains current for the whole of October 12 in Chicago", () => {
  for (const timestamp of [
    "2026-10-12T05:00:00.000Z",
    "2026-10-13T00:00:00.000Z", // UTC has changed date; Chicago has not.
    "2026-10-13T04:59:59.999Z",
  ]) {
    const date = new Date(timestamp);
    assert.equal(getPlatoTownshipCalendarDate(date), "2026-10-12");
    assert.equal(isAnnouncementExpired(coatDrive, date), false);
    assert.equal(getHomepageAnnouncements(3, date)[0].slug, coatDrive.slug);
  }
});

test("Chicago midnight removes the coat drive but preserves other current notices", () => {
  const midnight = new Date("2026-10-13T05:00:00.000Z");
  assert.equal(getPlatoTownshipCalendarDate(midnight), "2026-10-13");
  assert.equal(isAnnouncementExpired(coatDrive, midnight), true);
  const homepage = getHomepageAnnouncements(3, midnight);
  assert(!homepage.some(({ slug }) => slug === coatDrive.slug));
  assert(homepage.some(({ slug }) => slug.startsWith("mobile-dmv-event")));
  assert(getArchivedAnnouncements(midnight).some(({ slug }) => slug === coatDrive.slug));
});

test("expiration uses Chicago calendar dates across daylight saving changes", () => {
  const winterNotice = { ...coatDrive, expiresAt: "2026-11-01" };
  assert.equal(isAnnouncementExpired(winterNotice, new Date("2026-11-02T05:59:59Z")), false);
  assert.equal(isAnnouncementExpired(winterNotice, new Date("2026-11-02T06:00:00Z")), true);
});
