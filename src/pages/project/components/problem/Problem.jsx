import React, { useState, useEffect, useRef } from "react";
import "./Problem.scss";
import "./Problem.responsive.scss";

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
        <div id="project-problem" ref={elementRef}>
            <div className="problem-content">
                <ul className={`${isVisible ? 'on-screen' : ''}`}>
                    {
                        project.detail.problem.highlightedItems.map((item, index) => (
                            <li key={index}>
                                <span className="enumerated-title">{item.emoji} {item.title}</span>
                                <p>{item.text}</p>
                            </li>
                        ))
                    }
                </ul>
                <div className={`${isVisible ? 'on-screen' : ''}`}>
                    <h2>El Problema</h2>
                    {
                        project.detail.problem.textParagraphs.map((paragraph, index) => (
                            <p key={index} className="problem-summary">{paragraph}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}