import { EXPERIENCE } from "../../data/experience";

export default function Timeline() {
    return (
        <ol className="relative border-l border-zinc-800">
        {EXPERIENCE.map((e) => (
            <li key={e.company + e.role} className="mb-8 ml-4">
            <div className="absolute -left-1.5 mt-1.5 w-3 h-3 bg-zinc-200 rounded-full border border-zinc-800" />
            <h3 className="text-lg font-semibold">
                {e.role} · {e.company}
            </h3>
            <p className="text-xs text-zinc-500">{e.start} — {e.end}</p>
            <ul className="mt-2 ml-6 list-disc text-zinc-300">
                {e.bullets.map((b) => <li key={b}>{b}</li>)}
            </ul>
            </li>
        ))}
        </ol>
    );
}
