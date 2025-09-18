import { motion } from "framer-motion";
import Hero from "./components/home/Hero";
import Navbar from "./components/layout/Navbar";
import ProjectGrid from "./components/projects/ProjectGrid";
import Timeline from "./components/experience/Timeline";
import Skills from "./components/skills/Skills";
import ContactForm from "./components/contact/ContactForm";
import Footer from "./components/layout/Footer";

export default function App() {
    return (
      <div className="min-h-screen text-white bg-black">
        <Navbar />
        
        <main>
          <section id="home">
            <Hero />
          </section>

          <section id="projects" className="py-20 bg-gray-950/50">
            <div className="container px-6 mx-auto">
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text">
                  Featured Projects
                </h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-400">
                  A showcase of my recent work in full-stack development, IoT systems, and modern web applications.
                </p>
              </motion.div>
              <ProjectGrid />
            </div>
          </section>

          <section id="experience" className="py-20">
            <div className="container px-6 mx-auto">
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text">
                  Experience
                </h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-400">
                  My professional journey in software engineering and technology innovation.
                </p>
              </motion.div>
              <Timeline />
            </div>
          </section>

          <section id="skills" className="py-20 bg-gray-950/50">
            <div className="container px-6 mx-auto">
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text">
                  Skills & Technologies
                </h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-400">
                  The tools and technologies I use to bring ideas to life.
                </p>
              </motion.div>
              <Skills />
            </div>
          </section>

          <section id="contact" className="py-20">
            <div className="container px-6 mx-auto">
              <motion.div
                className="mb-16 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-4xl font-bold text-transparent md:text-5xl bg-gradient-to-r from-white to-gray-400 bg-clip-text">
                  Get In Touch
                </h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-400">
                  Ready to start your next project? Let's create something amazing together.
                </p>
              </motion.div>
              <ContactForm />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
}