import { motion } from "framer-motion";
import { Star, User } from "lucide-react";
import {CERTIFICATIONS} from "../../data/certification";

export default function About() {
    return (
        <section id="about" className="py-20 bg-gray-950/50">
        <div className="container px-6 mx-auto">
            <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            >
            <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text">
                About Me
            </h2>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-2">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                    <User className="text-purple-400" size={32} />
                    <h3 className="text-2xl font-bold text-white">My Story</h3>
                </div>
                <div className="space-y-4 text-gray-300">
                    <p>
                    I'm a passionate software engineer with a strong background in full-stack development and IoT systems. 
                    My journey in technology began during my computer science studies, where I developed a deep appreciation 
                    for clean code and innovative solutions.
                    </p>
                    <p>
                    Currently working at Blue Brand SRL, I specialize in building scalable data pipelines and modern web 
                    applications. I'm particularly interested in the intersection of IoT, data analytics, and user experience design.
                    </p>
                    <p>
                    When I'm not coding, you can find me contributing to open-source projects, exploring new technologies, 
                    or mentoring aspiring developers in my community.
                    </p>
                </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <div className="p-8 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                    <Star className="text-blue-400" size={32} />
                    <h3 className="text-2xl font-bold text-white">Achievements</h3>
                </div>
                <div className="space-y-6">
                    {CERTIFICATIONS.map((achievement, index) => (
                    <motion.div
                        key={achievement.name}
                        className="pb-6 border-b border-gray-700 last:border-b-0 last:pb-0"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-white">{achievement.name}</h4>
                        <span className="text-sm text-gray-400">{achievement.date}</span>
                        </div>
                        <p className="mb-2 text-sm text-blue-400">{achievement.issuer}</p>
                        <p className="text-sm text-gray-300">{achievement.credentialId}</p>
                    </motion.div>
                    ))}
                </div>
                </div>
            </motion.div>
            </div>
        </div>
        </section>
    );
}