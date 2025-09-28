
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  python,
  csharp,
  firebase,
  appwrite,
  linux,
  android,
  arduino,
  reactnative,
  dotnet,
  tensorflow,
  pytorch,
  opencv,
  typescript,
  docker,
} from '../assets'


// Import company logo
import nexus from "../assets/company/nexus.png";


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
    title: "Aspiring AI Engineer",
    icon: web,
  },
  {
    title: "Fullstack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Student",
    icon: creator,
  },
];

const technologies = [
  // Web Technologies
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
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
  
  // Frontend Frameworks
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "React Native",
  //   icon: reactnative,
  // },
  
  // Backend & Databases
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "Express JS",
  //   icon: express,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  
  // Programming Languages
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: csharp,
  },
  
  // Cloud & Services
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Appwrite",
    icon: appwrite,
  },
  
  // Tools & Platforms
  {
    name: "Git",
    icon: git,
  },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Android",
    icon: android,
  },
  {
    name: "Arduino",
    icon: arduino,
  },
  
  // Frameworks & Libraries
  {
    name: ".NET",
    icon: dotnet,
  },
  
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
 
  
  // AI/ML & Data Science
  {
    name: "TensorFlow",
    icon: tensorflow,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "Pandas",
    icon: python, // Using Python icon for Pandas since it's closely related
  },
  

];

const experiences = [
  {
    title: "Full-Stack Developer , Backend Developer",
    company_name: "Nexus",
    icon: nexus,
    iconBg: "#383E56",
    date: "Jan 2024 - Present", // e.g., "Jan 2023 - present"
    points: [
      "Designed various discord bots and built Websites and Mobile app and many more projects",
      "Python,JavaScript,React,Firebase,TypeScript,Git and Various other technologies",
      "Automated tasks and improved efficiency using custom scripts and tools ",
      "Collaborated with cross-functional teams to define, design, and ship new features",
    ],
  },
  // Add more experiences if you have them
];

const testimonials = [
  {
    testimonial:
      "Kshitish’s backend and integration work were key to making TravelWise functional under hackathon time pressure.",
    name: "Vivekanand Sinku",
    designation: "Frontend Developer + Backend Developer",
     company: "SIH 2025",
    image: firstTestimonial, // Replace with their photo
  },
  {
    testimonial:
      "Kshitish’s work on the backend and dashboard was crucial in turning an idea into a working prototype.",
    name: "Sambit Kumar Pattanaik",
    designation: "UI/UX Designer",
    company: "SIH 2025",
    image: secondTestimonial,
  },
  {
    testimonial:
      "An impressive project demonstrating problem-solving skills and innovative thinking.",
    // name: "Third Reference",
    designation: "Judge at Techfest 2025",
    // company: "Their Company",
    image: thirdTestimonial,
  },
  // If you don't have testimonials yet, you can remove this section or add placeholder text
];

const projects = [
  {
    name: "Borrowbase",
    description:
      "BorrowBase is A community-based resource-sharing platform designed to simplify access and collaboration.",
    tags: [
      {
        name: "HTML AND CSS", // e.g., "react", "python", "nextjs"
        color: "blue-text-gradient",
      },
      {
        name: "FIREBASE",
        color: "green-text-gradient",
      },
      {
        name: "JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: project2, // Replace with your project screenshot
    source_code_link: "https://github.com/yourusername/your-repo",
  },
  {
    name: "TRAVELWISE",
    description:
      "TravelWise – An intelligent travel survey app built to capture trip-related data for efficient transportation planning.",
    tags: [
      {
        name: "REACTNATIVE EXPO",
        color: "blue-text-gradient",
      },
      {
        name: "FIREBASE",
        color: "green-text-gradient",
      },
      {
        name: "TSX JAVASCRIPT",
        color: "pink-text-gradient",
      },
    ],
    image: gearXpert, // Replace with your project screenshot
    source_code_link: "https://github.com/yourusername/your-repo2",
  },
  // {
  //   name: "Your Project 3 Name",
  //   description:
  //     "Describe your third project. What makes it unique? What technologies were involved? What did you learn from building it?",
  //   tags: [
  //     {
  //       name: "framework1",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "framework2",
  //       color: "white-text-gradient",
  //     },
  //     {
  //       name: "database",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: project3, // Replace with your project screenshot
  //   source_code_link: "https://github.com/yourusername/your-repo3",
  // },
];

export { services, technologies, experiences, testimonials, projects };
