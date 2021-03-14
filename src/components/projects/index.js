import Card from "./Card";
import "./style.css";
import SKILLS from "../../constants/skills";
import castle from "../../resource/castle.jpg";
import gestorama from '../../resource/gestorama.png'

const projects = [
  {
    title: "TD Survival",
    skills: [SKILLS.JAVA,SKILLS.CSS, SKILLS.JS, SKILLS.HTML],
    description:
      "I like diving deep to understand how things work. So, a survival tower defense game completely built from scratch (P5 lib to geometric render). Therefore, all those stuff like problems like collisions, pathfinder, tiles, render optimizations, UI.",
    observation: "Everything from scratch learns more...",
    loc: "21K",
    imgUrl: castle,
  },
  {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  }, {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  }, {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  }, {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  }, {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  }, {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  }, {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  }, {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  }, {
    title: "Gestorama",
    skills: [SKILLS.CSS, SKILLS.REACT, SKILLS.FIREBASE, SKILLS.NODE],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  },
];
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
