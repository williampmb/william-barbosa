import SKILLS from "./skills";
import HTML_SVG from "../resource/html.svg";
import CSS_SVG from "../resource/css.svg";
import JS_SVG from "../resource/js.svg";
import POSTGRES_SVG from "../resource/postgres.svg";
import NODE_SVG from "../resource/node.svg";
import REACT_SVG from "../resource/react.svg";
import FIREBASE_SVG from "../resource/firebase.svg";
import JAVA_SVG from "../resource/java.svg";


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
    default:
  }
};

export { HTML_SVG, CSS_SVG, JS_SVG, POSTGRES_SVG, getSkillSVG };
