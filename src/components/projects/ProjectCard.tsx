import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type Project = {
    image?: string;
    title: string;
    year?: string | number;
    blurb: string;
    features?: string[];
    tech: string[];
    demo?: string;
    repo?: string;
    highlight?: boolean;
};

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.article
        className="overflow-hidden transition-all duration-300 border border-gray-800 group bg-gray-900/50 backdrop-blur-sm rounded-2xl hover:border-purple-500/50"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -8 }}
        >
        <div className="relative overflow-hidden">
            {project.image && (
            <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-105"
            />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            {project.highlight && (
            <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600">
                Featured
                </span>
            </div>
            )}
        </div>

        <div className="p-6">
            <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white">{project.title}</h3>
            {project.year && (
                <span className="text-sm text-gray-400">{project.year}</span>
            )}
            </div>

            <p className="mb-4 leading-relaxed text-gray-300">{project.blurb}</p>

            {project.features && (
            <div className="mb-4">
                <p className="mb-2 text-sm font-semibold text-gray-400">Key Features:</p>
                <ul className="text-sm text-gray-300">
                {project.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center mb-1">
                    <span className="w-1 h-1 mr-2 bg-purple-400 rounded-full"></span>
                    {feature}
                    </li>
                ))}
                </ul>
            </div>
            )}

            <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
                <span
                key={tech}
                className="px-3 py-1 text-xs font-medium text-blue-300 border rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
                >
                {tech}
                </span>
            ))}
            </div>

            <div className="flex items-center gap-4">
            {project.demo && (
                <motion.a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-blue-400 transition-colors hover:text-blue-300"
                whileHover={{ x: 5 }}
                >
                <ExternalLink size={16} />
                Live Demo
                </motion.a>
            )}
            {project.repo && (
                <motion.a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
                whileHover={{ x: 5 }}
                >
                <Github size={16} />
                Code
                </motion.a>
            )}
            </div>
        </div>
        </motion.article>
    );
}