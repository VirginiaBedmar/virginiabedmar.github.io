import React from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import projects from '../../config/db.json';
import Header from "./components/header/Header";
import Footer from "../../components/footer/Footer";
import './Project.scss';

export default () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const project = projects.find(p => p.slug === slug);
    if (!project) {
        window.location.href = '/';
    }

    return (
        <div className="container">
            <div className="cursor-pointer close-button" onClick={() => navigate('/')}></div>
            <Header project={project}/>
            <main></main>
            <Footer/>
        </div>
    )
};