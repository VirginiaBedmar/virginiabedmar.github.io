import React from 'react';
import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Work from "../../components/work/Work";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/footer/Footer";

export default () => {
    return (
        <div className="container">
            <Header/>
            <main>
                <About/>
                <Work/>
                <Contact/>
                <Footer/>
            </main>
        </div>
    )
};