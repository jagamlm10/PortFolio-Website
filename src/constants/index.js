import project1 from "../assets/projects/MERN-Blog.jpg";
import project2 from "../assets/projects/Spotify-Clone.jpg";
import project3 from "../assets/projects/Gym-Website.jpg";
import project4 from "../assets/projects/Portfolio.jpg"
import project5 from "../assets/projects/AIM-Trainer.jpg";
import project6 from "../assets/projects/CheckYourPrice.jpg";

export const HERO_CONTENT = `I am a Final Year undergraduate student pursuing bachelors in Electronics and Telecommunication Engineering from NIT Raipur. `;

export const ABOUT_TEXT1 = `I am a passionate software developer with a strong focus on problem-solving and full-stack development. My coding journey is showcased through various platforms where I actively participate in competitive programming and contribute to open-source projects.`;

export const ABOUT_TEXT2 = `On GitHub, I have developed notable projects that demonstrate my proficiency in building robust applications and my commitment to continuously enhancing my skills.`

export const ABOUT_TEXT3 = `I actively engage in competitive programming on platforms like LeetCode, GeeksforGeeks, Codeforces, and CodeChef. `;

export const PROJECTS = [
  {
    title: "MERN Stack Blog Application",
    image: project1,
    description:
      "A full stack blog application using React and Expree. MongoDB is used as the database. Implemented user authentication using JSON Web Tokens and Bycrypt.js . Supports image upload.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/jagamlm10/Blog-App-using-MERN",
  },
  {
    title: "BoogieBeats : A Spotify Clone",
    image: project2,
    description:
      "A Spotify Clone made using React, Node.js and Spotify's API. Supports web streaming for all tracks that are available on spotify.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "TailwindCSS",
      "React-Spotify-Web-Playback",
      "Spotify-Web-API-Node",
    ],
    link: "https://github.com/jagamlm10/BoogieBeats-A-Spotify-Clone",
  },
  {
    title: "Gym Freak : A frontend gym website",
    image: project3,
    description: "A mordern React Gym website with a mordern UI.",
    technologies: ["HTML", "CSS", "React"],
    link: "",
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "React", "Framer Motion", "TailwindCSS"],
    link: "https://github.com/jagamlm10/PortFolio-Website",
  },
  {
    title: "Target practice",
    image: project5,
    description: "Created a target clicking game using pygame Library.",
    technologies: ["Python", "Pygame"],
    link: "https://github.com/jagamlm10/AIM-Game",
  },
  {
    title: "CheckYourPrice",
    image: project6,
    description: "Created a Web-Scrapping web application using React and Python that compares the prices of a commodity on Amazon and Flipkart",
    technologies: ["React","Python","Flask","Beautifulsoup4"],
    link: "https://github.com/jagamlm10/CheckYourPrice-",
  },
];

export const CONTACT = {
  address: "Scholars Nest Boyz Hostel, Kota Rd., Raipur",
  phoneNo: "+91-7587100450",
  email: "jagamlm10@gmail.com",
};
