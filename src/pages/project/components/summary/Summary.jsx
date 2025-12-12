import React from 'react';
import './Summary.scss';
import './Summary.responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faExternalLink} from "@fortawesome/free-solid-svg-icons";
import {faFigma} from "@fortawesome/free-brands-svg-icons";

export default ({project}) => {
    return (
        <div id="summary">
            <div className="center-info">
                <h3>El resultado</h3>
                <p>
                    Puedes obtener más información sobre <span className="highlight-text">{ project.name }</span><br/>
                    echando un vistazo al prototipado o incluso accediendo al research completo.
                </p>
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
        </div>
    )
};