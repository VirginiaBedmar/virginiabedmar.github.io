import React from 'react';
import './Carrousel.scss';

export default ({images}) => {
    return (
        <div className="carrousel">
            <ul>
                {images.map((image, key) =>
                    <li key={key}>
                        <img src={image.src} alt={image.alt}/>
                    </li>
                )}
            </ul>
        </div>
    )
};