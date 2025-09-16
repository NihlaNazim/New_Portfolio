import Hero from "../components/home/Hero";
import ProjectGrid from "../components/projects/ProjectGrid";
import Timeline from "../components/experience/Timeline";
import Skills from "../components/skills/Skills";
import ContactForm from "../components/contact/ContactForm";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function App() {
    return (
        <>
        <Navbar />
        <main className="container px-4 mx-auto">
            <section id="home" className="py-20"><Hero /></section>
            <section id="projects" className="py-20"><ProjectGrid /></section>
            <section id="experience" className="py-20"><Timeline /></section>
            <section id="skills" className="py-20"><Skills /></section>
            <section id="contact" className="py-20"><ContactForm /></section>
        </main>
        <Footer />
        </>
    );
}
