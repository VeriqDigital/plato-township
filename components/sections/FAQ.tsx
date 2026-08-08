import Link from "next/link";
import { resources } from "@/data/faq";

const FAQ = () => {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
      <div>
        <p className="eyebrow">Community links</p>
        <h2 className="section-title mt-4">Helpful resident resources</h2>
        <p className="mt-6 max-w-md text-sm leading-7 text-(--ink-muted)">
          A clear starting point for common services beyond the township office.
          External destinations can be connected during the next content phase.
        </p>
      </div>

      <div className="grid sm:grid-cols-2">
        {resources.map((item, index) => (
          <Link
            key={item.question}
            href="#contact"
            className={`group min-h-64 border-(--line) p-7 transition hover:bg-white ${
              index % 2 ? "sm:border-l" : ""
            } ${index > 1 ? "border-t" : ""} ${index === 1 ? "border-t sm:border-t-0" : ""}`}
          >
            <span className="text-xs font-bold text-(--red)">0{index + 1}</span>
            <h3 className="mt-10 font-heading text-2xl font-medium uppercase text-(--navy)">
              {item.question}
            </h3>
            <p className="mt-4 text-sm leading-6 text-(--ink-muted)">{item.answer}</p>
            <span className="mt-7 block text-xl text-(--navy) transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
