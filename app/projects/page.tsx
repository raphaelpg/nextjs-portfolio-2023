import ItemsContainer from "../components/ItemsContainer"
import ProjectItem from "./ProjectItem"
import { projectsData } from "./projects"

export default function Projects() {
  return (
    <ItemsContainer title="Projects:">
      {projectsData.map((project) => (
        <ProjectItem
          key={project.id}
          img={project.img}
          title={project.title}
          description={project.description}
          url={project.url}
          repo={project.repo}
          stack={project.stack}
        />
      ))  
      }
    </ItemsContainer>
  )
}