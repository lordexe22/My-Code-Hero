// modules
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import AppHeader from "../components/AppHeader.comp.jsx";
import AppNav from "../components/AppNav.comp.jsx";
import AppMain from "../components/AppMain.comp.jsx";

// styles
import '../styles/home.style.css';
import '../styles/logos.style.css';
import '../styles/appContainer.style.css';

// pages
import Home from '../pages/Home.page.jsx'

export default function ScreenLoader(){

    return(
        <>
            <Router>
                <Routes>
                    <Route path="/My-Code-Hero/" element={<Home/>}/>
                    <Route path="/My-Code-Hero/*" 
                           element={
                            <div id="app-container">
                                <AppHeader/>
                                <AppNav/>
                                <AppMain/>
                            </div>}/>
                </Routes>
            </Router>
        
        </>
    );
}