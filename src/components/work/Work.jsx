import React, { useState, useEffect, useRef } from 'react';
import './Work.scss';
import './Work.responsive.scss';
import WorkCard from '../work-card/WorkCard';

const projects = [
    {
        img: "assets/images/aventra.png",
        link: "#", //TODO: add real link
        name: "Aventra",
        technologies: ["Web", "Responsive", "IA"],
        resume: "Plataforma web que centraliza la planificación, reserva y organización de viajes impulsada por la IA."
    },
    {
        img: "assets/images/mentalizt.png",
        link: "#", //TODO: add real link
        name: "MentaliZT",
        technologies: ["Mobile"],
        resume: "Herramienta digital para gestionar el estrés y la ansiedad, ofreciendo apoyo, información y recursos de recuperación."
    },
    {
        img: "assets/images/arteo.png",
        link: "#", //TODO: add real link
        name: "Arteo",
        technologies: ["Mobile", "IA"],
        resume: "App que facilita descubrir arte urbano y patrimonio local de forma accesible y divertida.",
    },
];

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
        <section id="work" ref={elementRef}>
            <div className="projects-grid">
                <div className={`info ${isVisible ? 'on-screen' : ''}`}>
                    <h2>Mi espacio creativo.</h2>
                    <p>Algunos de los proyectos en los que he trabajado.</p>
                </div>
                {projects.map((project, key) => (<WorkCard key={key} project={project}/>))}
            </div>
        </section>
    )
};