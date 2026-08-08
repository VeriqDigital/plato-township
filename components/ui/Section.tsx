import Container from "./Container";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
};

export default Section;
