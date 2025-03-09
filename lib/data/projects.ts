import { Project } from './types';

export const projects: Project[] = [
  {
    id: 1,
    title: "UPI QR Code Generator",
    description: "A simple and efficient tool to generate UPI QR codes for payments. Built with Next.js and supports all major UPI payment apps.",
    image: "https://res.cloudinary.com/dctevx0rr/image/upload/v1741496787/siteshkumar.com/blog.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "QR Code API"],
    tags: ["Payment", "Tools", "Web App"],
    demoUrl: "https://siteshkumar.com/upi",
    githubUrl: "https://github.com/TheSiteshKumar/upi-qr-code-generator"
  },
  {
    id: 2,
    title: "Personal Portfolio",
    description: "My personal portfolio website showcasing my projects, skills, and journey. Built with modern web technologies.",
    image: "https://res.cloudinary.com/dctevx0rr/image/upload/v1741496788/siteshkumar.com/job.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    tags: ["Portfolio", "Personal"],
    demoUrl: "https://siteshkumar.com",
    githubUrl: "https://github.com/TheSiteshKumar/portfolio"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard with real-time updates, forecasts, and interactive maps.",
    image: "https://res.cloudinary.com/dctevx0rr/image/upload/v1741497131/siteshkumar.com/invest.png",
    techStack: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    tags: ["Weather", "Dashboard", "API"],
    demoUrl: "https://weather.siteshkumar.com",
    githubUrl: "https://github.com/TheSiteshKumar/weather-dashboard"
  }
];