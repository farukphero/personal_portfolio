import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Web Designer",
    icon: web,
  },
  {
    title: "React js Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Digital Marketer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
   
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Web Defend It",
    iconBg: "#383E56",
    date: "March 2023 - April June",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
   
   
  {
    title: "Backend Developer",
    company_name: "SoftyPy",
    iconBg: "#578a92",
    date: "September 2023 - Present",
    points: [
      "Developing and maintaining website implementation using Node.js, Express js, Mongodb and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "Twitch Clone",
    description:
      "Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more.Here users can make live video, live chat, follow, block and manage. ",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Livekit",
        color: "white-text-gradient",
      },
      {
        name: "Clerk",
        color: "pink-text-gradient",
      },
      {
        name: "Prisma",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Ngrok",
        color: "red-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dfunuoqfv/image/upload/v1704636116/Screenshot_86_pyu4xh.png",
    source_code_link: "https://github.com/farukphero/video-hub",
    live_link:"https://video-hub-two-mu.vercel.app/"
  },
  {
    name: "House rent",
    description:
      "The application allows users to search for houses, mess rooms, hotels, offices, and shops based on their location and view what is available. User can direct chat with owner.",
    tags: [
      {
        name: "Next js",
        color: "blue-text-gradient",
      },
      {
        name: "Redux Toolkit",
        color: "green-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
      {
        name: "Socket io",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node js",
        color: "white-text-gradient",
      },
      {
        name: "Mongodb",
        color: "white-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dfunuoqfv/image/upload/v1704636616/Screenshot_88_t3tib7.png",
    source_code_link: "https://github.com/farukphero/quickvara-client",
    live_link:"https://quickvara.com/"
  },
  {
    name: "Fitness Tracker",
    description:
      "In this website users can set activities on basis of weight goals and see their activities on a chart according to daily, weekly, monthly, and yearly basis. They can also set their food and water limits.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "white-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Node js",
        color: "white-text-gradient",
      },
      
      {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: "https://res.cloudinary.com/dfunuoqfv/image/upload/v1704636406/Screenshot_14_lscwef.png",
    source_code_link: "https://github.com/farukphero/fitness-tracking-web-client",
    live_link:"https://fitlessian.web.app/"
  },
];

export { services, technologies, experiences, testimonials, projects };
