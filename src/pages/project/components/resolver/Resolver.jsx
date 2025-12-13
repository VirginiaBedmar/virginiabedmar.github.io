import React from 'react';
import {useParams} from "react-router-dom";
import projects from '../../../../config/db.json';
import Home from "../../../home/Home";
import Project from "../../Project";

export default () => {
    const { slug } = useParams();
    const project = projects.find(proj => proj.slug === slug);
    if (!project) {
        return <Home/>;
    }

    return <Project project={project} />
}