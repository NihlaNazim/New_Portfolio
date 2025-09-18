import { motion } from "framer-motion";
import { Calendar, GraduationCap, BookOpen, Award } from "lucide-react";
import { EDUCATION } from "../../data/education";

export default function Education() {
    return (
        <section id="education" className="py-20 bg-gray-950/50">
        <div className="container px-6 mx-auto">
            <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text">
                Education
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-400">
                My academic journey and educational background in computer science and technology.
            </p>
            </motion.div>

            <div className="relative">
            <div className="absolute top-0 bottom-0 w-px left-8 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

            {EDUCATION.map((edu, index) => (
                <motion.div
                key={`${edu.institution}-${edu.degree}`}
                className="relative pb-12 pl-20 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                >
                {/* timeline dot */}
                <div className="absolute w-4 h-4 border-4 border-black rounded-full left-6 bg-gradient-to-r from-blue-500 to-purple-500" />

                <div className="p-6 transition-all border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:border-purple-500/50">
                    <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                        <h3 className="flex items-center gap-2 text-xl font-bold text-white">
                        <GraduationCap className="text-purple-400" size={22} />
                        {edu.degree}
                        </h3>
                        <p className="font-semibold text-blue-400">{edu.institution}</p>
                    </div>
                    <div className="flex items-center text-sm text-gray-400 whitespace-nowrap">
                        <Calendar size={16} className="mr-2" />
                        {edu.start} — {edu.end}
                    </div>
                    </div>

                    {edu.achievements?.length ? (
                    <div className="mb-4">
                        <p className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-400">
                        <Award size={16} className="text-blue-400" />
                        Achievements
                        </p>
                        <ul className="space-y-1 text-sm text-gray-300">
                        {edu.achievements.map((a) => (
                            <li key={a} className="flex items-start">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-2 mt-1.5" />
                            {a}
                            </li>
                        ))}
                        </ul>
                    </div>
                    ) : null}

                    {edu.coursework?.length ? (
                    <div className="mb-1">
                        <p className="flex items-center gap-2 mb-2 text-sm font-semibold text-gray-400">
                        <BookOpen size={16} className="text-blue-400" />
                        Relevant Coursework
                        </p>
                        <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((c) => (
                            <span key={c} className="px-2 py-0.5 text-xs rounded-full border border-zinc-700 text-zinc-300">
                            {c}
                            </span>
                        ))}
                        </div>
                    </div>
                    ) : null}

                    {edu.subjects?.length || edu.results ? (
                    <div className="mt-4 text-sm text-gray-300">
                        {edu.subjects?.length ? (
                        <p>
                            <span className="text-gray-400">Subjects:</span>{" "}
                            {edu.subjects.join(", ")}
                        </p>
                        ) : null}
                        {edu.results ? (
                        <p>
                            <span className="text-gray-400">Results:</span>{" "}
                            {edu.results}
                        </p>
                        ) : null}
                    </div>
                    ) : null}
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    );
}
