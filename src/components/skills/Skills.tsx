import { motion } from "framer-motion";
import { SKILLS } from "../../data/skills";

export default function Skills() {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Object.entries(SKILLS).map(([category, skills], index) => (
            <motion.div
            key={category}
            className="p-6 transition-all border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl hover:border-purple-500/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            >
            <h3 className="mb-4 text-lg font-bold text-transparent text-white capitalize bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                {category}
            </h3>
            <div className="space-y-2">
                {skills.map((skill, i) => (
                <motion.span
                    key={skill}
                    className="inline-block bg-gray-800/50 text-gray-300 px-3 py-1.5 rounded-lg text-sm mr-2 mb-2 border border-gray-700 hover:border-purple-500/50 transition-all"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (i * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                >
                    {skill}
                </motion.span>
                ))}
            </div>
            </motion.div>
        ))}
        </div>
    );
}