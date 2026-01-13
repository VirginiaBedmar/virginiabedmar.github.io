import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import "./Header.responsive.scss";

export default ({project}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
    const elementRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setShouldLoadVideo(true);

                    if (videoRef.current) {
                        videoRef.current.play();
                    }
                } else {
                    if (videoRef.current) {
                        videoRef.current.pause();
                    }
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
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
                <h1 className={`${isVisible ? 'on-screen' : ''}`}>
                    <img src={project.logo} alt={project.title}/>
                    <span>{project.name}</span>
                </h1>
                <h2 className={`${isVisible ? 'on-screen' : ''}`}>{project.detail.header.subtitle}</h2>
                <ul className={`technologies ${isVisible ? 'on-screen' : ''}`}>
                    {project.technologies.map((technology, key) =>
                        <li key={key} className={`badge-${technology.toLowerCase()}`}>{technology}</li>)}
                </ul>
            </div>
            <div className="media-wrapper">
                <video
                    ref={videoRef}
                    loop="loop"
                    muted
                    playsInline
                    preload="metadata"
                    className={`technologies ${isVisible ? 'on-screen' : ''}`}
                >
                    {shouldLoadVideo && <source src={project.detail.header.video} type="video/mp4"/>}
                </video>
            </div>
        </header>
    )
}