import React from "react";
import "./ProjectModal.scss";
import WorkDetail from "../work-detail/WorkDetail";

export default ({selectedProject, onClose}) => {
    return (
        selectedProject ? (
            <div id="project-modal">
                <div className="cursor-pointer close-button" onClick={() => onClose(null)}></div>
                <div className="container">
                    <WorkDetail project={selectedProject}/>
                </div>
            </div>
        ) : <></>
    )
};
