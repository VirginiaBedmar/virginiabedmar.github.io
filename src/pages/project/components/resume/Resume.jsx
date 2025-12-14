import React from "react";
import "./Resume.scss";
import "./Resume.responsive.scss";

export default ({project}) => {
    return (
        <div id="resume" className="full-height">
            <h2>{project.detail.resume.title}</h2>
            <p className="summary">{project.detail.resume.summary}</p>
            <div className="details">
                <div>
                    <ul className="tags">
                        {
                            project.detail.resume.tags.map((tag, index) => (
                                <li key={index}>{tag}</li>
                            ))
                        }
                    </ul>
                    <ul className="keywords">
                        {
                            project.detail.resume.features.map((feature, index) => (
                                <li key={index}><strong>{feature.high}</strong><span>{feature.thin}</span></li>
                            ))
                        }
                    </ul>
                </div>
                <div>
                    <div className="visual-identity">
                        <div className="visual-identity-details">
                            <div className="typography">
                                <div>
                                    <span className="label">Tipografía</span>
                                    <strong style={{fontFamily: project.detail.resume.typography.family}}>
                                        {project.detail.resume.typography.name}
                                    </strong>
                                    <span style={{fontFamily: project.detail.resume.typography.family}}>
                                        {project.detail.resume.typography.name}
                                    </span>
                                </div>
                                <div className="demo">
                                    <span style={{fontFamily: project.detail.resume.typography.family}}>Aa</span>
                                </div>
                            </div>
                        </div>
                        <ul className="color-palette">
                            {
                                project.detail.resume.colorPalette.map((color, index) => (
                                    <li key={index} style={{backgroundColor: color, bottom: `${(project.detail.resume.colorPalette.length - index) * 2.8}rem`}}>
                                        <span>{color}</span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="identity-quote">
                        <figure>
                            <img className="quote-image" src={project.img} alt={project.name}/>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
};
