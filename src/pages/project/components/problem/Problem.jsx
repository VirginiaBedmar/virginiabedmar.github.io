import React, { useState, useEffect, useRef } from "react";
import "./Problem.scss";

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
        <div id="project-problem" className="full-height" ref={elementRef}>
            <div className="problem-content">
                <ul>
                    <li>
                        <span className="enumerated-title">😞 1 in 10 women affected</span>
                        <p>That’s over 200 million women living with symptoms that impact physical, mental, and reproductive health.</p>
                    </li>
                    <li>
                        <span className="enumerated-title">🚧 70% of women with PCOS go undiagnosed.</span>
                        <p>This leads to years of unmanaged symptoms, emotional distress, and long-term health risks.</p>
                    </li>
                    <li>
                        <span className="enumerated-title">🛑 80% report emotional &  mental health struggles.</span>
                        <p>Anxiety, depression, and low self-esteem are common yet often overlooked in treatment plans.</p>
                    </li>
                </ul>
                <div>
                    <h2 className={`${isVisible ? 'on-screen' : ''}`}>El Problema</h2>
                    <p className={`problem-summary ${isVisible ? 'on-screen' : ''}`}>Over 200 million women worldwide struggle with PCOS facing not only physical symptoms but also mental and emotional strain.</p>
                    <p className={`problem-summary ${isVisible ? 'on-screen' : ''}`}>Support is often generic, fragmented, and impersonal, leaving women to navigate their health alone.</p>
                </div>
            </div>
        </div>
    )
}