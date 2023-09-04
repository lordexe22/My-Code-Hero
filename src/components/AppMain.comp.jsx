/*  Cara la página correspondiente acorde a los valores almacenados en el store useUrlHandler  */

// modules
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// styles
import '../styles/main.style.css'

// pages
import IntroduccionHtml from "../pages/HTML/IntroduccionHtml.page.jsx";
import IntroduccionCss from "../pages/CSS/IntroduccionCss.page.jsx";
import IntroduccionJavaScript from "../pages/JavaScript/IntroduccionJavaScript.page.jsx";
import IntroduccionTypeScript from "../pages/TypeScript/IntroduccionTypeScript.page.jsx";
// react router pages
import IntroduccionReactRouter from "../pages/React-Router/Introduccion_ReactRouter.page";
import InstalacionReactRouter from "../pages/React-Router/Instalacion_ReactRouter.page";
import EstructuraBasicaReactRouter from "../pages/React-Router/EstructuraBasica_ReactRouter.page";
// git pages
import IntroduccionGit from "../pages/Git/Introduccion_Git.page";
// react hook form pages
import IntroduccionReactHookForm from "../pages/React-Hook-Form/Introduccion_ReactHookForm.page";
// express pages
import IntroduccionExpress from "../pages/Express/IntroduccionExpress.page";

// store
import useTheme from '../store/useTheme.store.jsx';

export default function AppMain(){
    const {globalTheme} = useTheme();

    return(
        <main className={globalTheme}>
            <Routes>
                {/* HTML pages */}
                <Route path="/html" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionHtml/>}></Route>
                </Route>
                
                {/* CSS pages */}
                <Route path="/css" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionCss/>}></Route>
                    
                </Route>

                {/* Express pages */}
                <Route path="/express" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionExpress/>}></Route>
                </Route>

                {/* git pages */}
                <Route path="/git" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionGit/>}></Route>
                </Route>

                {/* JavaScript pages */}
                <Route path="/javascript" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionJavaScript/>}></Route>
                </Route>

                {/* TypeScript pages */}
                <Route path="/typescript" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionTypeScript/>}></Route>
                </Route>

                {/* React Router Pager */}
                <Route path="/react-router" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionReactRouter/>}></Route>
                    <Route path="instalacion" element={<InstalacionReactRouter/>}></Route>
                    <Route path="estructura-basica" element={<EstructuraBasicaReactRouter/>}></Route>
                </Route>

                {/* React Hook Form pages */}
                <Route path="/react-hook-form" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionReactHookForm/>}></Route>
                </Route>

            </Routes>
        </main>
    );
}