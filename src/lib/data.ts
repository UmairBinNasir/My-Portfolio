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
      "A fully responsive ecommerce website built with Next.js, Tailwind CSS, Sanity.io, and Stripe. The platform offers a seamless shopping experience, with fast page loads and a clean, modern design. Sanity.io powers flexible content management, while Stripe ensures secure and efficient payment processing. Whether browsing on desktop or mobile, users will enjoy an intuitive, smooth experience across all devices.",
    tags: ["React", "Next.js", "Sanity io", "Tailwind", "Stripe"],
    imageUrl: "/project-1.png",
    link: "https://ecommerce-assignment-project-gkdw-2afmv79z1.vercel.app/",
  },
  {
    title: "Medical Store",
    description:
      "This responsive medical store website is built with Next.js, Tailwind CSS, and enhanced with interactive 3D animations for a unique and engaging user experience. The clean, intuitive UI ensures easy navigation across all devices.",
    tags: ["Next.js", "UI", "3D Animations"],
    imageUrl: "/project-2.png",
    link: "https://medical-store-project.vercel.app/",
  },
  {
    title: "Restaurant",
    description:
      "This responsive restaurant website, built with Next.js and Tailwind CSS, features a sleek, modern UI designed for effortless navigation across all devices. With interactive 3D animations, it brings the menu and dining experience to life, engaging visitors with dynamic visuals.",
    tags: ["React", "Next.js", "3D Animations"],
    imageUrl: "/project-3.png",
    link: "https://my-restaurant-tau.vercel.app/",
  },
  {
    title: "Tic Tac Toe",
    description:
      "The game logic is implemented with TypeScript for a smooth and bug-free experience, while Tailwind CSS ensures a clean and modern UI.",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
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