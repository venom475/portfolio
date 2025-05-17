import React, { useEffect } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { SiDotnet, SiMongodb, SiMysql, SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import RotatingCube from "./src/RotatingCube";
import ContactMe from "./src/ContactMe";

const projects = [
  {
    title: "NutriScan",
    description: "A nutrient scanner that checks calories and nutrients for a diet using HTML, TailwindCSS, MongoDB, and Node.js.",
    imageUrl: "/portfolio/nutri scanner.png",
  },
  {
    title: "Social Media Dashboard",
    description: "A dashboard to manage multiple social media accounts, schedule posts, and analyze performance metrics using HTML, CSS, JavaScript, React.js, Node.js, and MySQL.",
    imageUrl: "/portfolio/good-social-media-dashboard-example.png",
  },
  {
    title: "Interactive 3D Website Front-End",
    description: "Dynamic 3D animations and user interactions using HTML, CSS, JavaScript, and Canvas, providing an immersive user experience.",
    imageUrl: "/portfolio/3-d website.png",
  },
];

const technicalSkills = [
  { name: "C#", icon: <SiDotnet className="text-blue-700 w-6 h-6 inline-block mr-2" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 w-6 h-6 inline-block mr-2" /> },
  { name: "Web API", icon: <FaNodeJs className="text-green-600 w-6 h-6 inline-block mr-2" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-600 w-6 h-6 inline-block mr-2" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-600 w-6 h-6 inline-block mr-2" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-6 h-6 inline-block mr-2" /> },
  { name: "React.js", icon: <FaReact className="text-blue-500 w-6 h-6 inline-block mr-2" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700 w-6 h-6 inline-block mr-2" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-600 w-6 h-6 inline-block mr-2" /> },
  { name: "Microsoft SQL Server", icon: <FaDatabase className="text-gray-700 w-6 h-6 inline-block mr-2" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-600 w-6 h-6 inline-block mr-2" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-900 w-6 h-6 inline-block mr-2" /> },
];

const softSkills = [
  "Effective Communication",
  "Interpersonal Skills",
  "Resilience",
];

const Portfolio = () => {
  useEffect(() => {
    const handleSmoothScroll = (event) => {
      if (event.target.tagName === "A" && event.target.hash) {
        event.preventDefault();
        const targetElement = document.querySelector(event.target.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          history.pushState(null, null, event.target.hash);
        }
      }
    };
    document.querySelector("nav").addEventListener("click", handleSmoothScroll);
    return () => {
      document.querySelector("nav").removeEventListener("click", handleSmoothScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          <h1 className="text-3xl font-bold">Akhil Pandey Portfolio</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#education" className="hover:underline">Education</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#social-getintouch" className="hover:underline">Social Connect</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto py-10 px-4 md:px-0 flex-grow">
        <section id="about" className="mb-16 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-10">
          <img
            src="8de4cb2f-7acf-43a1-995b-64d03d8025ad.jpeg"
            alt="Akhil Pandey"
            className="rounded-full w-36 h-36 object-cover shadow-lg"
          />
          <div className="flex flex-col md:flex-row items-center md:items-start space-x-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <p>
                Hello! I am Akhil Pandey, an AI expert, UI/UX designer, and software developer passionate about technology innovation. Currently pursuing my MCA at Axis Business School, Kanpur, I aim to leverage cutting-edge tools and design principles to build impactful AI-driven solutions that can transform industries and improve lives.
              </p>
            </div>
            <div>
              <RotatingCube />
            </div>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(({ title, description, imageUrl }) => (
              <div key={title} className="bg-white p-4 shadow-md rounded-lg flex flex-col transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
                <img src={`${imageUrl}`} alt={title} className="rounded-md object-cover h-40 w-full mb-4" />
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2 flex-grow">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong>Web Development Intern at Octanet</strong>
              <p>Worked on front-end development using React and Tailwind CSS, improving UI responsiveness and accessibility.</p>
            </li>
            <li>
              <strong>Software Developer Intern at CSedge (April 2024 – June 2024)</strong>
              <p>Developed RESTful APIs and integrated third-party services to enhance application functionality.</p>
            </li>
          </ul>
        </section>

        <section id="education" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <p><strong>Axis Business School</strong> (2023 – 2025): MCA (Master of Computer Application)</p>
          <p>Currently pursuing MCA with a focus on software development, data structures, and AI technologies.</p>
          <p><strong>Chatrapati Sahuji Maharaj University</strong> (2019 – 2022): B.Sc (Bachelor of Science)</p>
          <p>Completed B.Sc with specialization in Computer Science and Mathematics.</p>
        </section>

        <section id="skills" className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
              <ul className="list-none">
                {technicalSkills.map(({ name, icon }) => (
                  <li key={name} className="mb-2 flex items-center">
                    {icon} {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-4 shadow-md rounded-lg">
              <h3 className="text-xl font-bold mb-4">Soft Skills</h3>
              <ul className="list-disc ml-6">
                {softSkills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="social-getintouch" className="mb-16 flex flex-col md:flex-row md:space-x-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Social Connect</h2>
            <ul className="list-none flex space-x-6 items-center">
              <li className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
                <a href="https://www.linkedin.com/in/akhil-pandey475" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:underline">
                  <FaLinkedin className="w-6 h-6 mr-2" /> LinkedIn
                </a>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
                <a href="https://github.com/venom475" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-900 hover:underline">
                  <FaGithub className="w-6 h-6 mr-2" /> GitHub
                </a>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
                <a href="https://www.facebook.com/akhil.pandey.399488" target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-800 hover:underline">
                  <FaFacebook className="w-6 h-6 mr-2" /> Facebook
                </a>
              </li>
              <li className="transform transition-transform duration-300 hover:scale-110 hover:-translate-y-2">
                <a href="https://www.instagram.com/_oye.akhil/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center text-pink-600 hover:underline">
                  <FaInstagram className="w-6 h-6 mr-2" /> Instagram
                </a>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <ContactMe compact />
          </div>
        </section>
      <div className="container mx-auto py-4 text-center">
        <a
          href="/portfolio/resume.pdf"          
          download
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition-colors"
        >
          Download Resume
        </a>
      </div>
      </main>

      <footer className="bg-blue-600 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Akhil Pandey. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
