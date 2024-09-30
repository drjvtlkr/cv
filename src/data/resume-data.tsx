import {
  OrbitLogo,
  DJLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Dheeraj Vithalkar",
  initials: "drjvtlkr",
  location: "Hubli, India, IST",
  locationLink: "https://www.google.com/maps/place/Hubballi",
  about:
    "Detail-oriented Full Stack Engineer dedicated to building high-quality products.",
    summary:
    "As a Full Stack Engineer, I specialize in taking products from concept to launch. Currently, I work mostly with TypeScript, React and Node.js using the Next.js Framework. I also work with GoLang, Rust and Solana, trying to make a difference in the decentralized world",
  avatarUrl: "https://avatars.githubusercontent.com/drjvtlkr",
  personalWebsiteUrl: "https://drjvtlkr.dev",
  contact: {
    email: "dheerajrvithalkar@gmail.com",
    tel: "+916362593889",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/drjvtlkr",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dheerajvithalkar/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/drjvtlkr",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SDM College of Engineering and Technology",
      degree: "Bachelor's of Engineering in Computer Science",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Orbit Technologys",
      link: "https://orbittechnologys.com",
      badges: ["Remote","Hybrid"],
      title: "Frontend Engineer -> Fullstack Engineer",
      logo: OrbitLogo,
      start: "Aug 2023",
      end: null,
      description:
        "Creating Web applications serving over thousands of users. Technologies: React, JavaScript, Node.js, Next.js, Tailwind",
    },
    {
      company: "Freelance",
      link: "https://alkaline-admin.vercel.app",
      badges: ["Remote"],
      title: "Lead Fullstack Engineer",
      logo: DJLogo,
      start: "June 2024",
      end: null,
      description:
        "Lead a team of Fullstack engineer and Mobile Application Developers. Technologies: React, TypeScript, Node.js, Next.js, Shadcn.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js/Express.js",
    "MongoDB",
    "NoSQL",
    "Docker",
    "Prisma ORM",
    "PostgreSQL",
    "SQL",
    "GoLang",
    "Rust",
    "Solana",
    "Supabase",
    "Vercel",
    "Hosting",
    "CI/CD"
  ],
  projects: [
    {
      title: "Gongadi Alkaline Waters Admin App",
      techStack: [
        "TypeScript",
        "Vite",
        "React",
        "JavaScript",
      ],
      description:
        "Web based admin Application to track and dispatch Orders",
      logo: DJLogo,
      link: {
        label: "github.com",
        href: "https://alkaline-admin.vercel.app/",
      },
    },
    {
      title: "Alkaline Waters Backend",
      techStack: [
        "Lead Fullstack Engineer",
        "JavaScript",
        "TypeScript",
        "Node.js",
        "Express.js",
        "MongoDB",
      ],
      description:
        "A simple yet powerfull system architecture that shelters a efficient backend, handling upto 1000 concurrent users.",
      logo: DJLogo,
      link: {
        label: "github.com",
        href: "https://alkaline-backend-final.vercel.app/health",
      },
    },
    {
      title: "LiveDocs",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "Clerk",
        "Sentry",
        "LiveBlocks"
      ],
      description: "A real-time collaborative docs based on LiveBlocks for collaboration, Sentry for monitoring and Clerk for Auth",
      logo: DJLogo,
      link: {
        label: "github.com",
        href: "https://github.com/drjvtlkr/nextdocs",
      },
    },
    {
      title: "Edmentor",
      techStack: ["JavaScript", "React", "Tailwind", ],
      description:
        "Online Teaching and Learning platfrom that can support over thousand users",
      logo: DJLogo,
      link: {
        label: "theedmentor.dev",
        href: "https://theedmentor.com/",
      },
    },
    {
      title: "CV",
      techStack: ["Personal Project", "Next.js", "TypeScript"],
      description:
        "Personal website and blog. Built with Next.js",
      logo: DJLogo,
      link: {
        label: "github.com",
        href: "https://drjvtlkr-cv.vercel.app/",
      },
    },
    {
      title: "Solana",
      techStack: ["Side Project", "Next.js", "Rust", "Solana"],
      description:
        "Initial Solana Setup for learning and exploring Rust and Solana",
      logo: DJLogo,
      link: {
        label: "github.com",
        href: "https://github.com/drjvtlkr/solana-firstInstallation",
      },
    },
    {
      title: "Browser based todo application",
      techStack: ["Side Project", "Next.js", "Supabase", "TypeScript"],
      description:
        "Learnt and implemented Supabase using PostgreSQL for DataBase",
      logo: DJLogo,
      link: {
        label: "github.com",
        href: "https://todo-drjvtlkr.vercel.app/",
      },
    },
    {
      title:"Next-Auth",
      techStack:["Side Project", "Next.js", "TypeScript", "Shadcn", "Zod"],
      description:"Implemented next-auth using Auth.js v-5 with the cookie strategy, without using any DataBase",
      logo:DJLogo,
      link:{
        label:"Production",
        href:"https://next-auth-using-cookies.vercel.app/"
      }
    }
  ],
} as const;
