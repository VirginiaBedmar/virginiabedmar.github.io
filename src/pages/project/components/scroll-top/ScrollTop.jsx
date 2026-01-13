import React, { useState, useEffect } from "react";
import "./ScrollTop.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

export default () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <button
            id="scroll-top"
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            <FontAwesomeIcon icon={faAngleUp}/>
        </button>
    )
}