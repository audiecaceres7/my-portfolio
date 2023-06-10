import saasImg from "../assets/project-1.jpeg";
import folioImg from "../assets/project-2.jpeg";
import "../styles/Projects.css";
import Project from "./Project";

const projs = [
  {
    title: "SAAS-Website",
    description:
      "This beautifully designed web page showcases a seamless blend of HTML and CSS, resulting in a visually stunning and interactive experience. ",
    link: "https://saas-website-iota.vercel.app/",
    img: saasImg,
    icons: [
      <i className="fa-brands fa-html5"></i>,
      <i className="fa-brands fa-css3-alt"></i>,
    ],
  },
  {
    title: "Folio-website",
    description:
      "This is a captivating portfolio page crafted with HTML, CSS, and JavaScript. Experience seamless navigation, stunning visuals, and interactive elements",
    link: "https://portfolio-website-psi-tawny.vercel.app/",
    img: folioImg,
    icons: [
      <i className="fa-brands fa-html5"></i>,
      <i className="fa-brands fa-css3-alt"></i>,
      <i className="fa-brands fa-js"></i>,
    ],
  },
];

const Projects = () => {
  return (
    <div className="project-section">
      <p className="project-header">Projects</p>
      {projs.map((proj) => (
        <Project
          title={proj.title}
          description={proj.description}
          img={proj.img}
          link={proj.link}
          icons={proj.icons}
        />
      ))}
    </div>
  );
};

export default Projects;
