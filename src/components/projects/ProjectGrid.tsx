import { PROJECTS } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
    const highlights = PROJECTS.filter(p => p.highlight);
    const others = PROJECTS.filter(p => !p.highlight);
    const orderedProjects = [...highlights, ...others];

    return (
        <div className="grid gap-8 md:grid-cols-2">
        {orderedProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
        ))}
        </div>
    );
}