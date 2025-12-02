import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../config/db.json';
import Header from "./components/header/Header";

export default () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);
    if (!project) {
        window.location.href = '/';
    }

    return (
        <div className="container">
            <Header project={project} />
            <main>
                The rest of the research.
            </main>
        </div>
    )
};