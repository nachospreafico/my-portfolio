import WorkItem from "./WorkItem";
import { workDetails } from "./workDetails";

const Work = () => {
  return (
    <section id="work" className="max-w-[1040px] md:pl-20 m-auto p-4 pt-16">
      <h1 className="text-4xl font-bold text-center text-[#292929] mb-4">
        Work Experience
      </h1>
      <ol className="flex flex-col relative border-l border-stone-200">
        {workDetails.map((elem, index) => {
          return (
            <WorkItem
              from={elem.from}
              toDate={elem.toDate}
              company={elem.company}
              location={elem.location}
              role={elem.role}
              tasks={elem.tasks}
              skills={elem.skills}
              key={index}
            />
          );
        })}
      </ol>
    </section>
  );
};

export default Work;
