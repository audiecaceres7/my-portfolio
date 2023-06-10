import "../styles/HomePage.css";

const icons = [
  { className: "icon react-icon fa-brands fa-react" },
  { className: "icon css-icon fa-brands fa-css3-alt" },
  { className: "icon html-icon fa-brands fa-html5" },
  { className: "icon js-icon fa-brands fa-js" },
];

const HomePage = () => {
  return (
    <div className="hero-container">
      <div className="hero-section">
        <div className="hero-title">Hi! I'm Audie Caceres</div>
        <p>
          I'm a 23 year old software engineer, specializing in front-end
          development using technologies such as TypeScript, HTML, CSS and React
          . I thrive on creating intuitive and engaging user interfaces that
          blend functionality and deliver exceptional digital experience .
        </p>
        <div className="icon-container">
          {icons.map((icon) => (
            <i key={icon.className} className={icon.className}></i>
          ))}
          <div className="ts-icon">
            <span>TS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
