import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../config/db.json';

export default () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    // TODO: handle the project not found case
    if (!project) {
        return (
            <div className="container">
                Project not found.
            </div>
        )
    }

    return (
        <div className="container">
            Project {project.name} page works file!
        </div>
    )
};