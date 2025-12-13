import React from "react";
import "./ProjectModal.scss";
import Project from "../../pages/project/Project";

export default ({selectedProject, onClose}) => {
    return (
        selectedProject ? (
            <div id="project-modal">
                <div className="cursor-pointer close-button" onClick={() => onClose(null)}></div>
                <Project project={selectedProject}/>
            </div>
        ) : <></>
    )
};
