import assert from "node:assert/strict";
import test from "node:test";
import { communityResourceCategories, getCommunityResourceCategory } from "../data/community-resources.ts";

test("Local News contains exactly the four requested sources in priority order", () => {
  const news = getCommunityResourceCategory("local-news");
  assert(news);
  assert.deepEqual(news.resources.map(({ title, href, external }) => ({ title, href, external })), [
    { title: "Kane County Speaks", href: "https://www.kanecountyspeaks.com/", external: true },
    { title: "Kane County Connects", href: "https://www.kanecountyconnects.com/", external: true },
    { title: "Patch", href: "https://patch.com/illinois/elgin", external: true },
    { title: "Spy News", href: "https://www.wspynews.com/", external: true },
  ]);
});

test("community resource identifiers are unique and external destinations use HTTPS", () => {
  const ids = new Set();
  for (const category of communityResourceCategories) {
    for (const resource of category.resources) {
      assert(!ids.has(resource.id), `duplicate resource: ${resource.id}`);
      ids.add(resource.id);
      assert.equal(new URL(resource.href).protocol, "https:");
      assert(resource.description.trim());
      assert(resource.ctaLabel.trim());
    }
  }
});
