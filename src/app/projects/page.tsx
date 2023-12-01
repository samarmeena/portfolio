import styles from "@/styles/ProjectsPage.module.css";

import { GetProjects } from "./api";
import ProjectCard from "./project-card";

const ProjectsPage: React.FC = async () => {
  const projects = await GetProjects();

  return (
    <>
      <h3>{"Stuff I've Built So Far"}</h3>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};

export default ProjectsPage;
