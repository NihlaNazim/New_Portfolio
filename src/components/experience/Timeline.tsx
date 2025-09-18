import { motion } from "framer-motion";
import { EXPERIENCE } from "../../data/experience";
import { Calendar } from "lucide-react";

export default function Timeline() {
    return (
        <div className="relative">
        <div className="absolute top-0 bottom-0 w-px left-8 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent"></div>
        
        {EXPERIENCE.map((exp, index) => (
            <motion.div
            key={`${exp.company}-${exp.role}`}
            className="relative pb-12 pl-20 last:pb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            >
            <div className="absolute w-4 h-4 border-4 border-black rounded-full left-6 bg-gradient-to-r from-blue-500 to-purple-500"></div>
            
            <div className="p-6 transition-all border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:border-purple-500/50">
                <div className="flex items-start justify-between mb-3">
                <div>
                    <h3 className="mb-1 text-xl font-bold text-white">
                    {exp.role}
                    </h3>
                    <div className="flex items-center gap-2">
                    {exp.link ? (
                        <a
                        href={exp.link}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold text-blue-400 transition-colors hover:text-blue-300"
                        >
                        {exp.company}
                        </a>
                    ) : (
                        <span className="font-semibold text-blue-400">{exp.company}</span>
                    )}
                    </div>
                </div>
                <div className="flex items-center text-sm text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    {exp.start} — {exp.end}
                </div>
                </div>

                <ul className="space-y-2 text-gray-300">
                {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 mr-3 bg-purple-400 rounded-full"></span>
                    {bullet}
                    </li>
                ))}
                </ul>
            </div>
            </motion.div>
        ))}
        </div>
    );
}
