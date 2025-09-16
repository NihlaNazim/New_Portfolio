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
    title: "DevLinkUp",
    blurb: "Full-stack app (FastAPI + React) with auth, project uploads, and public articles.",
    tech: ["FastAPI", "React", "Postgres", "Docker", "CI/CD"],
    year: "2025",
    demo: "https://demo.example.com",
    repo: "https://github.com/you/devlinkup",
    highlight: true
  },
  // add 4–8 solid entries max
];
