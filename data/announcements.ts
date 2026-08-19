export const announcementCategories = [
  "Township Office",
  "Highway Department",
  "Assessor",
  "Township Clerk",
  "Cemetery District",
  "Board / Meetings",
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
// Demo announcements are non-operational and should be replaced before launch.
export const announcements: readonly Announcement[] = [
  {
    slug: "seasonal-road-maintenance-update",
    title: "Seasonal road maintenance update",
    summary:
      "Sample content showing where residents can find confirmed road-work locations, timing, and contact information.",
    body: [
      "This is a sample announcement for layout and workflow testing. It does not announce an active closure, construction schedule, or change in road conditions.",
      "Before publishing a real Highway Department notice, replace this text with confirmed locations, dates, expected traffic impacts, and the appropriate resident contact route.",
    ],
    category: "Highway Department",
    publishedAt: "2026-08-15",
    featured: true,
    externalLink: {
      label: "Visit the Plato Township Road District website",
      href: "https://www.platotownship.com/",
      fileType: "Web page",
      external: true,
    },
    demo: true,
  },
  {
    slug: "property-assessment-resources",
    title: "Property assessment resources",
    summary:
      "Sample guidance showing how residents can be directed to Assessor information and property-search resources.",
    body: [
      "This sample notice demonstrates how the township can direct residents to assessment resources without duplicating or recreating the Assessor's property database.",
      "A published notice should identify the specific resource being shared and should include only confirmed filing dates, requirements, and contact information.",
    ],
    category: "Assessor",
    publishedAt: "2026-08-08",
    attachment: {
      label: "Review the online Property Search disclaimer",
      href: "/departments/assessor/property-search",
      fileType: "Web page",
    },
    demo: true,
  },
  {
    slug: "public-notice-and-office-update",
    title: "Public notice and office update",
    summary:
      "Sample content demonstrating how a time-sensitive township office notice can be presented without announcing a real closure or emergency.",
    body: [
      "This is a sample urgent notice used to test the announcement system's restrained priority treatment. There is no active office closure or emergency associated with this posting.",
      "For a live notice, replace this copy with confirmed information, a clear effective date, any resident action required, and the township office contact route.",
    ],
    category: "Township Office",
    publishedAt: "2026-08-01",
    urgent: true,
    demo: true,
  },
  {
    slug: "archived-board-notice-example",
    title: "Archived board notice example",
    summary:
      "Sample expired notice demonstrating how past township announcements remain available in the archive.",
    body: [
      "This sample record demonstrates automatic archive behavior. It does not describe a real meeting, deadline, or Board action.",
      "The announcement remains available at its permanent URL after its expiration date, while no longer appearing in the homepage's current announcements.",
    ],
    category: "Board / Meetings",
    publishedAt: "2026-05-01",
    expiresAt: "2026-05-31",
    attachment: {
      label: "Browse published Board Minutes",
      href: "/board-minutes",
      fileType: "Web page",
    },
    demo: true,
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
