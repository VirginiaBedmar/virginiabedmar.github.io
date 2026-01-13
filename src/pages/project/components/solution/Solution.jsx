import React, { useState, useEffect, useRef } from "react";
import "./Solution.scss";
import "./Solution.responsive.scss";

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
        <div id="project-solution" ref={elementRef}>
            <h2 className={`${isVisible ? 'on-screen' : ''}`}>La solución</h2>
            <p className={`solution-content ${isVisible ? 'on-screen' : ''}`}>{project.detail.solution.text}</p>
            <div className={`media-wrapper ${isVisible ? 'on-screen' : ''}`}>
                <video
                    ref={videoRef}
                    muted
                    controls
                    playsInline
                    preload="metadata"
                    className={`technologies ${isVisible ? 'on-screen' : ''}`}
                >
                    {shouldLoadVideo && <source src={project.detail.solution.video} type="video/mp4"/>}
                </video>
            </div>
        </div>
    )
}