import Link from "next/link";
import { AnnouncementListItem } from "@/components/announcements/AnnouncementComponents";
import { getHomepageAnnouncements } from "@/data/announcements";

const AnnouncementsSection = () => {
  const latestAnnouncements = getHomepageAnnouncements();

  return (
    <div>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h2 className="section-title">Latest Announcements</h2>
        <div className="max-w-lg">
          <p className="text-base leading-7 text-(--ink-muted)">
            Township notices, department updates, and other information for
            Plato Township residents.
          </p>
          <Link
            href="/announcements"
            className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
          >
            View all announcements
            <span aria-hidden="true" className="ml-2 text-(--red)">
              →
            </span>
          </Link>
        </div>
      </div>

      {latestAnnouncements.length ? (
        <ol className="mt-9 grid border-y border-(--line) lg:grid-cols-3">
          {latestAnnouncements.map((announcement, index) => (
            <li
              key={announcement.slug}
              className={
                index
                  ? "border-t border-(--line) lg:border-l lg:border-t-0"
                  : undefined
              }
            >
              <AnnouncementListItem
                announcement={announcement}
                className="px-0 py-7 lg:px-7"
              />
            </li>
          ))}
        </ol>
      ) : (
        <div className="mt-9 border-y border-(--line) py-8">
          <p className="max-w-2xl text-base leading-7 text-(--ink-muted)">
            There are no current township announcements. Check the announcement
            archive for previously published notices.
          </p>
          <Link
            href="/announcements"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
          >
            View the announcement archive
          </Link>
        </div>
      )}
    </div>
  );
};

export default AnnouncementsSection;
