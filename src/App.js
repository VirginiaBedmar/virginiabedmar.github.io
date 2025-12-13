import React from 'react';
import './App.scss';
import './App.responsive.scss';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/home/Home";

export default () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="*" element={<Home/>}/>
            </Routes>
        </div>
    )
};