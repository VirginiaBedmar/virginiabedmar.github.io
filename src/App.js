import React from 'react';
import './App.scss';
import './App.responsive.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";
import Resolver from "./pages/project/components/resolver/Resolver";


export default () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:slug" element={<Resolver/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    )
};