import SKILLS from "../constants/skills";
import castle from "../resource/castle.jpg";
import gestorama from "../resource/gestorama.png";
import people from "../resource/people.jpg";
import questions from "../resource/problem2.jpg";
import windcone from "../resource/mark-konig.jpg";
import theater from "../resource/asael-pena.jpg";
import neuralnet from "../resource/abstract.jpg";

const projects = [
  {
    title: "TD Survival",
    skills: [  SKILLS.JS, SKILLS.HTML,SKILLS.CSS],
    description:
      "I like diving deep to understand how things work. So, a survival tower defense game completely built from scratch (P5 lib to geometric render). Therefore, all those stuff like problems like collisions, pathfinder, tiles, render optimizations, UI.",
    observation: "Everything from scratch learns more...",
    loc: "21K",
    imgUrl: castle,
  },
  {
    title: "Gestorama",
    skills: [SKILLS.REACT, SKILLS.CSS,SKILLS.FIREBASE, SKILLS.TYPESCRIPT],
    description:
      "High scalable cross-plataform mobile app. It allows users to send text, to create content, to manager theirs groups, and to receive payment from subscribers trough real-time chat, file system, charts, and more",
    observation: "100% serverless and microservices",
    loc: "51K",
    imgUrl: gestorama,
  },
  {
    title: "People Counting System",
    skills: [ SKILLS.PYTHON, SKILLS.ARTICLE ],
    description:
      "The algorithm is based on foreground and background separation, noise removal and estimative dynamic update, detecting, tracking, and counting people",
    observation: "Detecting, tracking and counting algorithm",
    loc: "834",
    imgUrl: people,
  },
  {
    title: "Problem Solving Skills",
    skills: [SKILLS.JAVA, SKILLS.JS, SKILLS.REACT],
    description:
      "I love solving questions and optimizing them. Learning new ways of thinking. Repository dedicated to having icon with Leetcode, Hackrank, Cracking the Coding Interview, URI, and Real Interview Questions",
    observation: "100% serverless and microservices",
    loc: "26k",
    imgUrl: questions,
  },
  {
    title: "Movie And Chill",
    skills: [ SKILLS.RAILS, SKILLS.CSS, SKILLS.MONGODB],
    description:
      "Web application to buy a ticker for a movie theater with concurrency while picking chairs based on Scrum methodology and Sprints",
    observation: "100% serverless and microservices",
    loc: "4k",
    imgUrl: theater,
  },
  {
    title: "Eyeweather",
    skills: [SKILLS.SPRING,SKILLS.CSS],
    description:
      "Web application for USA forecast based on latitude and longitude",
    observation: "100% serverless and microservices",
    loc: "3K",
    imgUrl: windcone,
  },
  {
    title: "Evolutionaries Creatures",
    skills: [SKILLS.JS, SKILLS.NEURAL],
    description:
      "Creatures from space using their brain to search for food while passing out its genes through generations. The focus is to make minors changes to observe the way of their surviving",
    observation: "100% serverless and microservices",
    loc: "2.2k",
    imgUrl: neuralnet,
  },
];

export default projects;
