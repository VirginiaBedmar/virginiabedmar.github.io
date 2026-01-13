import React, { useState, useEffect, useRef } from "react";
import "./Research.scss";
import "./Research.responsive.scss";

export default ({project}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [visibleSections, setVisibleSections] = useState([]);
    const elementRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.01 }
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

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = sectionRefs.current.indexOf(entry.target);
                        if (index !== -1 && !visibleSections.includes(index)) {
                            setVisibleSections(prev => [...prev, index]);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        sectionRefs.current.forEach((section) => {
            if (section) {
                sectionObserver.observe(section);
            }
        });

        return () => {
            sectionRefs.current.forEach((section) => {
                if (section) {
                    sectionObserver.unobserve(section);
                }
            });
        };
    }, []);

    return !project.detail.research ? '' : (
        <div id="research" ref={elementRef}>
            <h2 className={`${isVisible ? 'on-screen' : ''}`}>Información técnica</h2>
            <ul className="research-sections-list">
                {
                    project.detail.research && Object.keys(project.detail.research).map((key, index) => (
                        <li key={index} ref={el => sectionRefs.current[index] = el} className={`research-section ${visibleSections.includes(index) ? 'on-screen' : ''}`}>
                            <h3 className="capitalize-text">{key}</h3>
                            <ul>
                                {project.detail.research[key].map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        {item.title && <strong>{item.title}</strong>}
                                        {item.text && <p>{item.text}</p>}
                                        {item.image && (
                                            <figure>
                                                <img src={item.image} alt={item.alt || `Research item ${itemIndex + 1}`} />
                                            </figure>
                                        )}
                                    </li>
                                ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}