import React from "react";
import Contact from "../components/contact";
import Home from "../components/home";
import Projects from "../components/projects";

const Main = () => {
    return (
        <>
            <Home></Home>
            <Projects />
            <Contact />
        </>
    );
};

export default Main;
