export const config = {
    developer: {
        // Your first name used for short display on the landing page
        name: "Rosheed",
        // Your full name used in footer, contact section, etc.
        fullName: "Rosheed   Fagbenro",
        // Your professional title shown under your name
        title: "App Developer & LegalTech Specialist",
        // Short description for meta tags and intro
        description: "Mobile & Web App Developer and Legal Technology Specialist based in Ibadan, Nigeria. Currently building Academic Companion — a cross-platform exam prep app for Nigerian students."
    },
    social: {
        // GitHub username (used to construct profile link elsewhere)
        github: "rosheed124",
        // Primary contact email
        email: "rosheediyiola2004@gmail.com",
        // City and country displayed in the contact section
        location: "Ibadan, Nigeria"
    },
    about: {
        // Section heading for the About panel
        title: "About Me",
        // Short bio shown in the About section
        description: "I Am Building Academic Companion — A Cross-Platform Exam Prep App For Nigerian Students — While Pursuing An LL.B. At The University of Ibadan. I Bridge The Gap Between Legal/Educational Domains And Technology.",
        // Longer bio (available for expanded view if the template uses it)
        fullBio: "I am a Mobile & Web App Developer and Legal Technology Specialist with a strong foundation in HTML, CSS, Bootstrap, and JavaScript, currently advancing in React Native and Flutter. I engineered a Python automation system that generated and securely dispatched 8,000+ tamper-proof PDFs to thousands of student inboxes. As a Law student at the University of Ibadan, I bring legal and educational depth to tech. I also serve as Assistant Director of Studies for the Akinyele Area Council and Lead Editor at IslamicHistory673 on YouTube. I am extremely curious — I rarely stop at 'how', I go all the way to 'why'."
    },
    experiences: [
        {
            // Most recent role: building your flagship app
            position: "Creator & Lead Developer",
            company: "Academic Companion (In Production)",
            period: "Present",
            location: "Remote",
            description: "Building a cross-platform mobile and web application (React Native / Flutter) to help Nigerian students prepare for UTME, Post-UTME, and SSCE examinations. Features include timed mock exams, subject-specific practice, performance analytics, and a dynamic question bank built from real curriculum experience."
        },
        {
            // Python automation role at MSSN
            position: "Systems Automation & Protocol Strategist",
            company: "MSSN, University of Ibadan Branch",
            period: "Nov 2025 – Nov 2026",
            location: "Ibadan, Nigeria",
            description: "Engineered a Python automation system using Pandas and DocxTpl that generated 8,000+ tamper-proof PDFs and dispatched them to thousands of inboxes via a scalable SMTP pipeline. Architected a high-fidelity Intake & Data Guardrail System using Regex to ensure 100% data integrity for a 2,000+ user database."
        },
        {
            // Leadership role combining Director of Studies and Conference Chair
            position: "Assistant Director of Studies & Conference Chair",
            company: "Akinyele Area Council",
            period: "Jan 2024 – Dec 2025",
            location: "Ibadan, Nigeria",
            description: "Led academic innovation across multiple institutions, implementing data-driven performance reviews that boosted student engagement by 40%+. Organized an annual educational conference with 1,000+ attendees, securing 15+ expert speakers and improving planning efficiency by 30%."
        },
        {
            // Content creation role on YouTube
            position: "Lead Editor & Content Creator",
            company: "IslamicHistory673 (YouTube)",
            period: "Jan 2024 – Dec 2025",
            location: "Remote",
            description: "Produced and edited 20+ historical documentaries using CapCut and Premiere Pro, growing channel viewership by 40% through the HPC (Hook–Progression–Climax) narrative structure. Maintained a 98% viewer retention rate through historical accuracy and stylistic consistency."
        }
    ],
    projects: [
        {
            // Flagship project — EdTech mobile app
            id: 1,
            title: "Academic Companion App",
            category: "EdTech Mobile App",
            technologies: "React Native, Flutter, Cross-Platform",
            image: "/images/project-1.webp"
        },
        {
            // Python automation system for mass PDF generation
            id: 2,
            title: "Document Generation & Dispatch Engine",
            category: "Automation System",
            technologies: "Python, Pandas, SMTP, DocxTpl",
            image: "/images/project-2.webp"
        },
        {
            // YouTube documentary channel
            id: 3,
            title: "IslamicHistory673 — Documentary Channel",
            category: "Content Creation",
            technologies: "CapCut, Premiere Pro, HPC Narrative Model",
            image: "/images/project-3.webp"
        },
        {
            // Data integrity guardrail system
            id: 4,
            title: "High-fidelity Intake & Guardrail System",
            category: "Data Integrity",
            technologies: "Regex, Data Hierarchies, Python",
            image: "/images/project-4.webp"
        }
    ],
    contact: {
        // All contact/social links used in the footer and social icon strip
        email: "rosheediyiola2004@gmail.com",
        github: "https://github.com/rosheed124",
        linkedin: "https://www.linkedin.com/in/rosheed123",
        instagram: "https://www.instagram.com/@inspirationalislstories",
        youtube: "https://youtube.com/@islamichistory673",
        tiktok: "https://www.tiktok.com/@inspirationalislstories",
        facebook: "https://www.facebook.com/share/1EJcxnNa4v/"
    },
    skills: {
        develop: {
            // First skills card — mobile and web technologies
            title: "MOBILE & WEB",
            description: "Cross-platform app development and responsive web design",
            details: "Building Academic Companion and modern digital experiences using React Native, Flutter, and strong web fundamentals.",
            tools: ["React Native", "Flutter", "HTML5", "CSS3", "Bootstrap", "JavaScript", "C"]
        },
        design: {
            // Second skills card — automation and data tooling
            title: "AUTOMATION & DATA",
            description: "Python automation and data integrity systems",
            details: "Engineering pipelines to process data, generate tamper-proof documents, and automate bulk email dispatch at scale.",
            tools: ["Python", "Pandas", "Regex", "SMTP", "DocxTpl", "CapCut", "Premiere Pro"]
        }
    }
};
