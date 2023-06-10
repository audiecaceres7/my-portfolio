type ProjectProps = {
  title: string;
  description: string;
  img: string;
  link: string;
  icons: any[];
};

const Project = ({ title, description, img, link, icons }: ProjectProps) => {
  return (
    <a href={link} target="_blank">
      <div className="project-container">
        <div className="project-info">
          <p className="project-title">{title}</p>
          <p className="project-des">{description}</p>
          <h3 className="project-tech">Technologies used</h3>
          <div className="project-icon-container">{icons}</div>
        </div>
        <img className="project-img" src={img}></img>
      </div>
    </a>
  );
};

export default Project;
