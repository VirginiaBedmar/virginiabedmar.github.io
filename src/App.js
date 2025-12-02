import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import './App.responsive.scss';
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";

export default () => {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/project/:slug" element={<Project/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    )
};