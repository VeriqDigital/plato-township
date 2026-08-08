import Link from "next/link";
import { announcements } from "@/data/announcements";

const AnnouncementsSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h2 className="section-title">Latest Announcements</h2>
        <p className="max-w-lg text-base leading-7 text-(--ink-muted)">
          Sample content for this visual demo. A future phase can connect these
          cards to official township postings and documents.
        </p>
      </div>

      <div className="mt-9 grid border-y border-(--line) lg:grid-cols-3">
        {announcements.map((announcement, index) => (
          <article
            key={announcement.title}
            className={`flex flex-col py-7 lg:px-7 ${
              index ? "border-t border-(--line) lg:border-l lg:border-t-0" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-(--red)">
                {announcement.category}
              </p>
              <span className="rounded-full bg-(--mist) px-3 py-1 text-xs font-medium text-(--ink-muted)">
                Sample
              </span>
            </div>
            <h3 className="mt-6 max-w-sm text-xl font-semibold leading-snug text-(--navy)">
              {announcement.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-(--ink-muted)">
              {announcement.description}
            </p>
            <Link
              href="#meetings"
              className="mt-6 w-fit text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 hover:decoration-(--red)"
            >
              Read sample notice
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementsSection;
