import ProjectItem from "./ProjectItem";
import { projectDetails } from "./projectDetails";

const Projects = () => {
  return (
    <section id="projects" className="max-w-[950px] m-auto md:pl-20 p-4 pt-16">
      <h1 className="text-4xl font-bold text-center text-[#292929] mb-16">
        My Projects
      </h1>

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
