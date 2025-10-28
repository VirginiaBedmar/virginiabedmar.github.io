import React from 'react';
import './Footer.scss';
import './Footer.responsive.scss';

export default () => {
    const year = (new Date()).getFullYear();
    return (
        <footer>
            <p>
                Diseñado con ❤️ por <span className="highlight-text">Virginia Bedmar</span> ·
                Copyright © {year} · Todos los derechos reservados.
            </p>
        </footer>
    )
};