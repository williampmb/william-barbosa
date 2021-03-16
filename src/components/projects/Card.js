import { getSkillSVG } from "../../constants/svg";

import shield from "../../resource/svg/shield-sword.svg";

const Card = ({
  index,
  title,
  description,
  skills,
  observation,
  loc,
  imgUrl,
}) => {
  const cardSkills =
    skills &&
    skills.map((tech, index) => (
      <div key={index} className="skill-content">
        <img src={getSkillSVG(tech)} alt="svg2"></img>
      </div>
    ));

  return (
    <div className="card" style={{ zIndex: index }}>
      <div className="title">
        <img
          className="title-banner"
          alt="banner"
          src="images/banner-title.png"
        />
        <span className="title-txt">{title}</span>
      </div>
      <div className="wrapper-image">
        <img className="card-image" src={imgUrl} alt="castke"></img>
        <div className="skills">{cardSkills}</div>
      </div>
      <div className="description">
        <span>{description}</span>
      </div>
      <div className="footer">
        <span className="tought">- {observation} </span>
        <div className="loc">
          <span className="loc-content">
            {loc} <span className="loc-name">loc</span>
          </span>
          <img src={shield} alt="shield" width="90px"></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
