export const announcementCategories = [
  "Township Office",
  "Highway Department",
  "Assessor",
  "Township Clerk",
  "Cemetery District",
  "Board / Meetings",
  "Community Events",
  "General",
] as const;

export type AnnouncementCategory = (typeof announcementCategories)[number];

export type AnnouncementResource = {
  label: string;
  href: string;
  fileType?: "PDF" | "Web page" | "Document";
  external?: boolean;
};

export type Announcement = {
  slug: string;
  title: string;
  summary: string;
  body: readonly string[];
  category: AnnouncementCategory;
  publishedAt: string;
  expiresAt?: string;
  featured?: boolean;
  urgent?: boolean;
  attachment?: AnnouncementResource;
  externalLink?: AnnouncementResource;
  demo?: boolean;
};

// Minimum required fields: slug, title, summary, body, category, and publishedAt.
// expiresAt is the final America/Chicago calendar date the notice stays current.
export const announcements: readonly Announcement[] = [
  {
    slug: "mobile-dmv-event-sycamore-october-14-2026",
    title: "Mobile DMV Event in Sycamore – October 14",
    summary:
      "A Mobile DMV event will be held in Sycamore for residents needing select driver's license, state ID, vehicle registration, and related services.",
    body: [
      "A Mobile DMV event will be held on Wednesday, October 14, 2026, from 10:00 AM to 2:00 PM at the DeKalb County Farm Bureau, 1350 W. Prairie Drive, Sycamore, IL 60178.",
      "Available services include REAL ID, driver's license renewal or correction, new or renewed State ID cards, vehicle registration and license plate sticker services, and organ and tissue donor registration.",
      "Registration is required, and space is limited. Use the registration link below to register for the event.",
      "Driver's tests will not be administered. Written and road tests are not available at Mobile DMV events.",
      "Information shared with Plato Township by the Office of State Representative Jeff Keicher.",
    ],
    category: "Community Events",
    publishedAt: "2026-09-18",
    expiresAt: "2026-10-14",
    featured: true,
    externalLink: {
      label: "Register for the Mobile DMV Event",
      href: "https://repkeicher.com/sycamore-mobile-dmv-event/",
      fileType: "Web page",
      external: true,
    },
  },
];

const toTimestamp = (date: string) =>
  new Date(`${date}T12:00:00.000Z`).getTime();

export const ANNOUNCEMENT_TIME_ZONE = "America/Chicago";

const platoTownshipDateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: ANNOUNCEMENT_TIME_ZONE,
});

export const getPlatoTownshipCalendarDate = (date = new Date()) => {
  const parts = Object.fromEntries(
    platoTownshipDateFormatter
      .formatToParts(date)
      .filter(({ type }) => type === "year" || type === "month" || type === "day")
      .map(({ type, value }) => [type, value]),
  );

  return `${parts.year}-${parts.month}-${parts.day}`;
};

export const formatAnnouncementDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(toTimestamp(date));

export const isAnnouncementExpired = (
  announcement: Announcement,
  referenceDate = new Date(),
) =>
  Boolean(
    announcement.expiresAt &&
      getPlatoTownshipCalendarDate(referenceDate) > announcement.expiresAt,
  );

const byStableIdentity = (a: Announcement, b: Announcement) => {
  if (a.slug !== b.slug) return a.slug < b.slug ? -1 : 1;
  if (a.title !== b.title) return a.title < b.title ? -1 : 1;
  return 0;
};

export const compareAnnouncementsByPublicationDate = (
  a: Announcement,
  b: Announcement,
) =>
  toTimestamp(b.publishedAt) - toTimestamp(a.publishedAt) ||
  byStableIdentity(a, b);

export const compareAnnouncementsByPriority = (
  a: Announcement,
  b: Announcement,
) => {
  const urgentDifference = Number(Boolean(b.urgent)) - Number(Boolean(a.urgent));
  if (urgentDifference) return urgentDifference;

  const featuredDifference =
    Number(Boolean(b.featured)) - Number(Boolean(a.featured));
  return featuredDifference || compareAnnouncementsByPublicationDate(a, b);
};

export const getActiveAnnouncements = (referenceDate = new Date()) =>
  announcements
    .filter((announcement) => !isAnnouncementExpired(announcement, referenceDate))
    .toSorted(compareAnnouncementsByPublicationDate);

export const getArchivedAnnouncements = (referenceDate = new Date()) =>
  announcements
    .filter((announcement) => isAnnouncementExpired(announcement, referenceDate))
    .toSorted(compareAnnouncementsByPublicationDate);

export const getHomepageAnnouncements = (
  limit = 3,
  referenceDate = new Date(),
) =>
  getActiveAnnouncements(referenceDate)
    .toSorted(compareAnnouncementsByPriority)
    .slice(0, limit);

export const getPriorityAnnouncement = (referenceDate = new Date()) =>
  getActiveAnnouncements(referenceDate)
    .filter((announcement) => announcement.urgent || announcement.featured)
    .toSorted(compareAnnouncementsByPriority)[0];

export const getAnnouncementBySlug = (slug: string) =>
  announcements.find((announcement) => announcement.slug === slug);
