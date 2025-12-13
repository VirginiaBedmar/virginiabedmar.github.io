import React from 'react';
import {useParams} from "react-router-dom";
import "./Resolver.scss";
import projects from '../../../../config/db.json';
import Home from "../../../home/Home";
import Project from "../../Project";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowLeft} from "@fortawesome/free-solid-svg-icons";

export default () => {
    const { slug } = useParams();
    const project = projects.find(proj => proj.slug === slug);
    if (!project) {
        return <Home/>;
    }

    return <div id="resolver">
        <div className="cursor-pointer go-back" onClick={() => window.location.href = "/"}>
            <FontAwesomeIcon icon={faLongArrowLeft}/>
            <span>Volver</span>
        </div>
        <Project project={project}/>
    </div>
}