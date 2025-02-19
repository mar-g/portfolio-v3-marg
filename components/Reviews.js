import Heading from "./Heading";
import SectionWrapper from "./SectionWrapper";
import data from "@/data/reviews";

export default function Reviews() {
  return (
    <SectionWrapper>
      <Heading>Testimonials</Heading>
      <h1 className="text-3xl md:text-5xl font-bold capitalize mt-5">
        what{" "}
        <strong className="text-violet-600 dark:text-zinc-400">
          people say
        </strong>
      </h1>
      <p className="text-lg font-medium w-full lg:w-6/12 mb-10 mt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        ducimus eum quia non veritatis soluta.
      </p>
    </SectionWrapper>
  );
}
