import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../config/db.json';
import Header from "./components/header/Header";
import Resume from "./components/resume/Resume";
import Footer from "../../components/footer/Footer";

export default () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);
    if (!project) {
        window.location.href = '/';
    }

    return (
        <div className="container">
            {/*<Header project={project} />*/}
            <main>
                <Resume project={project} />
            </main>
            <Footer/>
        </div>
    )
};