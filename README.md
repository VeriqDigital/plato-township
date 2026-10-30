# Plato Township Website

The Plato Township website for Kane County, Illinois, built with Next.js, React,
TypeScript, and Tailwind CSS. It provides township information, announcements,
meeting schedules and minutes, department contacts, and community resources.

## Tech Stack

- Next.js 16 with the App Router and React 19
- TypeScript and Tailwind CSS 4
- Vercel Analytics and Speed Insights
- ESLint for code linting

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

Run linting and a production build before submitting changes:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Content Maintenance

- Township/global contact info and navigation: `config/site.ts`
- Announcements: `data/announcements.ts`
- Board meeting schedule: `data/board-meetings.ts`
- Board minutes metadata: `data/board-minutes.ts`
- Board minute PDF files: `public/board-meeting-minutes/`
- Documents & Records registry: `data/documents.ts`
- Public record PDFs: `public/documents/`
- Department information: `data/departments.ts`
- Election resources: `data/elections.ts`
- Community resources: `data/community-resources.ts`
- Public images/documents: `public/`

Announcement records marked `demo: true` are placeholder/demo content and must
not be treated as official notices.

The `coat-drive-2026` record in `data/announcements.ts` supplies the temporary
homepage feature and links to `public/coat-drive-2026.pdf`. Its `expiresAt` date
is inclusive: it remains current through October 12, 2026 in America/Chicago
and moves to the announcement archive at midnight on October 13 (05:00 UTC).
Remove that record to remove the notice entirely; retain the PDF while any
published links to it are still needed.

The homepage and announcement routes render at request time so cached HTML
cannot extend an expiration. The homepage hydrates with the server's Chicago
date, then tracks the Chicago date in the browser at minute boundaries and
on tab return, so an open page also drops expired notices without a reload.
Featured notices reuse the announcement card and PDF resource link components.
Run `node --test tests/announcements.test.mjs` with Node 22.18+ to check the
inclusive Chicago date boundary and daylight saving handling.

Meeting schedules are currently data-driven and need to be updated when a new
year's schedule is published.

### Documents & Records

The `/documents` page lists budgets and financial reports, ordinances, and
resolutions, and links to the existing meeting minutes, meeting schedule, and
Township Clerk pages. There is currently no separate agenda page.

To publish a record:

1. Add the original PDF under `public/documents/`, using a descriptive filename.
2. Add one entry to `documents` in `data/documents.ts` with a unique `id`, the
   exact official `title`, applicable ordinance or resolution `number`, and
   `filePath` beginning with `/documents/` (without `public/`). Keep the path
   unencoded; the page encodes it when generating links.
3. Set `fiscalYear` to the ending year when applicable (FY2027 ends March 31,
   2027). Assign one or more `categories`: `budgets-financial-reports`,
   `ordinances`, or `resolutions`. Multiple categories reuse the same record
   and file. Entries display in registry order within each category.
4. Include `publishedAt` as `YYYY-MM-DD` only when the publication date is
   confirmed. Do not substitute the adoption date.
5. Run `node --test tests/*.test.mjs`, lint, type-check, and build. Preview the
   page and verify both View PDF and Download PDF before merging.

The three supplied FY2027 PDFs are registered with their original filenames
and titles. The Road District PDF's heading is `ORDINANCE NO. 2026-002`, although
its filename uses `26-002`; the registry follows the heading. Confirm this
discrepancy with the township. Also confirm that the supplied PDFs are the final
copies intended for public posting: they contain unfilled roll-call fields,
and the Cemetery District clerk's certificate retains `26-____`. Do not edit
official PDFs to resolve these details; replace them only with township-supplied
corrections. Publication dates have not been supplied and are omitted.

## Deployment

The site is deployed through Vercel/Git integration.

The canonical site URL comes from `siteConfig.url` in `config/site.ts` and must
be set to the official production domain before public launch. The sitemap and
robots metadata also use this URL.
