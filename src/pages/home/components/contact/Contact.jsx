import React, { useState, useEffect, useRef } from 'react';
import './Contact.scss';
import './Contact.responsive.scss';
import Social from '../../../../components/social/Social';

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
          { threshold: 0.8 }
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
        <section id="contact" ref={elementRef}>
            <div className="center-info">
                <h2 className={`${isVisible ? 'on-screen' : ''}`}>Contacta conmigo.</h2>
                <p className={`${isVisible ? 'on-screen' : ''}`}>
                    Actualmente especializada en <span className="highlight-text">Diseño UX/UI</span>.<br/>
                    Contacta conmigo para saber más sobre tus proyectos.
                </p>
                <div className={`social-wrapper ${isVisible ? 'on-screen' : ''}`}>
                    <Social extraClass="justify-content-center"/>
                </div>
            </div>
        </section>
    )
};