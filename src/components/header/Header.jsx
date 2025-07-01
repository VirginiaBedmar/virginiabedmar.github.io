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
                <h2 className={`${isVisible ? 'on-screen' : ''}`}>
                    🚀 <span className="text-highlight">Virgiverso</span> en construcción...
                </h2>
                <div className={`social-wrapper ${isVisible ? 'on-screen' : ''}`}>
                    <Social/>
                </div>
            </div>
        </header>
    )
};