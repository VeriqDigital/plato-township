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
npm run build
```

## Content Maintenance

- Township/global contact info and navigation: `config/site.ts`
- Announcements: `data/announcements.ts`
- Board meeting schedule: `data/board-meetings.ts`
- Board minutes metadata: `data/board-minutes.ts`
- Board minute PDF files: `public/board-meeting-minutes/`
- Department information: `data/departments.ts`
- Election resources: `data/elections.ts`
- Community resources: `data/community-resources.ts`
- Public images/documents: `public/`

Announcement records marked `demo: true` are placeholder/demo content and must
not be treated as official notices.

Meeting schedules are currently data-driven and need to be updated when a new
year's schedule is published.

## Deployment

The site is deployed through Vercel/Git integration.

The canonical site URL comes from `siteConfig.url` in `config/site.ts` and must
be set to the official production domain before public launch. The sitemap and
robots metadata also use this URL.
