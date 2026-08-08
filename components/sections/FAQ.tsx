import { resources } from "@/data/faq";

const FAQ = () => {
  return (
    <div className="grid gap-9 lg:grid-cols-[0.72fr_1.28fr]">
      <div>
        <h2 className="section-title">Community Resources</h2>
        <p className="mt-5 max-w-md text-base leading-7 text-(--ink-muted)">
          A clear starting point for common services beyond the township office.
          External destinations can be connected during the next content phase.
        </p>
      </div>

      <div className="grid sm:grid-cols-2">
        {resources.map((item, index) => (
          <article
            key={item.question}
            className={`border-(--line) p-6 ${
              index % 2 ? "sm:border-l" : ""
            } ${index > 1 ? "border-t" : ""} ${index === 1 ? "border-t sm:border-t-0" : ""}`}
          >
            <h3 className="text-xl font-semibold text-(--navy)">
              {item.question}
            </h3>
            <p className="mt-3 text-base leading-7 text-(--ink-muted)">{item.answer}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
