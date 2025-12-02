import React, { useState, useEffect, useRef } from 'react';
import './Header.scss';
import './Header.responsive.scss';
import Social from '../social/Social';

export default () => {
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
        <header className="full-height" ref={elementRef}>
            <div className="header-wrapper">
                <div className={`intro ${isVisible ? 'on-screen' : ''}`}>
                    <img src="/assets/images/dots.svg"/>
                    <p className="highlight-text">
                        ¡Hola! Yo soy_
                    </p>
                    <h1>Virginia Bedmar.</h1>
                </div>
                <h2 className={`${isVisible ? 'on-screen' : ''}`}>
                    <span className="text-highlight">Diseñadora Gráfica · UX/UI</span> malagueña especializada en la creación<br/>
                    de experiencias digitales atractivas y funcionales.
                </h2>
                <ul className={`current-main-info ${isVisible ? 'on-screen' : ''}`}>
                    <li>
                        🚀 Actualmente especializada en Diseño UX/UI (Research / Design System / Prototipado).
                    </li>
                </ul>
                <div className={`social-wrapper ${isVisible ? 'on-screen' : ''}`}>
                    <Social/>
                </div>
            </div>
        </header>
    )
};