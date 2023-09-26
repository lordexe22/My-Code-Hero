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

// pages express
import IntroduccionExpress from "../pages/Express/Introduccion_express.page.jsx";
import InstalacionExpress from "../pages/Express/Instalacion_express.page";
import ConceptosBasicosExpress from "../pages/Express/ConceptosBasicos_express.page";
import EstructuraBasicaExpress from "../pages/Express/EstructuraBasica_express.page";

// pages git
import IntroduccionGit from "../pages/Git/Introduccion_git.page";
import InstalacionGit from "../pages/Git/Instalacion_git.page";
import ConfiguracionGit from "../pages/Git/Configuracion_git.page";
import RepositorioGit from "../pages/Git/Repositorio_git.page";
import ColaboradoresGit from "../pages/Git/Colaboradores_git.page";
import StagingAreaGit from "../pages/Git/StagingArea_git.page";
import CommitGit from "../pages/Git/Commit_git.page";
import RepositorioRemotoGit from "../pages/Git/RepositorioRemoto_git.page";
import BranchesGit from "../pages/Git/Branches_git.page";
import TagsGit from "../pages/Git/Tags_git.page";

// pages mongoDB


// pages mongoose
import IntroduccionMongoose from "../pages/Mongoose/Introduccion_Mongoose.page";
import InstalacionMongoose from "../pages/Mongoose/Instalacion_Mongoose.page";
import EstructuraBasicaMongoose from "../pages/Mongoose/EstructuraBasica_Mongoose.page";

// pages react hook form
import IntroduccionReactHookForm from "../pages/React-Hook-Form/Introduccion_ReactHookForm.page";
import InstalacionReactHookForm from "../pages/React-Hook-Form/Instalacion_ReactHookForm.page";
import FormularioBasicoReactHookForm from "../pages/React-Hook-Form/FormularioBasico_ReactHookForm.page";


// store
import useTheme from '../store/useTheme.store.jsx';

export default function AppMain(){
    const {globalTheme} = useTheme();

    return(
        <main className={globalTheme}>
            <Routes>
                {/* HTML pages */}
                {/* <Route path="/html" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionHtml/>}></Route>
                </Route> */}
                
                {/* CSS pages */}
                {/* <Route path="/css" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionCss/>}></Route>
                </Route> */}

                {/* Express pages */}
                <Route path="/express" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionExpress/>}></Route>
                    <Route path="instalacion" element={<InstalacionExpress/>}></Route>
                    <Route path="conceptos-basicos" element={<ConceptosBasicosExpress/>}></Route>
                    <Route path="estructura-basica" element={<EstructuraBasicaExpress/>}></Route>
                </Route>

                {/* git pages */}
                <Route path="/git" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionGit/>}></Route>
                    <Route path="instalacion" element={<InstalacionGit/>}></Route>
                    <Route path="configuracion" element={<ConfiguracionGit/>}></Route>
                    <Route path="repositorio" element={<RepositorioGit/>}></Route>
                    <Route path="colaboradores" element={<ColaboradoresGit/>}></Route>
                    <Route path="staging-area" element={<StagingAreaGit/>}></Route>
                    <Route path="commit" element={<CommitGit/>}></Route>
                    <Route path="repositorio-remoto" element={<RepositorioRemotoGit/>}></Route>
                    <Route path="branches" element={<BranchesGit/>}></Route>
                    <Route path="tags" element={<TagsGit/>}></Route>
                </Route>

                {/* JavaScript pages */}
                {/* <Route path="/javascript" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionJavaScript/>}></Route>
                </Route> */}

                {/* TypeScript pages */}
                {/* <Route path="/typescript" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionTypeScript/>}></Route>
                </Route> */}

                {/* TypeScript pages */}
                <Route path="/mongoose" element={<Outlet/>}>
                    <Route path="introduccion" element={<IntroduccionMongoose/>}></Route>
                    <Route path="instalacion" element={<InstalacionMongoose/>}></Route>
                    <Route path="estructura-basica" element={<EstructuraBasicaMongoose/>}></Route>
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
                    <Route path="instalacion" element={<InstalacionReactHookForm/>}></Route>
                    <Route path="formulario-basico" element={<FormularioBasicoReactHookForm/>}></Route>
                </Route>

            </Routes>
        </main>
    );
}