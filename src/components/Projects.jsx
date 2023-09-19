import ProjectItem from "./ProjectItem";
import { projectDetails } from "./projectDetails";

const Projects = () => {
  return (
    <section id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#292929] mb-4">
        My Projects
      </h1>
      <p className="my-2 text-base font-normal text-stone-600 mb-4">
        This is a list of some of my projects. They were developed using
        different technologies, like vanilla JavaScript,{" "}
        <a href="https://react.dev/" target="_blank" className="underline">
          React
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          target="_blank"
          className="underline"
        >
          Tailwind CSS
        </a>{" "}
        and{" "}
        <a
          href="https://react-bootstrap.github.io/"
          target="_blank"
          className="underline"
        >
          Bootstrap
        </a>
        , and deployed with{" "}
        <a href="https://vercel.com/" target="_blank" className="underline">
          Vercel
        </a>
        .
      </p>
      <div className="grid sm:grid-cols-2 gap-12 justify-items-center">
        {projectDetails.map((elem) => {
          return (
            <ProjectItem
              title={elem.title}
              key={elem.id}
              image={elem.image}
              url={elem.url}
              tech={elem.tech}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
