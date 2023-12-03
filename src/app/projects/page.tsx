import { GetProjects } from "./api";
import ProjectCard from "./project-card";

const ProjectsPage: React.FC = async () => {
  const projects = await GetProjects();

  return (
    <>
      <h3>{"Stuff I've Built So Far"}</h3>
      <div className="grid my-6 gap-6 grid-cols-[repeat(4,minmax(240px,1fr))]">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
