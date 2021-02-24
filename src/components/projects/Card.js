import shield from "../../resource/shield-sword.svg";
import htmlSvg from "../../resource/html.svg";
import castle from "../../resource/castle.jpg";

const Card = () => {
    return (
        <div className="card">
            <div className="title">
                <img className="title-banner" src="images/banner-title.png" />
                <span className="title-txt">Suvival TD</span>
            </div>
            <div className="wrapper-image">
                <img className="card-image" src={castle}></img>
                <div className="skills">
                    <div className="skill-content">
                        <img src={htmlSvg} width="20px"></img>
                    </div>
                    <div className="skill-content">
                        <img src={htmlSvg} width="20px"></img>
                    </div>
                    <div className="skill-content">
                        <img src={htmlSvg} width="20px"></img>
                    </div>
                </div>
            </div>
            <div className="description">
                <span>
                    I like diving deep to understand how things work. So, a
                    survival tower defense game completely built from scratch
                    (P5 lib to geometric render). Therefore, all those stuff
                    like problems like collisions, pathfinder, tiles, render
                    optimizations, UI.
                </span>
            </div>
            <div className="footer">
                <span>- how does engine works? let's build one and see...</span>
                <img src={shield}></img>
            </div>
        </div>
    );
};

export default Card;
