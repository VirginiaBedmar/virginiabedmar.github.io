import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../config/db.json';
import Header from "./components/header/Header";
import Resume from "./components/resume/Resume";
import Footer from "../../components/footer/Footer";
import Problem from "./components/problem/Problem";
import Solution from "./components/solution/Solution";
import Summary from "./components/summary/Summary";

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
                <Resume project={project}/>
                <Problem project={project}/>
                <Solution project={project}/>
                <Summary project={project}/>
            </main>
            <Footer/>
        </div>
    )
};