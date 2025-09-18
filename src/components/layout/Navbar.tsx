import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // you also forgot to import these

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        >
        <nav className="container px-6 py-4 mx-auto">
            <div className="flex items-center justify-between">
            <motion.a
                href="#home"
                className="text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text"
                whileHover={{ scale: 1.05 }}
            >
                Portfolio
            </motion.a>

            {/* Desktop Navigation */}
            <div className="items-center hidden space-x-8 md:flex">
                {navItems.map((item) => (
                <motion.a
                    key={item.href}
                    href={item.href}
                    className="relative text-gray-300 transition-colors hover:text-white group"
                    whileHover={{ y: -2 }}
                >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all group-hover:w-full"></span>
                </motion.a>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="text-white md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
            <motion.div
                className="mt-4 space-y-4 md:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
            >
                {navItems.map((item) => (
                <a
                    key={item.href}
                    href={item.href}
                    className="block py-2 text-gray-300 transition-colors hover:text-white"
                    onClick={() => setIsOpen(false)}
                >
                    {item.label}
                </a>
                ))}
            </motion.div>
            )}
        </nav>
        </motion.header>
    );
}
