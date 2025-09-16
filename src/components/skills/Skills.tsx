import { SKILLS } from "../../data/skills";

export default function Skills() {
    return (
        <section className="grid gap-6 md:grid-cols-3">
        {Object.entries(SKILLS).map(([group, items]) => (
            <div key={group} className="p-4 border rounded-2xl border-zinc-800">
            <h3 className="mb-2 font-semibold capitalize">{group}</h3>
            <div className="flex flex-wrap gap-2 text-zinc-300">
                {items.map((s) => (
                <span key={s} className="border border-zinc-700 px-2 py-0.5 rounded-full text-sm">{s}</span>
                ))}
            </div>
            </div>
        ))}
        </section>
    );
}
