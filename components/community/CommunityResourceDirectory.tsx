import type {
  CommunityResource,
  CommunityResourceCategory,
} from "@/data/community-resources";

function ExternalResourceLink({ resource }: { resource: CommunityResource }) {
  return (
    <article className="grid min-w-0 gap-5 py-6 sm:px-5 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
      <div className="min-w-0">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-(--red-dark)">
          {resource.resourceType}
        </p>
        <h3 className="mt-2 text-xl font-semibold leading-snug text-(--navy) sm:text-2xl">
          {resource.title}
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-(--ink-muted) sm:text-base">
          {resource.description}
        </p>
        {resource.note && (
          <p className="mt-3 text-sm font-semibold leading-6 text-(--navy)">
            {resource.note}
          </p>
        )}
        {resource.phone && resource.phoneHref && (
          <p className="mt-4 flex flex-wrap items-baseline gap-x-2 text-sm text-(--ink-muted)">
            <span>{resource.phoneLabel ?? "Phone"}:</span>
            <a
              href={resource.phoneHref}
              aria-label={`Call ${resource.title} ${resource.phoneLabel?.toLowerCase() ?? "phone"} at ${resource.phone}`}
              className="inline-flex min-h-11 items-center font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
            >
              {resource.phone}
            </a>
          </p>
        )}
      </div>

      <a
        href={resource.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-12 w-full min-w-0 max-w-full items-center justify-between gap-4 border border-(--line) px-4 py-3 text-sm font-semibold text-(--navy) transition hover:border-(--red) hover:text-(--red) sm:w-fit sm:min-w-52"
      >
        <span className="min-w-0 break-words">{resource.ctaLabel}</span>
        <span aria-hidden="true" className="shrink-0 text-(--red)">
          ↗
        </span>
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </article>
  );
}

export function CommunityResourceDirectory({
  categories,
}: {
  categories: readonly CommunityResourceCategory[];
}) {
  return (
    <div>
      {categories.map((category, index) => (
        <section
          key={category.id}
          id={category.id}
          aria-labelledby={`${category.id}-heading`}
          className={`scroll-mt-24 py-14 sm:py-16 ${
            index % 2 === 0 ? "bg-white" : "bg-(--mist)"
          }`}
        >
          <div className="mx-auto grid max-w-(--container-width) gap-8 px-6 lg:grid-cols-[0.38fr_1fr] lg:gap-14">
            <div>
              <h2
                id={`${category.id}-heading`}
                className="text-3xl font-semibold tracking-tight text-(--navy) sm:text-4xl"
              >
                {category.title}
              </h2>
              <p className="mt-5 max-w-md text-base leading-7 text-(--ink-muted)">
                {category.description}
              </p>
              {category.callout && (
                <p className="mt-6 border-l-4 border-(--red) bg-(--warm-white) p-4 text-sm font-semibold leading-6 text-(--navy)">
                  {category.callout}
                </p>
              )}
            </div>

            <div className="min-w-0 border-t border-(--line)">
              <ol>
                {category.resources.map((resource) => (
                  <li key={resource.id} className="border-b border-(--line)">
                    <ExternalResourceLink resource={resource} />
                  </li>
                ))}
              </ol>
              {category.availabilityNote && (
                <p className="border-b border-(--line) py-5 text-sm leading-6 text-(--ink-muted) sm:px-5">
                  {category.availabilityNote}
                </p>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
