// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Project Section Logo's
import indomimLogo from './assets/indomim_logo.png';
import nitteLogo from './assets/nitte_logo.png';
import glaLogo from './assets/education_logo/gla_logo.png';
import githubdetLogo from './assets/work_logo/github_det.png';
import webverLogo from './assets/work_logo/web_dig.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import tictactoeLogo from './assets/work_logo/tic_tac_toe.png';

import zidioLogo from './assets/company_logo/zidio_logo.png';
import besantLogo from './assets/education_logo/besant_logo.png';

// Certificates Section Logo's
import zidioInternshipLogo from './assets/certificates/zidio_internship.png';
import zidioTrainingLogo from './assets/certificates/zidio_training.png';
import infosysExcelLogo from './assets/certificates/infosys_excel.jpg';
import stereoClubLogo from './assets/certificates/stereo_club.png';
import incrideaLogo from './assets/certificates/incridea.jpg';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'Gen AI', logo: null },
      { name: 'OpenAI', logo: null },
      { name: 'Groq API', logo: null },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: zidioLogo,
    role: "Development Intern",
    company: "Zidio Development",
    date: "Dates not specified",
    desc: "Worked as a development intern gaining experience in software engineering.",
    skills: [
      "Software Development",
      "Programming"
    ],
  },
  {
    id: 1,
    img: indomimLogo,
    role: "Aerospace Production Engineer",
    company: "Indo-MIM Pvt. Ltd. Doddaballapur, Bengaluru",
    date: "2023 - 2024",
    desc: "Operated and monitored precision CNC machines used for aerospace component manufacturing. Maintained strict quality control and process efficiency.",
    skills: [
      "Aerospace Engineering",
      "CNC Machining",
      "Precision Manufacturing"
    ],
  }
];

export const education = [
  {
    id: 0,
    img: nitteLogo,
    school: "NMAM Institute of Technology, Nitte, Karkala",
    date: "2023 - 2026",
    grade: "6.65 CGPA",
    desc: "Currently pursuing Bachelor of Technology in Computer Science. Expanding my knowledge and practical experience in Generative AI, Machine Learning, NLP, and Full-Stack Development.",
    degree: "Bachelor of Technology in Computer Science",
  },
  {
    id: 1,
    img: glaLogo,
    school: "GTTC Mangalore, Karnataka",
    date: "2020 - 2023",
    grade: "83.5%",
    desc: "Completed Diploma in Precision Manufacturing. Gained a solid understanding of manufacturing processes and technical design.",
    degree: "Diploma in Precision Manufacturing",
  },
  {
    id: 2,
    img: besantLogo,
    school: "Besant Pre-University College, Mangalore",
    date: "Dates not specified",
    grade: "Pass",
    desc: "Completed Pre-University College education.",
    degree: "Pre-University College (PUC)",
  },
  {
    id: 3,
    img: besantLogo,
    school: "Besant National High School, Mangalore",
    date: "Dates not specified",
    grade: "Pass",
    desc: "Completed High School education.",
    degree: "High School",
  }
];

export const projects = [
  {
    id: 0,
    title: "Spam Detection System",
    description:
      "Built a supervised machine learning pipeline to classify messages as spam or non-spam. Performed NLP preprocessing including tokenization, stop-word removal, and feature vectorization. Trained and evaluated a Naive Bayes classifier and deployed the model using Flask to support real-time inference via a web interface.",
    image: githubdetLogo,
    tags: ["Python", "Machine Learning", "NLP", "Flask"],
    github: "https://github.com/ashu-prabh",
    webapp: "https://spam-detector-app-40hr.onrender.com/",
  },
  {
    id: 1,
    title: "AI-Powered Cold Email Generator",
    description:
      "Designed a Generative AI application to produce personalized B2B cold emails from job descriptions. Implemented semantic job-role extraction using LLMs and vector similarity search with ChromaDB. Applied prompt engineering techniques to improve email relevance and developed a Streamlit-based UI enabling real-time generation.",
    image: webverLogo,
    tags: ["Python", "LangChain", "Groq", "ChromaDB", "Streamlit"],
    github: "https://github.com/ashu-prabh/Cold-Email-Generator",
    webapp: "https://github.com/ashu-prabh/Cold-Email-Generator",
  },
  {
    id: 4,
    title: "Movie Recommendation App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 9,
    title: "Image Search App",
    description:
      "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
    image: imagesearchLogo,
    tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
    github: "",
    webapp: "https://imagsearch.netlify.app/",
  },
  {
    id: 10,
    title: "Image Background Remover",
    description:
      "An efficient background removal app built with React.js and API integration. Users can upload any image, remove the background, and download the transparent version for further use.",
    image: removebgLogo,
    tags: ["React JS", "API", "Image Processing", "HTML", "CSS", "Javascript"],
    github: "",
    webapp: "https://removeyourbg.netlify.app/",
  },
  {
    id: 11,
    title: "Tic-Tac-Toe Game",
    description:
      "Tic-tac-toe is a classic game that is commonly played among young children and is known for its simple rules. It is played by two people who take turns marking an X or an O on a 3x3 grid. The first person to mark three of their signs in a horizontal, vertical, or diagonal row is the winner.",
    image: tictactoeLogo, 
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ashu-prabh/Tictac-game-",
    webapp: "https://ashu-prabh.github.io/Tictac-game-/",
  }
];  

export const certificates = [
  {
    id: 0,
    title: "Web Development Internship",
    issuer: "Zidio Development",
    date: "15 June 2025 - 15 August 2025",
    description: "Successfully completed a Web Development Internship at Zidio Development. Gained practical experience in web technologies and worked on developing and improving web-based applications, enhancing programming and problem-solving skills.",
    image: zidioInternshipLogo,
  },
  {
    id: 1,
    title: "Web Development Training",
    issuer: "Zidio Development",
    date: "2025",
    description: "Completed a Web Development Training Program offered by Zidio Development. The training focused on understanding modern web development concepts, tools, and technologies used to build responsive and functional websites.",
    image: zidioTrainingLogo,
  },
  {
    id: 2,
    title: "Microsoft Excel 2013 \u2013 Advanced",
    issuer: "Infosys Springboard",
    date: "October 21, 2024",
    description: "Successfully completed the Microsoft Excel 2013 \u2013 Advanced course through Infosys Springboard. This course enhanced skills in advanced Excel functions, data analysis, and efficient data management techniques.",
    image: infosysExcelLogo,
  },
  {
    id: 3,
    title: "Activity Coordinator \u2013 Stereo Club",
    issuer: "NMAM Institute of Technology",
    date: "2024 - 2025",
    description: "Received a Certificate of Appreciation for serving as the Activity Coordinator of Stereo Club (2024\u201325). This role involved organizing events, coordinating activities, and contributing to student engagement initiatives.",
    image: stereoClubLogo,
  },
  {
    id: 4,
    title: "Volunteer \u2013 Incridea \u201925",
    issuer: "NMAM Institute of Technology",
    date: "2025",
    description: "Awarded a Certificate of Appreciation for volunteering in the Inaugural Committee of Incridea 2025, the annual technical fest at NMAM Institute of Technology. Contributed to organizing and supporting event activities to ensure the success of the festival.",
    image: incrideaLogo,
  }
];