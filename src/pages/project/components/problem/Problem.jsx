import React from 'react';
import './Problem.scss';
import './Problem.responsive.scss';

export default ({project}) => {
    return (
        <div id="problem" className="full-height">
            <div className="problem-wrapper">
                <ul className="key-facts">
                    <li>
                        66% of people fail to stick to new habits beyond 3 months.
                    </li>
                    <li>
                        Most habit apps focus only on reminders, ignoring emotional triggers and motivation dips.
                    </li>
                    <li>
                        Existing tools lack real-time, physical reinforcement leaving a gap between intention and action.
                    </li>
                </ul>
                <div className="key-text">
                    <h3>El problema</h3>
                    <p className="summary">
                        Hoy en día cualquiera puede viajar e invertir su tiempo libre en conocer lugares nuevos y llenos de experiencias inolvidables. No obstante, estos viajeros se enfrentan constantemente a dificultades como la desorganización y dispersión de la información, puesto que suelen usar diferentes plataformas para reservar alojamientos, vuelos o actividades, algo que genera una clara confusión y perdida de tiempo.
                    </p>
                    <p className="summary">
                        Esta fragmentación favorece a grandes plataformas, perjudica a negocios locales y limita la exposición de los viajeros a nuevas culturas y experiencias. La planificación de viajes es complicada por la falta de una plataforma unificada, lo que genera pérdida de tiempo, estrés y dificulta acceder a información clara y actividades personalizadas.
                    </p>
                </div>
            </div>
        </div>
    )
};