export type Project = {
  title: string;
  blurb: string;
  tech: string[];
  year?: string;
  image?: string;       // /public/images/...
  repo?: string;
  demo?: string;
  highlight?: boolean;  // to pin at top
};

export const PROJECTS: Project[] = [
  {
    title: "LunaRest",
    blurb: "Full-stack app (FastAPI + React) with auth, project uploads, and public articles.",
    tech: ["FastAPI", "React", "MySQL", "Git", "Tailwind CSS"],
    year: "2024",
    demo: "https://demo.example.com",
    repo: "https://github.com/rusirasandul/LunaRest-.git",
    highlight: true
  },
  {
    title: "GreenBite wireframe",
    blurb: "Wireframe for a food delivery app using Figma",
    tech: ["Figma"],
    year: "2025",
    demo: "https://www.figma.com/proto/sl4WCzkOgOxJ9b7BihpU62/wireframe--GreenBite?node-id=0-1&t=LzXBdTzbV2TJrGz3-1",
    repo: "https://www.figma.com/design/sl4WCzkOgOxJ9b7BihpU62/wireframe--GreenBite?node-id=0-1&m=dev&t=LzXBdTzbV2TJrGz3-1",
    highlight: true
  },
];
