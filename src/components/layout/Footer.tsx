import { motion } from "framer-motion";
import { SITE } from "../../data/site";
import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container px-6 py-8 mx-auto">
            <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="mb-4 text-gray-400 md:mb-0">
                © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
                <motion.a
                href={SITE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="GitHub"
                >
                <Github size={20} />
                </motion.a>
                <motion.a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="LinkedIn"
                >
                <Linkedin size={20} />
                </motion.a>
            </div>
            </div>
        </div>
        </footer>
    );
}