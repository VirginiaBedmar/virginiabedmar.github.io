import React from 'react';
import './Header.scss';
import './Header.responsive.scss';

export default ({project}) => {
    return (
        <div id="work-detail" style={{display: project !== null ? 'initial' : 'none'}}>
            <figure>
                <img src={project.img}></img>
            </figure>
            <div className="text">
                <span className="project-name-no-action">{project.name}</span>
                <ul className="technologies">
                    {project.technologies.map((technology, key) =>
                        <li key={key} className={`badge-${technology.toLowerCase()}`}>{technology}</li>)}
                </ul>
                <hr/>
                <p>{project.summary}</p>
                <hr/>
            </div>
        </div>
    )
};