import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-22 sm:py-28 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
