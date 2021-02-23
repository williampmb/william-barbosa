const Card = () => {
    return (
        <div className="card">
            <div className="title">
                <img className="title-banner" src="images/banner-title.png" />
                <span className="title-txt">Suvival TD</span>
            </div>
            <div className="wrapper-image">
                <img src="images/castle.jpg"></img>
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
                <span> the power is 35</span>
                <img src="images/shield-sword.png"></img>
            </div>
        </div>
    );
};

export default Card;
