import Card from "./Card";
import "./style.css";

const Projects = () => {
    return (
        <div id="projects" className="main-section projects">
            <div className="content">
                <Card />
                <Card index={1}/>
                <Card index={2}/>
                <Card index={3}/>
                <Card index={4}/>
                <Card index={5}/>
                <Card index={6}/>
            </div>
        </div>
    );
};

export default Projects;
