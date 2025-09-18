import { motion, useScroll, useTransform } from "framer-motion";
import {SITE} from "../../data/site";
import { ArrowRight, ChevronDown, Eye, Github, Linkedin, MapPin } from "lucide-react";

export default function Hero() {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

    return (
        <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-black"></div>
        <motion.div 
            className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.03\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"1\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")] opacity-40'
            style={{ y }}
        />

        <div className="container relative z-10 px-6 mx-auto text-center">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            <motion.h1 
                className="mb-6 text-5xl font-bold leading-tight text-transparent md:text-7xl lg:text-8xl bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
            >
                {SITE.name}
            </motion.h1>

            <motion.div
                className="max-w-3xl mx-auto mb-8 text-xl text-gray-300 md:text-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
            >
                <span className="font-semibold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                {SITE.role}
                </span>
                <br />
                Building reliable data systems and crafting beautiful, performant user interfaces
            </motion.div>

            <motion.div
                className="flex items-center justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
            >
                <div className="flex items-center text-gray-400">
                <MapPin size={16} className="mr-2" />
                {SITE.location}
                </div>
            </motion.div>

            <motion.div
                className="flex flex-col items-center justify-center gap-4 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <motion.a
                href="#projects"
                className="flex items-center gap-2 px-8 py-4 font-semibold text-white transition-all rounded-full group bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                >
                <Eye size={18} />
                View My Work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </motion.a>

                <motion.a
                href="#contact"
                className="px-8 py-4 font-semibold text-gray-300 transition-all border border-gray-600 rounded-full hover:text-white hover:border-gray-400"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                >
                Get In Touch
                </motion.a>
            </motion.div>

            <motion.div
                className="flex items-center justify-center gap-6 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <motion.a
                href={SITE.socials.github}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="GitHub"
                >
                <Github size={24} />
                </motion.a>
                <motion.a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 transition-colors hover:text-white"
                whileHover={{ scale: 1.2, y: -2 }}
                aria-label="LinkedIn"
                >
                <Linkedin size={24} />
                </motion.a>
            </motion.div>
            </motion.div>

            <motion.div
            className="absolute transform -translate-x-1/2 bottom-8 left-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            >
            <ChevronDown size={32} className="text-gray-400" />
            </motion.div>
        </div>
        </section>
    );
}