import { Link } from "react-scroll";
import PropTypes from "prop-types";

const NavItem = ({ children, toSection, onClick }) => {
    if (!children) {
        return null;
    }

    return (
        <li className="nav-item" tagTest="nav-item">
            <Link
                activeClass="active"
                to={toSection}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="nav-links"
                onClick={onClick}
            >
                {children}
            </Link>
            {/* <Link to={toPath} className="nav-links" onClick={onClick}>
        {children}
      </Link> */}
        </li>
    );
};

NavItem.propTypes = {
    children: PropTypes.string,
    toSection: PropTypes.string,
};

export default NavItem;
