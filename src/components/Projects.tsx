import saasImg from "../assets/project-1.jpeg";
import folioImg from "../assets/project-2.jpeg";
import pokeApiImg from "../assets/project-3.jpeg";
import "../styles/Projects.css";
import Project from "./Project";

const projs = [
  {
    title: "SAAS-Website",
    description:
      "This beautifully designed web page showcases a seamless blend of HTML and CSS, resulting in a visually stunning and interactive experience",
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
  {
    title: "Poke-Api",
    description:
      "This is a small and simple version of a pokedex crafted with HTML, CSS and Typescript. Using the pokeApi and adding some interactivity",
    link: "https://poke-api-flame.vercel.app/",
    img: pokeApiImg,
    icons: [
      <i className="fa-brands fa-html5"></i>,
      <i className="fa-brands fa-css3-alt"></i>,
      <div className="mini-ts-icon">TS</div>,
    ],
  },
];

const Projects = () => {
  return (
    <p className="project-section">
      <p className="project-header">Projects</p>
      {projs.map((proj) => (
        <div>
          <Project
            title={proj.title}
            description={proj.description}
            img={proj.img}
            link={proj.link}
            icons={proj.icons}
          />
          <div
            style={{
              margin: "3rem 0",
              height: "2px",
              backgroundColor: "#141919",
              borderRadius: "5px",
            }}
          />
        </div>
      ))}
    </p>
  );
};

export default Projects;
