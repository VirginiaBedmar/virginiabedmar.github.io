import React from "react";
import Header from "./components/header/Header";

export default ({project}) => {
    return (
        <div id="project" className="container">
            <Header project={project}/>
        </div>
    )
};
