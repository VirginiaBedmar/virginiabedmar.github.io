import React from 'react';
import './Resume.scss';
import './Resume.responsive.scss';

export default ({project}) => {
    return (
        <div id="resume" className="full-height">
            <h2>Lorem ipsum dolor sit amet consectetur. Eu sapien volutpat at feugiat nibh scelerisque integer lectus nunc. Sit pulvinar gravida amet nulla.</h2>
            <p className="summary">
                Lorem ipsum dolor sit amet consectetur. Eu sapien volutpat at feugiat nibh scelerisque integer lectus nunc. Sit pulvinar gravida amet nulla. Non suspendisse sit velit volutpat turpis nunc netus sit. Pharetra dictumst velit egestas sagittis mauris amet felis. Aliquet nulla interdum quam egestas. Tellus viverra accumsan commodo nunc nunc varius tempus lacus. Tellus cursus quis gravida euismod ut molestie sed tortor. Tellus sit nunc amet rhoncus sed donec at praesent velit. Vel sit ipsum ornare at nascetur elit. Maecenas sapien pellentesque nisi interdum. Imperdiet sit luctus lacus lectus dignissim nulla fermentum eget morbi. Sit nulla.
            </p>
            <div className="details">
                <div>
                    <ul className="tags">
                        <li>2025</li>
                        <li>Web Design</li>
                        <li>Figma</li>
                        <li>UX/UI</li>
                        <li>Design Thinking</li>
                        <li>Individual</li>
                        <li>Design System</li>
                        <li>Prototyping</li>
                    </ul>
                    <ul className="keywords">
                        <li>
                            <strong>+4</strong><span>pantallas</span>
                        </li>
                        <li>
                            <strong>15</strong><span>días</span>
                        </li>
                        <li>
                            <strong>UX/UI</strong><span>design</span>
                        </li>
                        <li>
                            <strong>Product</strong><span>design</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="visual-identity">
                        <div className="visual-identity-details">
                            <div className="typography">
                                <div>
                                    <span className="label">Tipografía</span>
                                    <strong>Poppins</strong>
                                    <span>Poppins</span>
                                </div>
                                <div className="demo">
                                    <span>Aa</span>
                                </div>
                            </div>
                        </div>
                        <ul className="color-palette">
                            <li style={{backgroundColor: "#959772", bottom: "5.6rem"}}>
                                <span>#959772</span>
                            </li>
                            <li style={{backgroundColor: "#02C39A", bottom: "2.8rem"}}>
                                <span>#02C39A</span>
                            </li>
                            <li style={{backgroundColor: "#00A896", bottom: "0rem"}}>
                                <span>#00A896</span>
                            </li>
                        </ul>
                    </div>
                    <div className="identity-quote">
                        <figure>
                            <img className="quote-image" src={project.img} alt={project.name} />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
};