import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../data/projects";

export default function ProjectGrid() {
    const ordered = [...PROJECTS].sort((a, b) => Number(b.highlight) - Number(a.highlight));
    return (
        <div className="grid gap-5 md:grid-cols-2">
        {ordered.map((p) => (
            <ProjectCard key={p.title} p={p} />
        ))}
        </div>
    );
}
