import { SITE } from "../../data/site";

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-zinc-800">
        <div className="container px-4 py-6 mx-auto text-sm text-zinc-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
        </footer>
    );
}
