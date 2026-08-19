import type { ReactNode } from "react";
import Link from "next/link";
import {
  departments,
  type DepartmentProfile,
  type DepartmentSlug,
} from "@/data/departments";

type DepartmentPageProps = {
  department: DepartmentProfile;
  children: ReactNode;
  contactNote?: string;
};

export function DepartmentPage({
  department,
  children,
  contactNote,
}: DepartmentPageProps) {
  return (
    <main>
      <DepartmentHero department={department} />
      <section className="bg-white py-12 sm:py-16">
        <div className="mx-auto grid max-w-(--container-width) gap-10 px-6 lg:grid-cols-[minmax(16rem,0.38fr)_minmax(0,1fr)] lg:gap-14">
          <DepartmentContactPanel
            department={department}
            note={contactNote}
          />
          <div className="min-w-0">{children}</div>
        </div>
      </section>
      <DepartmentNavigation current={department.slug} />
    </main>
  );
}

function DepartmentHero({ department }: { department: DepartmentProfile }) {
  return (
    <header className="bg-(--navy) py-14 text-white sm:py-20">
      <div className="mx-auto max-w-(--container-width) px-6">
        <Link
          href="/departments"
          className="mb-6 inline-flex min-h-11 items-center text-sm font-semibold text-white/68 transition hover:text-white"
        >
          <span aria-hidden="true" className="mr-2">
            ←
          </span>
          Township Departments
        </Link>
        <h1 className="max-w-4xl font-heading text-5xl font-medium uppercase leading-[0.96] sm:text-7xl">
          {department.title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
          {department.intro}
        </p>
      </div>
    </header>
  );
}

function DepartmentContactPanel({
  department,
  note,
}: {
  department: DepartmentProfile;
  note?: string;
}) {
  return (
    <aside className="h-fit border border-(--line) bg-(--mist) p-6 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-(--red-dark)">
        Contact
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-(--navy)">
        {department.contactHeading}
      </h2>
      <dl className="mt-6 border-t border-(--line)">
        {department.contacts.map((contact) => (
          <div key={contact.label} className="border-b border-(--line) py-4">
            <dt className="text-sm font-semibold text-(--navy)">
              {contact.label}
            </dt>
            <dd className="mt-1 min-w-0">
              <a
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noreferrer" : undefined}
                className="block min-h-7 break-words text-base leading-7 text-(--ink-muted) underline decoration-(--line) underline-offset-4 transition hover:text-(--red)"
              >
                {contact.value}
                {contact.external && (
                  <span className="sr-only"> (opens in a new tab)</span>
                )}
              </a>
            </dd>
          </div>
        ))}
      </dl>
      {note && (
        <p className="mt-5 text-sm leading-6 text-(--ink-muted)">{note}</p>
      )}
    </aside>
  );
}

export function DepartmentSection({
  id,
  title,
  intro,
  children,
  className = "",
}: {
  id: string;
  title: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section aria-labelledby={id} className={className}>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-(--navy)"
      >
        {title}
      </h2>
      <div className="mt-5 border-t border-(--line) pt-5">
        {intro && (
          <p className="max-w-3xl text-base leading-8 text-(--ink-muted)">
            {intro}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}

export function DepartmentNeeds({
  items,
}: {
  items: Array<{ title: string; description: string }>;
}) {
  return (
    <div className="mt-6 grid border-t border-(--line) sm:grid-cols-2">
      {items.map((item, index) => (
        <article
          key={item.title}
          className={`border-b border-(--line) py-5 sm:px-5 ${
            index % 2 === 0 ? "sm:border-r" : ""
          }`}
        >
          <h3 className="text-lg font-semibold text-(--navy)">{item.title}</h3>
          <p className="mt-2 text-sm leading-6 text-(--ink-muted)">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}

export function DepartmentLinks({
  links,
}: {
  links: Array<{
    title: string;
    description: string;
    href: string;
    external?: boolean;
  }>;
}) {
  return (
    <div className="mt-6 border-t border-(--line)">
      {links.map((link) => {
        const content = (
          <>
            <span className="min-w-0">
              <span className="block text-lg font-semibold text-(--navy)">
                {link.title}
              </span>
              <span className="mt-1 block text-sm leading-6 text-(--ink-muted)">
                {link.description}
              </span>
            </span>
            <span aria-hidden="true" className="shrink-0 text-(--red)">
              →
            </span>
          </>
        );

        const className =
          "flex min-h-16 items-center justify-between gap-6 border-b border-(--line) py-4 transition hover:bg-(--mist) sm:px-5";

        return link.external ? (
          <a
            key={link.title}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={className}
          >
            {content}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : (
          <Link key={link.title} href={link.href} className={className}>
            {content}
          </Link>
        );
      })}
    </div>
  );
}

export function DepartmentAvailability({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 border-l-4 border-(--red) bg-(--mist) p-5 sm:p-6">
      <h3 className="text-lg font-semibold text-(--navy)">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-(--ink-muted)">{children}</p>
    </div>
  );
}

function DepartmentNavigation({ current }: { current: DepartmentSlug }) {
  return (
    <nav aria-label="Township departments" className="bg-(--mist) py-12">
      <div className="mx-auto max-w-(--container-width) px-6">
        <div className="flex flex-col gap-3 border-b border-(--line) pb-5 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="text-2xl font-semibold text-(--navy)">
            Other Township Departments
          </h2>
          <Link
            href="/departments"
            className="inline-flex min-h-11 w-fit items-center text-sm font-semibold text-(--red-dark) underline decoration-(--red)/35 underline-offset-4"
          >
            View the full directory
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {departments
            .filter((department) => department.slug !== current)
            .map((department) => (
              <Link
                key={department.slug}
                href={department.href}
                className="flex min-h-14 items-center justify-between gap-4 border-b border-(--line) py-3 text-sm font-semibold text-(--navy) transition hover:bg-white sm:px-4"
              >
                {department.shortTitle}
                <span aria-hidden="true" className="text-(--red)">
                  →
                </span>
              </Link>
            ))}
        </div>
      </div>
    </nav>
  );
}
