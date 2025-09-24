export type Experience = {
    company: string;
    role: string;
    start: string; // "2023-05"
    end: string;   // "Present" or "2024-11"
    bullets: string[];
    link?: string | string[];
};

export const EXPERIENCE: Experience[] = [
    {
        company: "Blue Brand SRL",
        role: "Software Engineer",
        start: "2025-07",
        end: "Present",
        bullets: [
        "Built modern BMS data pipeline (Python, MQTT, TimescaleDB) with Docker.",
        "Implemented CI/CD and container orchestration for Yocto-based devices.",
        ],
        link: "https://bluebrand.org"
    },
    {
        company: "Freelance",
        role: "Web Developer, Content Creator, Video Editor, website designer",
        start: "2025-06",
        end: "Present",
        bullets: [
        "Developed and maintained websites for local businesses using HTML, CSS, JavaScript, and WordPress.",
        "Created engaging video content for social media platforms using Capcut, Canva.",
        "Did some wireframing and designing for websites using Figma.",
        "Collaborated with clients to understand their requirements and deliver customized solutions.(like logo designing, banner designing, video editing, etc.)"
        ],
        link: "https://www.linkedin.com/in/nihla-nazim?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BMF%2FVWXyHSXOS9j2Zth%2FhQw%3D%3D"
    }
];
