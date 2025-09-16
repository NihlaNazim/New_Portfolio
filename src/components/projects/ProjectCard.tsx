import type { Project } from "../../data/projects";
import { Github } from "lucide-react";

export default function ProjectCard({ p }: { p: Project }) {
    return (
        <article className="p-4 transition border group rounded-2xl border-zinc-800 hover:border-zinc-600">
        {p.image && (
            <img
            src={p.image}
            alt={p.title}
            className="object-cover w-full h-48 mb-3 rounded-xl"
            loading="lazy"
            width={800}
            height={480}
            />
        )}
        <h3 className="text-xl font-semibold">{p.title}</h3>
        <p className="mt-1 text-zinc-400">{p.blurb}</p>

        <ul className="flex flex-wrap gap-2 mt-2 text-xs text-zinc-400">
            {p.tech.map((t) => (
            <li key={t} className="rounded-full border border-zinc-800 px-2 py-0.5">{t}</li>
            ))}
        </ul>

        <div className="flex gap-3 mt-3">
            {p.demo && (
            <a className="underline" href={p.demo} target="_blank" rel="noreferrer">Live</a>
            )}
            {p.repo && (
            <a className="inline-flex items-center gap-1 underline" href={p.repo} target="_blank" rel="noreferrer">
                <Github size={14} /> Code
            </a>
            )}
        </div>
        </article>
    );
}
