import { Link, ProjectInfo } from "./types";

export const links: Link[] = [
  {
    nameEng: "Home",
    hash: "#home",
  },
  {
    nameEng: "About",
    hash: "#about",
  },
  {
     nameEng: "Projects",
     hash: "#projects",
   },
  {
    nameEng: "Skills",
    hash: "#skills",
  },
  {
    nameEng: "Contact",
    hash: "#contact",
  },
];

export const projectsData: ProjectInfo[] = [
  {
    title: "Ecommerce Website",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "Sanity io", "Tailwind", "Stripe"],
    imageUrl: "/project-1.png",
    link: "https://ecommerce-assignment-project-gkdw-2afmv79z1.vercel.app/",
  },
  {
    title: "Medical Store",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "UI", "Tailwind", "3D Animations"],
    imageUrl: "/project-2.png",
    link: "https://medical-store-project.vercel.app/",
  },
  {
    title: "Restaurant",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/project-3.png",
    link: "https://my-restaurant-tau.vercel.app/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "NodeJS"],
    imageUrl: "/project-4.png",
    link: "https://tic-tac-toe-liard-pi-91.vercel.app/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Sanity io",
  "Git",
  "Tailwind",
  "Stripe",
  "UI Integration",
  "Framer Motion",
];