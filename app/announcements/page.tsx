import type { Metadata } from "next";
import {
  AnnouncementListItem,
  FeaturedAnnouncement,
} from "@/components/announcements/AnnouncementComponents";
import {
  getActiveAnnouncements,
  getArchivedAnnouncements,
  getPriorityAnnouncement,
} from "@/data/announcements";

const description =
  "Find current Plato Township notices, department updates, and previously published announcements.";

export const metadata: Metadata = {
  title: "Announcements",
  description,
  openGraph: {
    title: "Announcements",
    description,
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Announcements",
    description,
    images: [],
  },
};

export default function AnnouncementsPage() {
  const currentAnnouncements = getActiveAnnouncements();
  const archivedAnnouncements = getArchivedAnnouncements();
  const priorityAnnouncement = getPriorityAnnouncement();
  const remainingCurrent = currentAnnouncements.filter(
    (announcement) => announcement.slug !== priorityAnnouncement?.slug,
  );

  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--red-light)">
            Township notices and updates
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Announcements
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Find current notices from Plato Township offices and departments,
            along with an archive of previously published updates.
          </p>
        </div>
      </header>

      <div className="bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-(--container-width) px-6">
          {priorityAnnouncement && (
            <FeaturedAnnouncement announcement={priorityAnnouncement} />
          )}

          {remainingCurrent.length ? (
            <section
              aria-labelledby="current-announcements"
              className={priorityAnnouncement ? "mt-14" : undefined}
            >
              <div className="flex flex-col gap-3 border-b border-(--line) pb-5 sm:flex-row sm:items-end sm:justify-between">
                <h2
                  id="current-announcements"
                  className="text-3xl font-semibold tracking-tight text-(--navy)"
                >
                  Current Announcements
                </h2>
                <p className="text-sm leading-6 text-(--ink-muted)">
                  Listed newest first
                </p>
              </div>
              <ol>
                {remainingCurrent.map((announcement) => (
                  <li
                    key={announcement.slug}
                    className="border-b border-(--line)"
                  >
                    <AnnouncementListItem
                      announcement={announcement}
                      className="py-7 sm:px-5"
                    />
                  </li>
                ))}
              </ol>
            </section>
          ) : !priorityAnnouncement ? (
            <section aria-labelledby="current-announcements-empty">
              <h2
                id="current-announcements-empty"
                className="text-3xl font-semibold tracking-tight text-(--navy)"
              >
                Current Announcements
              </h2>
              <p className="mt-5 border-y border-(--line) py-7 text-base leading-7 text-(--ink-muted)">
                There are no current township announcements.
              </p>
            </section>
          ) : null}
        </div>
      </div>

      <section
        aria-labelledby="announcement-archive"
        className="bg-(--mist) py-12 sm:py-16"
      >
        <div className="mx-auto max-w-(--container-width) px-6">
          <div className="flex flex-col gap-3 border-b border-(--line) pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--red-dark)">
                Previously published
              </p>
              <h2
                id="announcement-archive"
                className="mt-2 text-3xl font-semibold tracking-tight text-(--navy)"
              >
                Announcement Archive
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-(--ink-muted)">
              Expired notices remain available for reference and are marked as
              archived.
            </p>
          </div>

          {archivedAnnouncements.length ? (
            <ol>
              {archivedAnnouncements.map((announcement) => (
                <li
                  key={announcement.slug}
                  className="border-b border-(--line)"
                >
                  <AnnouncementListItem
                    announcement={announcement}
                    archived
                    className="py-7 sm:px-5"
                  />
                </li>
              ))}
            </ol>
          ) : (
            <p className="py-7 text-base leading-7 text-(--ink-muted)">
              No announcements have moved to the archive yet.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
