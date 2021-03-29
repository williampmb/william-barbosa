import SKILLS from "./skills";
import HTML_SVG from "../resource/svg/html.svg";
import CSS_SVG from "../resource/svg/css.svg";
import JS_SVG from "../resource/svg/js.svg";
import POSTGRES_SVG from "../resource/svg/postgres.svg";
import NODE_SVG from "../resource/svg/node.svg";
import REACT_SVG from "../resource/svg/react.svg";
import FIREBASE_SVG from "../resource/svg/firebase.svg";
import JAVA_SVG from "../resource/svg/java.svg";
import PYTHON_SVG from "../resource/svg/python.svg";
import ARTICLE_SVG from "../resource/svg/article.svg";
import RAILS_SVG from "../resource/svg/rails.svg";
import TYPESCRIPT_SVG from "../resource/svg/typescript.svg";
import NEURAL_SVG from "../resource/svg/neural.svg";
import MONGO_SVG from "../resource/svg/mongo.svg";
import SPRING_SVG from "../resource/svg/spring.svg";
import ALGORITHM_SVG from "../resource/svg/algorithm.svg";
import API_SVG from "../resource/svg/api.svg";
import BOOTSTRAP_SVG from "../resource/svg/bootstrap.svg";

const getSkillSVG = (skill) => {
  switch (skill) {
    case SKILLS.HTML:
      return HTML_SVG;
    case SKILLS.CSS:
      return CSS_SVG;
    case SKILLS.JS:
      return JS_SVG;
    case SKILLS.POSTGRES:
      return POSTGRES_SVG;
    case SKILLS.NODE:
      return NODE_SVG;
    case SKILLS.REACT:
      return REACT_SVG;
    case SKILLS.REACT_NATIVE:
      return REACT_SVG;
    case SKILLS.FIREBASE:
      return FIREBASE_SVG;
    case SKILLS.JAVA:
      return JAVA_SVG;
    case SKILLS.PYTHON:
      return PYTHON_SVG;
    case SKILLS.ARTICLE:
      return ARTICLE_SVG;
    case SKILLS.RAILS:
      return RAILS_SVG;
    case SKILLS.TYPESCRIPT:
      return TYPESCRIPT_SVG;
    case SKILLS.NEURAL:
      return NEURAL_SVG;
    case SKILLS.MONGODB:
      return MONGO_SVG;
    case SKILLS.SPRING:
      return SPRING_SVG;
    case SKILLS.ALGORITHM:
      return ALGORITHM_SVG;
    case SKILLS.API:
      return API_SVG;
    case SKILLS.BOOTSTRAP:
      return BOOTSTRAP_SVG;
    default:
  }
};

export { HTML_SVG, CSS_SVG, JS_SVG, POSTGRES_SVG, getSkillSVG };
