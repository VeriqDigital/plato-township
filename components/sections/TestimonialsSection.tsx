import Link from "next/link";
import { announcements } from "@/data/testimonials";

const TestimonialsSection = () => {
  return (
    <div>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="eyebrow">Township postings</p>
          <h2 className="section-title mt-4">Latest announcements</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-(--ink-muted)">
          Sample content for this visual demo. A future phase can connect these
          cards to official township postings and documents.
        </p>
      </div>

      <div className="mt-12 grid border-y border-(--line) lg:grid-cols-3">
        {announcements.map((announcement, index) => (
          <article
            key={announcement.title}
            className={`group flex min-h-80 flex-col py-8 lg:px-8 ${
              index ? "border-t border-(--line) lg:border-l lg:border-t-0" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-(--red)">
                {announcement.category}
              </p>
              <span className="border border-(--line) px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-(--ink-muted)">
                Demo
              </span>
            </div>
            <h3 className="mt-12 max-w-xs font-heading text-3xl font-medium uppercase leading-tight text-(--navy)">
              {announcement.title}
            </h3>
            <p className="mt-4 text-sm leading-6 text-(--ink-muted)">
              {announcement.description}
            </p>
            <Link
              href="#meetings"
              className="mt-auto flex items-center justify-between border-t border-(--line) pt-5 text-xs font-bold uppercase tracking-[0.15em] text-(--navy)"
            >
              Read sample notice
              <span className="text-lg text-(--red) transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
