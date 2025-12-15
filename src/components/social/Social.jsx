import React from 'react';
import './Social.scss';
import './Social.responsive.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {faDownload} from "@fortawesome/free-solid-svg-icons";

export default ({extraClass}) => {
    return (
        <ul className={`social ${extraClass}`}>
            <li>
                <a href="https://www.linkedin.com/in/virginia-bedmar" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="highlight-text"/>
                    <span>LinkedIn</span>
                </a>
            </li>
            <li>
                <a href="mailto:virginia.bedmar@gmail.com" target="_blank">
                    <FontAwesomeIcon icon={faEnvelope} className="highlight-text"/>
                    <span>Email</span>
                </a>
            </li>
            <li>
                <a href="/files/Virginia_Bedmar_CV.pdf" target="_blank" download="Virginia_Bedmar_CV.pdf">
                    <FontAwesomeIcon icon={faDownload} className="highlight-text"/>
                    <span>Descargar CV</span>
                </a>
            </li>
        </ul>
    )
};