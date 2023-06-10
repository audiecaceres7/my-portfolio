import "../styles/SideBar.css";
import SideLinks from "./SideLinks";

const sideIcons = [
  {
    className: "fa-brands fa-square-github",
    title: "GitHub",
    link: "https://github.com/audiecaceres7",
  },
  {
    className: "fa-brands fa-linkedin",
    title: "linked In",
    link: "https://www.linkedin.com/in/audie-caceres-2a6801250/",
  },
  {
    className: "fa-brands fa-instagram",
    title: "Instagram",
    link: "https://www.instagram.com/audiecaceres7/",
  },
  {
    className: "fa-solid fa-envelope",
    title: "E-mail",
    link: "mailto:audie.caceres1999@gmail.com",
  },
];

const SideBar = () => {
  return (
    <div className="side-bar">
      {sideIcons.map((icon) => (
        <SideLinks
          key={icon.className}
          className={icon.className}
          link={icon.link}
        />
      ))}
    </div>
  );
};

export default SideBar;
