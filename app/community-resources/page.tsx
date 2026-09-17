import type { Metadata } from "next";
import Link from "next/link";
import { CommunityResourceDirectory } from "@/components/community/CommunityResourceDirectory";
import { communityResourceCategories } from "@/data/community-resources";

const description =
  "Community resources for Plato Township, including fire departments, weather information, local news, trash services, and recreation links.";

export const metadata: Metadata = {
  title: "Community Resources",
  description,
  openGraph: {
    title: "Community Resources",
    description,
    images: [],
  },
  twitter: {
    card: "summary",
    title: "Community Resources",
    description,
    images: [],
  },
};

export default function CommunityResourcesPage() {
  return (
    <main>
      <header className="bg-(--navy) py-16 text-white sm:py-20">
        <div className="mx-auto max-w-(--container-width) px-6">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-(--red-light)">
            Resident directory
          </p>
          <h1 className="mt-3 max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
            Community Resources
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
            Quick access to public safety, weather, local news, sanitation,
            and recreation resources serving Plato Township residents.
          </p>
        </div>
      </header>

      <nav aria-label="Community resource sections" className="bg-(--warm-white)">
        <div className="mx-auto max-w-(--container-width) px-6 py-5">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {communityResourceCategories.map((category) => (
              <li key={category.id}>
                <Link
                  href={`#${category.id}`}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-(--navy) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
                >
                  {category.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <CommunityResourceDirectory categories={communityResourceCategories} />
    </main>
  );
}
