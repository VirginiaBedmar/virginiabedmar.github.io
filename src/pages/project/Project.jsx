import React from "react";
import Header from "./components/header/Header";
import Resume from "./components/resume/Resume";
import Problem from "./components/problem/Problem";
import Solution from "./components/solution/Solution";

export default ({project}) => {
    return (
        <div id="project" className="container">
            <Header project={project}/>
            <Resume project={project}/>
            <Problem project={project}/>
            <Solution project={project}/>
        </div>
    )
};
