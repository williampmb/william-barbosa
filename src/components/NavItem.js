import { Link } from "react-router-dom";

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

export default NavItem;
