import React, { useState, useEffect, useRef } from 'react';
import './About.scss';
import './About.responsive.scss';

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
          { threshold: 0.4 }
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
        <section id="about" ref={elementRef}>
            <h2 className={`${isVisible ? 'on-screen' : ''}`}>⚡ Sobre mí</h2>
            <div className="content">
                <div className={`text-info ${isVisible ? 'on-screen' : ''}`}>
                    <p>
                        Suelo trabajar por <span className="highlight-text">Málaga y alrededores</span>.
                        En mi día a día me dedico a diseñar <span className="highlight-text">experiencias digitales</span> centradas
                        en el usuario, creando interfaces intuitivas, atractivas y funcionales.
                        Me encargo de transformar ideas y necesidades en <span className="highlight-text">soluciones visuales</span> efectivas,
                        definiendo flujos, estructuras y componentes <span className="highlight-text">que faciliten la interacción</span>.
                    </p>
                    <p>
                        Mi experiencia como <span className="highlight-text">diseñadora</span> me ha enseñado que
                        todo proyecto es un problema esperando a ser resuelto, por tanto, significa una nueva 
                        oportunidad para aprender conceptos y nuevas técnicas que podré aplicar a mis otros
                        proyectos.
                    </p>
                    <p>
                    Siempre estoy experimentando, probando y nunca me canso de aprender.
                    </p>
                </div>
                <div className={`image-info ${isVisible ? 'on-screen' : ''}`}>
                    <img className="dots" src="assets/images/dots.svg"/>
                    <figure>
                        <img src="assets/images/avatar.jpg" alt="Virginia Bedmar"/>
                    </figure>
                </div>
            </div>
        </section>
    )
};