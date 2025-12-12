import React from 'react';
import './Solution.scss';
import './Solution.responsive.scss';

export default ({project}) => {
    return (
        <div id="solution">
            <h3>La solución</h3>
            <p className="summary-high">
                <span>Plataforma web que permite planificar, reservar y organizar viajes completos</span> desde un solo lugar, integrando alojamiento, transporte y actividades.
            </p>
            <ul className="details">
                <li>
                    <figure>
                        <img src="./assets/images/aventra/search.png" alt="Formulario de búsqueda"/>
                    </figure>
                    <div className="detailed-text">
                        Lorem ipsum dolor sit amet consectetur. Eu sapien volutpat at feugiat nibh scelerisque integer lectus nunc. Sit pulvinar gravida amet nulla. Non suspendisse sit velit volutpat turpis nunc netus sit. Pharetra dictumst velit egestas sagittis mauris amet felis. Aliquet nulla interdum quam egestas. Tellus viverra accumsan commodo nunc nunc varius tempus lacus. Tellus cursus quis gravida euismod ut molestie sed tortor. Tellus sit nunc amet rhoncus sed donec at praesent velit. Vel sit ipsum ornare at nascetur elit. Maecenas sapien pellentesque nisi interdum. Imperdiet sit luctus lacus lectus dignissim nulla fermentum eget morbi. Sit nulla.
                    </div>
                </li>
                <li>
                    <div className="detailed-text">
                        Lorem ipsum dolor sit amet consectetur. Eu sapien volutpat at feugiat nibh scelerisque integer
                        lectus nunc. Sit pulvinar gravida amet nulla. Non suspendisse sit velit volutpat turpis nunc netus sit. Pharetra dictumst velit egestas sagittis mauris amet felis. Aliquet nulla interdum quam egestas. Tellus viverra accumsan commodo nunc nunc varius tempus lacus. Tellus cursus quis gravida euismod ut molestie sed tortor. Tellus sit nunc amet rhoncus sed donec at praesent velit. Vel sit ipsum ornare at nascetur elit. Maecenas sapien pellentesque nisi interdum. Imperdiet sit luctus lacus lectus dignissim nulla fermentum eget morbi. Sit nulla.
                    </div>
                    <video autoPlay="autoplay" loop="loop" muted>
                        <source src="./assets/videos/aventra/suggestions.mp4" type="video/mp4"/>
                    </video>
                </li>
                <li>
                    <figure>
                        <img src="./assets/images/aventra/results.png" alt="Página de resultados"/>
                    </figure>
                    <div className="detailed-text">
                        Lorem ipsum dolor sit amet consectetur. Eu sapien volutpat at feugiat nibh scelerisque integer lectus nunc. Sit pulvinar gravida amet nulla. Non suspendisse sit velit volutpat turpis nunc netus sit. Pharetra dictumst velit egestas sagittis mauris amet felis. Aliquet nulla interdum quam egestas. Tellus viverra accumsan commodo nunc nunc varius tempus lacus. Tellus cursus quis gravida euismod ut molestie sed tortor. Tellus sit nunc amet rhoncus sed donec at praesent velit. Vel sit ipsum ornare at nascetur elit. Maecenas sapien pellentesque nisi interdum. Imperdiet sit luctus lacus lectus dignissim nulla fermentum eget morbi. Sit nulla.
                    </div>
                </li>
                <li>
                    <div className="detailed-text">
                        Lorem ipsum dolor sit amet consectetur. Eu sapien volutpat at feugiat nibh scelerisque integer
                        lectus nunc. Sit pulvinar gravida amet nulla. Non suspendisse sit velit volutpat turpis nunc netus sit. Pharetra dictumst velit egestas sagittis mauris amet felis. Aliquet nulla interdum quam egestas. Tellus viverra accumsan commodo nunc nunc varius tempus lacus. Tellus cursus quis gravida euismod ut molestie sed tortor. Tellus sit nunc amet rhoncus sed donec at praesent velit. Vel sit ipsum ornare at nascetur elit. Maecenas sapien pellentesque nisi interdum. Imperdiet sit luctus lacus lectus dignissim nulla fermentum eget morbi. Sit nulla.
                    </div>
                    <video autoPlay="autoplay" loop="loop" muted>
                        <source src="./assets/videos/aventra/carrousel.mp4" type="video/mp4"/>
                    </video>
                </li>
            </ul>
        </div>
    )
};