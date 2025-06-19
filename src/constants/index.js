import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import logo1 from "../assets/LOGO_EN_3.png";
import logo2 from "../assets/logolat.png";



export const HERO_CONTENT = `Full Stack Developer proficient in a diverse tech ecosystem, including React, Node.js, PHP (Laravel), and Git. Strong experience in implementing microservices architectures and RESTful APIs, with a focus on code quality and performance optimization. Familiar with Agile methodologies (Scrum) to ensure efficient team collaboration and timely project deliveries.`;

export const ABOUT_TEXT = `I am a dedicated and versatile Full Stack Developer developer with a strong passion for crafting user-friendly and visually appealing web interfaces. My expertise lies in working with HTML, CSS, and JavaScript frameworks like React.js and Next.js to build responsive and dynamic web applications. I also have experience integrating server-side functionality using PHP. My journey in web development began with a fascination for design and user experience, which has evolved into a career where I continuously strive to learn and adapt to new front-end technologies and best practices. I thrive in collaborative environments and enjoy bringing creative solutions to life through code. Outside of coding, I stay active by exploring new technologies and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    title_project: "Conference 2025 website",
    role: "Full Stack Developer",
    company: "Flow Studio.",
    description: `Development and design of a multilingual website using WordPress, PHP and MySQL for the African Group of Judges Conference. This project included the integration of a MySQL database to enable dynamic and personalized content management. The platform was deployed and hosted on CapConnecte to ensure optimum performance and accessibility. In addition, key functionalities were implemented, such as program management, registration and the distribution of logistical information to participants.`,
    technologies: [ "WordPress", "PHP", "MySQL","Javascript"],
    image:logo1,
    link: "https://rgamorocco25.com/",
  },
  {
    year: "2024 - Present",
    title_project: "Cyber Skills Lab website development",
    role: "Front end Developer",
    company: "Flow Studio.",
    description: `Designed and developed the official website for Cyber Skills Lab using HTML, CSS, and PHP. The project involved integrating interactive exercises and immersive labs to offer practical training in cybersecurity. The platform was deployed and hosted on CapConnecte, ensuring both reliable performance and scalability.`,
    technologies: ["HTML", "CSS", "PHP"],
    image:logo2,
    link: "https://cyberskillslab.com/",
  },

];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Employer Leave Management System for Hospitals ",
    image: project2,
    description:
      "A comprehensive web application designed to manage employee leave processes within hospitals. The system features employee self-service portals, multi-level approval workflows, real-time notifications, and detailed leave tracking and reporting..",
    technologies: ["HTML", "CSS", "Express", "Mysql","React"],
  },

  {
    title: "Hotel Reservation System",
    image: project4,
    description:
      "A platform for booking hotel rooms, featuring room availability, booking management, and user profiles.",
    technologies: ["HTML", "Laravel", "mySQL"],
  },


];

export const CONTACT = {
  address: "Casablanca, Morocco",
  phoneNo: "+212 762599440 ",
  email: "lahcenidbendriss@gmail.com",
};
