import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import "./Header.responsive.scss";

export default ({project}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <header id="project-header" className="full-height" ref={elementRef}>
            <div className="text-wrapper">
                <h1 className={`${isVisible ? 'on-screen' : ''}`}>{project.name}</h1>
                <h2 className={`${isVisible ? 'on-screen' : ''}`}>{project.detail.header.subtitle}</h2>
                <ul className={`technologies ${isVisible ? 'on-screen' : ''}`}>
                    {project.technologies.map((technology, key) =>
                        <li key={key} className={`badge-${technology.toLowerCase()}`}>{technology}</li>)}
                </ul>
            </div>
            <div className="media-wrapper">
                <video autoPlay="autoplay" loop="loop" muted className={`technologies ${isVisible ? 'on-screen' : ''}`}>
                    <source src={project.detail.header.video} type="video/mp4"/>
                </video>
            </div>
        </header>
    )
}