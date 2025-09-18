import { motion } from "framer-motion";
import { SITE } from "../../data/site";
import { Github, Linkedin, Mail, ArrowUp, Heart, Download } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: "#about", label: "About" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#education", label: "Education" },
        { href: "#certifications", label: "Certifications" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
        <div className="container px-6 py-12 mx-auto">
            {/* Main Footer Content */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand & Description */}
            <div className="lg:col-span-2">
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <h3 className="mb-4 text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                    {SITE.name}
                </h3>
                <p className="max-w-md mb-4 text-gray-300">
                    {SITE.role} based in {SITE.location}. Passionate about building scalable 
                    applications and innovative IoT solutions that make a difference.
                </p>
                <div className="flex items-center gap-4">
                    <motion.a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-2 px-4 py-2 text-white transition-all border border-purple-500 rounded-lg hover:bg-purple-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <Mail size={16} />
                    Email Me
                    </motion.a>
                    <motion.a
                    href="/resume.pdf" // Add your resume path
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 text-gray-300 transition-all border border-gray-600 rounded-lg hover:text-white hover:border-gray-400"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    >
                    <Download size={16} />
                    Resume
                    </motion.a>
                </div>
                </motion.div>
            </div>

            {/* Quick Links */}
            <div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                >
                <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
                <nav className="space-y-2">
                    {quickLinks.map((link) => (
                    <motion.a
                        key={link.href}
                        href={link.href}
                        className="block text-gray-400 transition-colors hover:text-white hover:translate-x-1"
                        whileHover={{ x: 4 }}
                    >
                        {link.label}
                    </motion.a>
                    ))}
                </nav>
                </motion.div>
            </div>

            {/* Connect & Social */}
            <div>
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                >
                <h4 className="mb-4 text-lg font-semibold text-white">Connect</h4>
                <div className="space-y-3">
                    <motion.a
                    href={SITE.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white group"
                    whileHover={{ x: 4 }}
                    >
                    <Github size={20} className="group-hover:text-white" />
                    <span>GitHub</span>
                    </motion.a>
                    <motion.a
                    href={SITE.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white group"
                    whileHover={{ x: 4 }}
                    >
                    <Linkedin size={20} className="group-hover:text-blue-400" />
                    <span>LinkedIn</span>
                    </motion.a>
                    <motion.a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-gray-400 transition-colors hover:text-white group"
                    whileHover={{ x: 4 }}
                    >
                    <Mail size={20} className="group-hover:text-purple-400" />
                    <span>Email</span>
                    </motion.a>
                </div>
                </motion.div>
            </div>
            </div>

            {/* Divider */}
            <div className="my-8 border-t border-gray-800"></div>

            {/* Bottom Footer */}
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <motion.div
                className="flex items-center text-gray-400"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <span>© {currentYear} {SITE.name}. Made with</span>
                <Heart size={16} className="mx-2 text-red-400" />
                <span>and lots of coffee ☕</span>
            </motion.div>

            <div className="flex items-center gap-4">
                {/* Back to Top Button */}
                <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 px-3 py-2 text-gray-400 transition-all rounded-lg hover:text-white hover:bg-gray-800"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                >
                <ArrowUp size={16} />
                <span className="text-sm">Back to top</span>
                </motion.button>

                {/* Social Icons */}
                <div className="flex items-center gap-3">
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
                    className="text-gray-400 transition-colors hover:text-blue-400"
                    whileHover={{ scale: 1.2, y: -2 }}
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </motion.a>
                </div>
            </div>
            </div>

            {/* Optional: Status Indicator */}
            <motion.div
            className="flex items-center justify-center mt-6 text-sm text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            >
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for new opportunities</span>
            </div>
            </motion.div>
        </div>
        </footer>
    );
}