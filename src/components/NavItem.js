import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ children, toPath, onClick }) => {
  if (!children) {
    return null;
  }

  return (
    <li className="nav-item" tagTest="nav-item">
      <Link to={toPath} className="nav-links" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

NavItem.propTypes = {
  children: PropTypes.string,
  toPath: PropTypes.string,
  onClick: PropTypes.func,
};

export default NavItem;
