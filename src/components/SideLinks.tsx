type SideLinksProps = {
  className: string;
  link: string;
};

const SideLinks = ({ className, link }: SideLinksProps) => {
  return (
    <a className="side-icon" href={link} target="_blank">
      <i className={className}></i>
    </a>
  );
};

export default SideLinks;
