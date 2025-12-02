import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './WorkCard.scss';

export default ({project}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          },
          { threshold: 0.5 }
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
        <div
            ref={elementRef}
            className={`project ${isVisible ? 'on-screen' : ''}`}
            onClick={() => navigate(`/project/${project.slug}`)}
        >
            <figure className="cursor-pointer">
                <img src={project.img}></img>
            </figure>
            <div className="text cursor-pointer">
                <span className="project-name-no-action">{project.name}</span>
                <ul className="technologies">
                    {project.technologies.map((technology, key) =>
                        <li key={key} className={`badge-${technology.toLowerCase()}`}>{technology}</li>)}
                </ul>
                <hr/>
                <p>{project.resume}</p>
            </div>
        </div>
    )
};