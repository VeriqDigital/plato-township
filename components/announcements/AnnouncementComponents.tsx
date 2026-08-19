import Link from "next/link";
import {
  formatAnnouncementDate,
  type Announcement,
  type AnnouncementResource,
} from "@/data/announcements";

export function AnnouncementMeta({
  announcement,
  archived = false,
}: {
  announcement: Announcement;
  archived?: boolean;
}) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-semibold uppercase tracking-[0.12em] text-(--ink-muted)">
      <span className="text-(--red-dark)">{announcement.category}</span>
      <span aria-hidden="true" className="size-1 bg-(--line)" />
      <time dateTime={announcement.publishedAt}>
        {formatAnnouncementDate(announcement.publishedAt)}
      </time>
      {announcement.urgent ? (
        <span className="border-l-2 border-(--red) pl-2 text-(--red-dark)">
          Urgent
        </span>
      ) : announcement.featured ? (
        <span className="border-l-2 border-(--navy) pl-2 text-(--navy)">
          Featured
        </span>
      ) : null}
      {archived && (
        <span className="border-l-2 border-(--line) pl-2">Archived</span>
      )}
      {announcement.demo && (
        <span className="border border-(--line) px-2 py-1 text-[0.65rem] tracking-[0.14em]">
          Sample
        </span>
      )}
    </div>
  );
}

export function AnnouncementListItem({
  announcement,
  archived = false,
  className = "",
}: {
  announcement: Announcement;
  archived?: boolean;
  className?: string;
}) {
  return (
    <article className={`flex h-full min-w-0 flex-col ${className}`}>
      <AnnouncementMeta announcement={announcement} archived={archived} />
      <h3 className="mt-5 max-w-2xl text-xl font-semibold leading-snug text-(--navy) sm:text-2xl">
        <Link
          href={`/announcements/${announcement.slug}`}
          className="underline decoration-transparent underline-offset-4 transition hover:decoration-(--red)"
        >
          {announcement.title}
        </Link>
      </h3>
      <p className="mt-3 max-w-3xl text-base leading-7 text-(--ink-muted)">
        {announcement.summary}
      </p>
      <Link
        href={`/announcements/${announcement.slug}`}
        className="mt-6 inline-flex min-h-11 w-fit items-center text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
      >
        Read full announcement
        <span aria-hidden="true" className="ml-2 text-(--red)">
          →
        </span>
      </Link>
    </article>
  );
}

export function FeaturedAnnouncement({
  announcement,
}: {
  announcement: Announcement;
}) {
  return (
    <article className="border-l-4 border-(--red) bg-(--mist) p-6 sm:p-8">
      <AnnouncementMeta announcement={announcement} />
      <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-(--navy) sm:text-4xl">
        {announcement.title}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-(--ink-muted)">
        {announcement.summary}
      </p>
      <Link
        href={`/announcements/${announcement.slug}`}
        className="mt-6 inline-flex min-h-11 items-center bg-(--navy) px-5 py-3 text-sm font-bold text-white transition hover:bg-(--red-dark)"
      >
        Read full announcement
        <span aria-hidden="true" className="ml-2">
          →
        </span>
      </Link>
    </article>
  );
}

export function AnnouncementResourceLink({
  resource,
}: {
  resource: AnnouncementResource;
}) {
  const opensNewTab = resource.external || resource.fileType === "PDF";
  const content = (
    <>
      <span className="min-w-0">
        <span className="block text-base font-semibold text-(--navy)">
          {resource.label}
        </span>
        <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.12em] text-(--ink-muted)">
          {resource.fileType ?? "Resource"}
          {resource.external ? " · External site" : ""}
          {resource.fileType === "PDF" ? " · Opens in a new tab" : ""}
        </span>
      </span>
      <span aria-hidden="true" className="shrink-0 text-(--red)">
        {opensNewTab ? "↗" : "→"}
      </span>
    </>
  );
  const className =
    "flex min-h-16 items-center justify-between gap-5 border-b border-(--line) py-4 transition hover:bg-white sm:px-4";

  return opensNewTab ? (
    <a
      href={resource.href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {content}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  ) : (
    <Link href={resource.href} className={className}>
      {content}
    </Link>
  );
}
