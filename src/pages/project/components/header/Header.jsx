import React from "react";
import "./Header.scss";
import "./Header.responsive.scss";

export default ({project}) => {
    return (
        <header id="project-header">
            <div className="text-wrapper">
                <h1>{project.name}</h1>
                <h2>{project.detail.header.subtitle}</h2>
                <ul className="technologies">
                    {project.technologies.map((technology, key) =>
                        <li key={key} className={`badge-${technology.toLowerCase()}`}>{technology}</li>)}
                </ul>
            </div>
            <div className="media-wrapper">
                <video autoPlay="autoplay" loop="loop" muted>
                    <source src={project.detail.header.video} type="video/mp4"/>
                </video>
            </div>
        </header>
    )
}