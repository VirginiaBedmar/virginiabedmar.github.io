import React from "react";
import WorkDetail from "../../components/work-detail/WorkDetail";

export default ({selectedProject}) => {
    return (
        <div className="container">
            <WorkDetail project={selectedProject}/>
        </div>
    )
};
