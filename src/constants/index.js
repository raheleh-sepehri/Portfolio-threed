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
  starbucks,
  tesla,
  meta,
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
    title: "React.js Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Javascript Developer",
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Faramehrgostar  ",
    icon: meta,
    iconBg: "#383E56",
    date: "05.2019-05.2020",
    points: [
      "Designed and developed custom WordPress websites.",
      "Installed and configured plugins and themes.",
      '	Optimized websites for search engines (SEO).',
      '	Troubleshot and fixed website issues.',
      'Performed code maintenance and bug fixes to ensure website stability and functionality.',
      '›	Designed and developed reusable UI components using HTML, CSS, and potentially JavaScript libraries like Bootstrap'
    ],
  },
  {
    title: "Poshesh",
    company_name: "Faramehrgostar",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "05.2020-12.2021",
    points: [
  '	Designed and developed reusable UI components using HTML, CSS, and potentially JavaScript libraries like Bootstrap',
  '	Implemented responsive layouts to ensure website functionality and optimal viewing experience across various devices (desktops, tablets, mobiles).',
  '	Integrated UI elements with back-end APIs to display and interact with data.',
  '	Created interactive elements like forms, buttons, and animations to enhance user experience ',
  '	Worked closely with designers to translate design mockups into functional web pages.',
  '	Performed code maintenance and bug fixes to ensure website stability and functionality.'
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Entekhab Investment Development Group, Isfahan, Iran",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "2023-Now",
    points: [
      "	Spearheaded the development and maintenance of cutting-edge, responsive web applications utilizing React, Redux, and Next.js, ensuring optimal user experience and performance.",
      "	Leveraged SWR to efficiently handle data fetching and posting operations, enhancing website responsiveness and overall user-friendliness.",
      "	Led the implementation of advanced UI/UX features to enhance user engagement and improve overall usability.",
      "	Collaborated closely with cross-functional teams including designers and backend developers to ensure seamless integration and delivery of high-quality software solutions.",
      "	Led the refactoring of codebase, resulting in improved code structure and maintainability, which ultimately contributed to enhanced scalability and development efficiency.",
      '	Implemented separate user and customer panels, enhancing user experience and facilitating targeted interactions.',
      '	Utilized Git for version control and collaborated with the team on code reviews and bug fixes.'
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Raheleh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Raheleh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Raheleh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/raheleh-sepehri/rent-car",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/raheleh-sepehri",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/raheleh-sepehri",
  },
];

export { services, technologies, experiences, testimonials, projects };
