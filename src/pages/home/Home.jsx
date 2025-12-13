import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import Header from "./components/header/Header";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Footer from "../../components/footer/Footer";
import About from "./components/about/About";
import ProjectModal from "../../components/project-modal/ProjectModal";

export default () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const scrollPositionRef = useRef(0);

    useEffect(() => {
        if (selectedProject) {
            scrollPositionRef.current = window.scrollY;
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollPositionRef.current}px`;
            document.body.style.width = '100%';
        } else {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            window.scrollTo(0, scrollPositionRef.current);
        }
    }, [selectedProject]);

    return (
        <>
            <div className="container overflow-hidden">
                <Header/>
                <main>
                    <About/>
                    <Work onProjectSelect={setSelectedProject}/>
                    <Contact/>
                    <Footer/>
                </main>
            </div>
            <CSSTransition
                in={selectedProject !== null}
                timeout={300}
                classNames="work-detail"
                unmountOnExit
            >
                <ProjectModal selectedProject={selectedProject} onClose={() => setSelectedProject(null)}/>
            </CSSTransition>
        </>
    )
};
