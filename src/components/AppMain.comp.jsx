/*  Cara la página correspondiente acorde a los valores almacenados en el store useUrlHandler  */

// modules
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

// styles
import '../styles/main.style.css'

// pages html
import IntroduccionHtml from "../pages/HTML/Introduccion_html.page.jsx";
// pages css
import IntroduccionCss from "../pages/CSS/Introduccion_css.page.jsx";
// pages javascript
import IntroduccionJavaScript from "../pages/JavaScript/Introduccion_javaScript.page.jsx";
// pages typescript
import IntroduccionTypeScript from "../pages/TypeScript/Introduccion_typeScript.page.jsx";
// pages react router
import IntroduccionReactRouter from "../pages/React-Router/Introduccion_reactRouter.page.jsx";
import InstalacionReactRouter from "../pages/React-Router/Instalacion_reactRouter.page.jsx";
import EstructuraBasicaReactRouter from "../pages/React-Router/EstructuraBasica_reactRouter.page.jsx";
// pages git
import IntroduccionGit from "../pages/Git/Introduccion_git.page.jsx";
import InstalacionGit from "../pages/Git/Instalacion_git.page.jsx";
import ConfiguracionGit from "../pages/Git/Configuracion_git.page";
import RepositorioGit from "../pages/Git/Repositorio_git.page";
// pages react hook form
import IntroduccionReactHookForm from "../pages/React-Hook-Form/Introduccion_reactHookForm.page.jsx";
// pages express
import IntroduccionExpress from "../pages/Express/Introduccion_express.page.jsx";

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
                    <Route path="instalacion" element={<InstalacionGit/>}></Route>
                    <Route path="configuracion" element={<ConfiguracionGit/>}></Route>
                    <Route path="repositorio" element={<RepositorioGit/>}></Route>
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