import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { CERTIFICATIONS } from "../../data/certification";

function formatDate(d: string) {
  // accepts "YYYY" or "YYYY-MM"
    if (!d) return "";
    if (/^\d{4}$/.test(d)) return d;
    const [y, m] = d.split("-");
    const month = [
        "Jan","Feb","Mar","Apr","May","Jun",
        "Jul","Aug","Sep","Oct","Nov","Dec"
    ][Number(m) - 1];
    return `${month} ${y}`;
    }

    export default function Certifications() {
    return (
        <div className="grid gap-8 md:grid-cols-2">
        {CERTIFICATIONS.map((c, i) => (
            <motion.article
            key={`${c.issuer}-${c.name}-${c.date}`}
            className="overflow-hidden transition-all card hover:border-purple-500/50"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            viewport={{ once: true }}
            >
            {/* Header */}
            <div className="flex items-start justify-between p-6 pb-4">
                <div className="min-w-0">
                <div className="flex items-center gap-2 mb-1">
                    <Award className="text-purple-400" size={18} />
                    <h3 className="text-lg font-semibold truncate">
                    {c.name}
                    </h3>
                </div>
                <p className="text-sm font-medium text-blue-400 truncate">
                    {c.issuer}
                </p>
                </div>

                <span className="px-2 py-1 text-xs border rounded-full border-zinc-700 text-zinc-300 bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                {formatDate(c.date)}
                </span>
            </div>

            {/* Body */}
            <div className="px-6 pb-6">
                {c.credentialId && (
                <p className="mb-3 text-sm text-zinc-400">
                    <span className="text-zinc-500">Credential ID:</span>{" "}
                    <span className="text-zinc-300">{c.credentialId}</span>
                </p>
                )}

                {c.skills?.length ? (
                <div className="flex flex-wrap gap-2 mb-4">
                    {c.skills.map((s) => (
                    <span
                        key={s}
                        className="px-2 py-1 text-xs border rounded-full border-zinc-700 text-zinc-300"
                    >
                        {s}
                    </span>
                    ))}
                </div>
                ) : null}

                <div className="flex items-center gap-4">
                {c.link && (
                    <a
                    href={c.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300"
                    >
                    <ExternalLink size={16} />
                    Verify
                    </a>
                )}
                </div>
            </div>
            </motion.article>
        ))}
        </div>
    );
}
