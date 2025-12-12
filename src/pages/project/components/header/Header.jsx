import React from 'react';
import './Header.scss';
import './Header.responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFigma} from '@fortawesome/free-brands-svg-icons';
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";

export default ({project}) => {
    return (
        <div id="header-work-detail" className="full-height" style={{display: project !== null ? 'flex' : 'none'}}>
            <div className="text-header">
                <h1>{project.name}</h1>
                <p className="subtitle">Porque viajar debería ser tan fácil como soñar.</p>
                <ul className="header-links">
                    <li>
                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faFigma} className="highlight-text"/>
                            <span>Ver en Figma</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" target="_blank">
                            <FontAwesomeIcon icon={faExternalLink} className="highlight-text"/>
                            <span>Ver research</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="video-header">
                <video autoPlay="autoplay" loop="loop" muted>
                    <source src="./assets/videos/aventra/demo.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    )
};