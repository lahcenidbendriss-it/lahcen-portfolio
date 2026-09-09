// ============================================================
// PORTFOLIO CONTENT — Source of truth for all displayed data
// Updated: September 2026 from CV
// ============================================================

// ---- Profile ----
export const PROFILE = {
  name: "Lahcen Idbendriss",
  title: "IT Operations Engineer",
  subtitle: "& Full Stack Developer",
  location: "Casablanca, Morocco",
};

export const HERO_CONTENT = `IT Operations Engineer with hands-on experience in IT production, application monitoring, and incident management in the banking sector. Proficient in Linux, SQL, Oracle, and job scheduling. Also experienced as a Full Stack Developer with React.js, Laravel, PHP, and REST APIs. Detail-oriented, autonomous, and driven by problem-solving.`;

export const ABOUT_TEXT = `I'm an IT Operations Engineer currently working at CIH Bank, where I oversee production environments, monitor application processing, and resolve incidents in a fast-paced banking context. My background in Full Stack Development — with expertise in React.js, Laravel, and relational databases — gives me a unique blend of operational and engineering skills. I thrive in environments where precision and reliability matter, and I'm passionate about building robust systems that run smoothly behind the scenes.`;

// ---- Experience ----
export const EXPERIENCES = [
  {
    year: "Jun 2026 — Present",
    role: "IT Operations Engineer",
    roleFr: "Pilote d'exploitation SI",
    company: "CIH Bank",
    location: "Casablanca",
    category: "IT Operations",
    description: [
      "Analyze, diagnose, and resolve production incidents following established procedures and operational guidelines.",
      "Operate on Linux environments and leverage SQL/Oracle for incident analysis and data processing.",
      "Monitor daily batch processing and identify anomalies and production issues proactively.",
    ],
    technologies: ["Linux", "Oracle", "SQL", "Incident Management", "Scheduling"],
    isCurrent: true,
  },
  {
    year: "Oct 2025 — Jun 2026",
    role: "Full Stack Developer",
    company: "Investm Consulting",
    location: "Casablanca",
    category: "Full Stack",
    description: [
      "Designed and developed responsive, scalable web applications using React.js, Laravel, JavaScript ES6+, and HTML/CSS.",
      "Developed and integrated REST APIs for seamless front-end and back-end communication.",
      "Administered and optimized relational MySQL databases for high-performance applications.",
    ],
    technologies: ["React.js", "Laravel", "JavaScript", "MySQL", "REST APIs"],
  },
  {
    year: "Sep 2024 — Dec 2024",
    role: "Web Developer Intern",
    company: "Flow Studio",
    location: "Casablanca",
    category: "Full Stack",
    description: [
      "Developed responsive web applications for institutional cybersecurity projects using HTML, CSS, PHP, MySQL, and WordPress.",
      "Created interactive features including an admin dashboard for content management.",
    ],
    technologies: ["PHP", "MySQL", "WordPress", "HTML", "CSS"],
  },
  {
    year: "Feb 2024 — May 2024",
    role: "End-of-Studies Intern",
    company: "DMS",
    location: "Laayoune",
    category: "Full Stack",
    description: [
      "Designed and developed a complete web application with ReactJS (front-end), Express (back-end), and MySQL (database).",
      "Built interactive features and admin dashboards for internal business use.",
    ],
    technologies: ["React.js", "Express", "MySQL", "Node.js"],
  },
];

// ---- Skills ----
export const SKILLS = [
  {
    category: "IT Operations",
    icon: "operations",
    items: [
      { name: "Incident Management", level: 85 },
      { name: "Production Monitoring", level: 80 },
      { name: "Job Scheduling", level: 75 },
      { name: "Scripting", level: 70 },
    ],
  },
  {
    category: "Systems & Databases",
    icon: "database",
    items: [
      { name: "Linux", level: 80 },
      { name: "Oracle", level: 75 },
      { name: "SQL", level: 85 },
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 65 },
    ],
  },
  {
    category: "Back-end",
    icon: "backend",
    items: [
      { name: "PHP", level: 80 },
      { name: "Laravel", level: 80 },
      { name: "Express.js", level: 70 },
    ],
  },
  {
    category: "Front-end",
    icon: "frontend",
    items: [
      { name: "React.js", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
];

// ---- Projects ----
export const PROJECTS = [
  {
    title: "Allo Taxi Beauvais",
    subtitle: "Taxi Reservation Platform & Native Plugin (France)",
    description:
      "A high-performing taxi reservation web platform built for Beauvais, France. Includes a custom native booking plugin for real-time fare calculation, instant route selection, and automated booking notifications. Achieved the #1 rank on Google SERP for competitive French target keywords.",
    liveUrl: "https://allo-taxi-beauvais.fr/",
    image: "/allo-taxi-beauvais.jpg",
    seoBadge: "#1 Rank on Google",
    type: "Full Stack & SEO",
    category: "wordpress",
    isFeatured: true,
    highlights: [
      "Custom Native Booking Plugin",
      "#1 Google SERP Ranking",
      "Instant Fare Calculation",
      "Technical SEO Optimized",
    ],
    technologies: ["WordPress", "PHP/JS", "Technical SEO", "Google Maps API", "MySQL"],
  },
  {
    title: "ADS Assainissement 33",
    subtitle: "Drain Unblocking & Plumbing Services (Gironde, France)",
    description:
      "Professional website for a Bordeaux-based 24/7 drain unblocking and plumbing company. Delivered full-service digital presence with emergency contact integration, structured data markup, and technical SEO to rank for 'débouchage Bordeaux' and 'assainissement 33'.",
    liveUrl: "https://ads-assainissement33.fr/",
    image: "/ads-assainissement.jpg",
    seoBadge: "Top SEO Rankings",
    type: "Full Stack & SEO",
    category: "wordpress",
    isFeatured: true,
    highlights: [
      "24/7 Emergency Contact",
      "Schema Markup & SEO",
      "Google Top Keywords",
      "High Conversion Design",
    ],
    technologies: ["WordPress", "Technical SEO", "Schema Markup", "PHP", "CSS"],
  },
  {
    title: "Toiture Gironde Pro",
    subtitle: "Roofing & Renovation Services (Gironde, France)",
    description:
      "Complete digital presence for a roofing and renovation service company based in Gironde, France. Designed a modern, trustworthy website showcasing roofing services, renovation work, and emergency interventions — with local SEO strategy to attract qualified leads in the Gironde department.",
    liveUrl: null,
    image: "/toiture-gironde.jpg",
    seoBadge: null,
    type: "WordPress & SEO",
    category: "wordpress",
    isFeatured: true,
    highlights: [
      "Service Showcase Pages",
      "Local Gironde SEO",
      "Emergency Contact Flow",
      "Mobile-First Design",
    ],
    technologies: ["WordPress", "Local SEO", "PHP", "CSS", "Google My Business"],
  },
  {
    title: "CBD E-Commerce France",
    subtitle: "Premium CBD Online Store (France)",
    description:
      "Full-featured WooCommerce e-commerce store built for a French CBD brand. Implemented product catalog management, secure payment gateways, legal compliance pages, and SEO-optimized product pages — driving organic traffic and online sales in the competitive French CBD market.",
    liveUrl: null,
    image: "/cbd-ecommerce.jpg",
    seoBadge: null,
    type: "E-Commerce & SEO",
    category: "ecommerce",
    isFeatured: true,
    highlights: [
      "WooCommerce Integration",
      "Secure Payment Gateway",
      "Legal Compliance Pages",
      "SEO Product Catalog",
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "Payment API", "Technical SEO"],
  },
  {
    title: "RecrutMaroc",
    subtitle: "CV & Job Offer Platform (Morocco)",
    description:
      "A full-stack web application enabling Moroccan job seekers to upload and send their CVs directly to recruiters who post job offers on the platform. Built with React.js on the frontend for a fluid user experience and Laravel REST API on the backend for secure, scalable data management.",
    liveUrl: null,
    image: "/recrut-maroc.jpg",
    seoBadge: null,
    type: "Full Stack App",
    category: "fullstack",
    isFeatured: true,
    highlights: [
      "CV Upload & Management",
      "Recruiter Job Posting",
      "Real-time Notifications",
      "REST API Architecture",
    ],
    technologies: ["React.js", "Laravel", "MySQL", "REST API", "PHP"],
  },
  {
    title: "Portfolio & Dev Projects",
    subtitle: "Personal Showcase & Side Projects",
    description:
      "A collection of personal development projects, experiments, and this portfolio itself — built to demonstrate technical range across frontend, backend, and DevOps. Continuously evolving with new implementations in React, Laravel, Node.js, and modern tooling.",
    liveUrl: "https://github.com/lahcenidbendriss-it",
    image: "/portfolio-dev.jpg",
    seoBadge: null,
    type: "Open Source",
    category: "fullstack",
    isFeatured: true,
    highlights: [
      "React & Laravel Projects",
      "REST API Development",
      "Open Source on GitHub",
      "Continuous Learning",
    ],
    technologies: ["React.js", "Laravel", "Node.js", "MySQL", "Git"],
  },
];

// ---- Education ----
export const EDUCATION = [
  {
    degree: "Specialized Technician Diploma",
    field: "Full Stack Web Development",
    institution: "ISGI — Institut Spécialisé en Gestion et Informatique",
    location: "Laayoune",
    year: "2022 — 2024",
  },
  {
    degree: "Scientific Baccalaureate",
    field: "Life and Earth Sciences (SVT)",
    institution: "Lycée Qualifiant Lamsalla",
    location: "Laayoune",
    year: "2021 — 2022",
  },
];

// ---- Languages ----
export const LANGUAGES = [
  { name: "Arabic", level: "Native" },
  { name: "French", level: "Professional" },
  { name: "English", level: "Professional" },
];

// ---- Contact ----
export const CONTACT = {
  address: "Casablanca, Morocco",
  phone: "+212 762599440",
  email: "lahcenidbendriss@gmail.com",
};

// ---- Social Links ----
export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/lahcen-idbendriss-1376a32b1/",
  github: "https://github.com/lahcenidbendriss-it",
  instagram: "https://www.instagram.com/lahcen_idbendriss/",
};

// ---- Navigation ----
export const NAV_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];
