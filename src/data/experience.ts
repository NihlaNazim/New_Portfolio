export type Experience = {
    company: string;
    role: string;
    start: string; // "2023-05"
    end: string;   // "Present" or "2024-11"
    bullets: string[];
    link?: string;
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
];
