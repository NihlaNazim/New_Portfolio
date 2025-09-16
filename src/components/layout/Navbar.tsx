export default function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b backdrop-blur border-zinc-800 bg-black/40">
        <nav className="container flex items-center justify-between px-4 py-3 mx-auto">
            <a href="#home" className="font-semibold">Portfolio</a>
            <div className="flex gap-5 text-sm">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            </div>
        </nav>
        </header>
    );
}
