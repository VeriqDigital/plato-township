import Link from "next/link";
import { communityResourceCategories } from "@/data/community-resources";

const CommunityResourcesSection = () => {
  return (
    <div>
      <div className="grid gap-7 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
        <div>
          <h2 className="section-title">Community Resources</h2>
        </div>
        <div className="max-w-3xl">
          <p className="text-base leading-7 text-(--ink-muted)">
            Find trusted public safety, weather, news, waste-service, and
            recreation information for Plato Township residents.
          </p>
          <Link
            href="/community-resources"
            className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
          >
            View Community Resources
            <span aria-hidden="true" className="ml-2 text-(--red)">
              →
            </span>
          </Link>
        </div>
      </div>

      <ol className="mt-9 grid border-y border-(--line) sm:grid-cols-2 xl:grid-cols-5">
        {communityResourceCategories.map((category, index) => (
          <li
            key={category.id}
            className={`border-(--line) ${
              index ? "border-t" : ""
            } ${index % 2 ? "sm:border-l" : ""} ${
              index === 1 ? "sm:border-t-0" : ""
            } ${
              index ? "xl:border-l xl:border-t-0" : "xl:border-t-0"
            }`}
          >
            <Link
              href={`/community-resources#${category.id}`}
              className="group flex h-full min-h-32 min-w-0 flex-col justify-between gap-5 p-5 transition hover:bg-white sm:p-6 xl:min-h-40"
            >
              <h3 className="break-words text-lg font-semibold leading-snug text-(--navy)">
                {category.title}
              </h3>
              <span className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.12em] text-(--red-dark)">
                View section
                <span
                  aria-hidden="true"
                  className="text-base transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default CommunityResourcesSection;
