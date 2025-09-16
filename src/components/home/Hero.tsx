import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { SITE } from "../../data/site";

export default function Hero() {
    return (
        <section className="min-h-[70vh] flex flex-col items-start justify-center gap-6">
        <motion.h1
            className="text-4xl font-bold tracking-tight md:text-6xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
        >
            {SITE.name}
        </motion.h1>

        <p className="max-w-2xl text-lg md:text-xl text-zinc-400">
            {SITE.role}. I build reliable data systems and clean, fast UIs.
        </p>

        <div className="flex items-center gap-3">
            <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 py-2 font-medium text-black bg-white rounded-2xl"
            >
            View Projects <ArrowRight size={16} />
            </a>
            <a href={`mailto:${SITE.email}`} className="px-4 py-2 border rounded-2xl border-zinc-700">
            Contact
            </a>
            <a className="ml-2" aria-label="GitHub" href={SITE.socials.github} target="_blank" rel="noreferrer">
            <Github />
            </a>
            <a aria-label="LinkedIn" href={SITE.socials.linkedin} target="_blank" rel="noreferrer">
            <Linkedin />
            </a>
        </div>
        </section>
    );
}
