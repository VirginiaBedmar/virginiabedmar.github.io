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
            { threshold: 0.05 }
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

    return (
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

                {/*<li ref={el => sectionRefs.current[0] = el} className={`research-section ${visibleSections.includes(0) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Benchmark</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>Competidores directos</strong>*/}
                {/*            <p>Include MyInvestor and Indexa, while indirect competitors like Zogo or Cleo focus on financial education and gamification.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <strong>Conclusiones del proceso</strong>*/}
                {/*            <p>Three pillars: gamified education, automated investing, and emotionally intelligent AI.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <strong>SWOT</strong>*/}
                {/*            <p>A SWOT analysis followed the benchmark to surface and rank opportunities based on team votes.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li ref={el => sectionRefs.current[1] = el} className={`research-section ${visibleSections.includes(1) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Encuestas</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>Our SWOT analysis revealed clear gaps in current solutions and concrete opportunities for NUMA. </strong>*/}
                {/*            <p>To validate and prioritize these findings, we complemented it with a user survey.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <strong>Key Insights</strong>*/}
                {/*            <p>*/}
                {/*                Fear, distrust, and lack of knowledge prevent young adults from investing.*/}
                {/*                They want to learn through play, with a friendly AI that guides and adapts.*/}
                {/*                They seek to invest easily and safely, from small amounts, feeling in control.*/}
                {/*                Personalization, automation, and emotional connection are key to engagement.*/}
                {/*            </p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li ref={el => sectionRefs.current[2] = el} className={`research-section ${visibleSections.includes(2) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Usuarios</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>Based on survey findings</strong>*/}
                {/*            <p>We extracted actionable insights to build accurate user personas</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li ref={el => sectionRefs.current[3] = el} className={`research-section ${visibleSections.includes(3) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Mapa de empatía</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>After defining our user personas</strong>*/}
                {/*            <p>We created an empathy map to step into their shoes and understand their deeper motivations.*/}
                {/*                we discovered they aspire to stability and financial control over high returns — valuing trust, clarity, and constant progress.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li ref={el => sectionRefs.current[4] = el} className={`research-section ${visibleSections.includes(4) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Mapa de afinidad</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>Through Marta’s journey, we identified key emotional peaks that shaped her experience.</strong>*/}
                {/*            <p>Moments of Truth: During her first month of use, when she saw real progress and emotional connection with her financial goals, confirming that NUMA’s empathetic and educational tone builds lasting confidence to start paying the premium plan</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li ref={el => sectionRefs.current[5] = el} className={`research-section ${visibleSections.includes(5) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Ideación</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>After defining NUMA’s value proposition</strong>*/}
                {/*            <p>We used the SCAMPER method to explore new ways to innovate the product — rethinking features, flow, and emotional impact to better align with users’ needs and motivations.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li ref={el => sectionRefs.current[6] = el} className={`research-section ${visibleSections.includes(6) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Priorización</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>After the ideation phase</strong>*/}
                {/*            <p>We moved into prioritization using the MoSCoW method to identify which features were essential for NUMA’s MVP and which could be introduced later.*/}
                {/*                This helped us balance feasibility, impact, and user value in the product roadmap.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li ref={el => sectionRefs.current[7] = el} className={`research-section ${visibleSections.includes(7) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Wireframes</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>Based on the information architecture</strong>*/}
                {/*            <p>We created low to mid-fidelity wireframes to visualize the main user flows. These layouts helped us define hierarchy, structure, and interactions before moving into high-fidelity design.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
                {/*<li ref={el => sectionRefs.current[8] = el} className={`research-section ${visibleSections.includes(8) ? 'on-screen' : ''}`}>*/}
                {/*    <h3>Design System</h3>*/}
                {/*    <ul>*/}
                {/*        <li>*/}
                {/*            <strong>After defining the visual identity, we translated its core elements </strong>*/}
                {/*            <p>Colors, typography, and components— into a scalable design system.*/}
                {/*                This system ensured consistency and flexibility across the interface, allowing quick iterations and seamless adaptation through design variables for color modes, states, and responsive layouts.</p>*/}
                {/*        </li>*/}
                {/*        <li>*/}
                {/*            <figure>*/}
                {/*                <img src="/assets/projects/placeholder.png" alt=""/>*/}
                {/*            </figure>*/}
                {/*        </li>*/}
                {/*    </ul>*/}
                {/*</li>*/}
            </ul>
        </div>
    )
}