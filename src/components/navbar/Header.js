import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import NavItem from "./NavItem";

const Header = () => {
    const [click, setClick] = useState(false);

    const onMenuClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className="navbar" tagTest="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <i className="fas fa-passport"></i>
                        <span className="navbar-logo-text">WB</span>
                    </Link>
                    <div className="menu-icon" onClick={onMenuClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul
                        className={click ? "nav-menu active" : "nav-menu"}
                        tagTest="navmenu"
                    >
                        <NavItem toSection="home" onClick={closeMobileMenu}>
                            Home
                        </NavItem>
                        <NavItem toSection="projects" onClick={closeMobileMenu}>
                            Projects
                        </NavItem>
                        <NavItem toSection="contact" onClick={closeMobileMenu}>
                            Contact
                        </NavItem>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header;
