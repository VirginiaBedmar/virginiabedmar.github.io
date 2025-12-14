import React from "react";
import Header from "./components/header/Header";
import Resume from "./components/resume/Resume";

export default ({project}) => {
    return (
        <div id="project" className="container">
            <Header project={project}/>
            <Resume project={project}/>
        </div>
    )
};
