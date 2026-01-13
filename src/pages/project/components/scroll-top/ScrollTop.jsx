import React, { useState, useEffect } from "react";
import "./ScrollTop.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

export default () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const modalElement = document.getElementById('project-modal');
        const scrollContainer = modalElement || window;

        const handleScroll = () => {
            let scrollY, innerHeight;

            if (modalElement) {
                scrollY = modalElement.scrollTop;
                innerHeight = modalElement.clientHeight;
            } else {
                scrollY = window.scrollY;
                innerHeight = window.innerHeight;
            }

            if (scrollY > innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        const modalElement = document.getElementById('project-modal');

        if (modalElement) {
            modalElement.scrollTo({top: 0, behavior: 'smooth'});
        } else {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    return (
        <button
            id="scroll-top"
            onClick={scrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            <FontAwesomeIcon icon={faAngleUp}/>
        </button>
    )
}