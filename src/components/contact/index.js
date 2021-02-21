import "./style.css";

const Contact = () => {
    return (
        <div id="contact" className="main-section contact">
            <ul>
                <li>
                    <a href="mailto:williampmb@hotmail.com">
                        <i className="fa fa-at fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/williampmb">
                        <i className="fa fa-github-alt fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/williampmb">
                        <i className="fa fa-instagram fa-2x"></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/williampmb">
                        <i className="fa fa-linkedin fa-2x"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
