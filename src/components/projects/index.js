import Card from "./Card";
import "./style.css";
import projects from '../../constants/projects'


const Projects = () => {
  const cards = projects.map((project, index) => (
    <Card key={index} index={index} {...project} />
  ));
  return (
    <div id="projects" className="main-section projects">
      <div className="content">{cards}</div>
    </div>
  );
};

export default Projects;
