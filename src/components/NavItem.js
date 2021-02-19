import { Link } from "react-router-dom";

const NavItem = ({ children, toPath, onClick }) => {
  return (
    <li className="nav-item">
      <Link to={toPath} className="nav-links" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
