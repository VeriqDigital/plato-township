import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  AnnouncementListItem,
  AnnouncementMeta,
  AnnouncementResourceLink,
} from "@/components/announcements/AnnouncementComponents";
import {
  announcements,
  formatAnnouncementDate,
  getActiveAnnouncements,
  getAnnouncementBySlug,
  isAnnouncementExpired,
  type AnnouncementResource,
} from "@/data/announcements";

type AnnouncementPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return announcements.map((announcement) => ({
    slug: announcement.slug,
  }));
}

export async function generateMetadata({
  params,
}: AnnouncementPageProps): Promise<Metadata> {
  const { slug } = await params;
  const announcement = getAnnouncementBySlug(slug);

  if (!announcement) notFound();

  return {
    title: announcement.title,
    description: announcement.summary,
    category: announcement.category,
    openGraph: {
      title: announcement.title,
      description: announcement.summary,
      type: "article",
      publishedTime: `${announcement.publishedAt}T12:00:00.000Z`,
      images: [],
    },
    twitter: {
      card: "summary",
      title: announcement.title,
      description: announcement.summary,
      images: [],
    },
  };
}

export default async function AnnouncementDetailPage({
  params,
}: AnnouncementPageProps) {
  const { slug } = await params;
  const announcement = getAnnouncementBySlug(slug);

  if (!announcement) notFound();

  const archived = isAnnouncementExpired(announcement);
  const resources = [announcement.attachment, announcement.externalLink].filter(
    (resource): resource is AnnouncementResource => Boolean(resource),
  );
  const relatedAnnouncements = getActiveAnnouncements()
    .filter((item) => item.slug !== announcement.slug)
    .slice(0, 2);

  return (
    <main>
      <header className="bg-(--navy) py-14 text-white sm:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/announcements"
            className="mb-7 inline-flex min-h-11 items-center text-sm font-semibold text-white/68 transition hover:text-white"
          >
            <span aria-hidden="true" className="mr-2">
              ←
            </span>
            All announcements
          </Link>
          <div className="[&_span]:text-white/72">
            <AnnouncementMeta announcement={announcement} archived={archived} />
          </div>
          <h1 className="mt-6 max-w-4xl font-heading text-4xl font-medium uppercase leading-[1.02] sm:text-6xl">
            {announcement.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/72 sm:text-lg">
            {announcement.summary}
          </p>
        </div>
      </header>

      <article className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-14">
          <div className="min-w-0">
            {archived && (
              <div className="mb-8 border-l-4 border-(--line) bg-(--mist) p-5 text-sm leading-7 text-(--ink-muted)">
                <strong className="text-(--navy)">Archived notice.</strong>{" "}
                This announcement expired after{" "}
                {formatAnnouncementDate(announcement.expiresAt!)} and remains
                available for reference.
              </div>
            )}

            {announcement.demo && (
              <div className="mb-8 border-l-4 border-(--red) bg-(--mist) p-5 text-sm leading-7 text-(--ink-muted)">
                <strong className="text-(--navy)">Sample announcement.</strong>{" "}
                This content demonstrates the notice system and should be
                replaced with confirmed township information before launch.
              </div>
            )}

            <div className="space-y-6 text-base leading-8 text-(--ink-muted) sm:text-lg sm:leading-9">
              {announcement.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {resources.length > 0 && (
              <section
                aria-labelledby="announcement-resources"
                className="mt-12"
              >
                <h2
                  id="announcement-resources"
                  className="text-2xl font-semibold tracking-tight text-(--navy)"
                >
                  Related Resources
                </h2>
                <div className="mt-5 border-t border-(--line)">
                  {resources.map((resource) => (
                    <AnnouncementResourceLink
                      key={`${resource.href}-${resource.label}`}
                      resource={resource}
                    />
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="h-fit border-t-4 border-(--navy) bg-(--mist) p-6">
            <h2 className="text-lg font-semibold text-(--navy)">
              Notice Information
            </h2>
            <dl className="mt-4 border-t border-(--line) text-sm">
              <div className="border-b border-(--line) py-4">
                <dt className="font-semibold text-(--navy)">Department</dt>
                <dd className="mt-1 text-(--ink-muted)">
                  {announcement.category}
                </dd>
              </div>
              <div className="border-b border-(--line) py-4">
                <dt className="font-semibold text-(--navy)">Published</dt>
                <dd className="mt-1 text-(--ink-muted)">
                  <time dateTime={announcement.publishedAt}>
                    {formatAnnouncementDate(announcement.publishedAt)}
                  </time>
                </dd>
              </div>
              <div className="border-b border-(--line) py-4">
                <dt className="font-semibold text-(--navy)">Status</dt>
                <dd className="mt-1 text-(--ink-muted)">
                  {archived ? "Archived" : "Current"}
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </article>

      {relatedAnnouncements.length > 0 && (
        <section
          aria-labelledby="recent-announcements"
          className="bg-(--mist) py-12 sm:py-16"
        >
          <div className="mx-auto max-w-5xl px-6">
            <div className="flex flex-col gap-3 border-b border-(--line) pb-5 sm:flex-row sm:items-end sm:justify-between">
              <h2
                id="recent-announcements"
                className="text-3xl font-semibold tracking-tight text-(--navy)"
              >
                Recent Announcements
              </h2>
              <Link
                href="/announcements"
                className="inline-flex min-h-11 w-fit items-center text-sm font-semibold text-(--red-dark) underline decoration-(--red)/35 underline-offset-4"
              >
                View the full archive
              </Link>
            </div>
            <ol>
              {relatedAnnouncements.map((item) => (
                <li key={item.slug} className="border-b border-(--line)">
                  <AnnouncementListItem
                    announcement={item}
                    className="py-7 sm:px-5"
                  />
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}
    </main>
  );
}
