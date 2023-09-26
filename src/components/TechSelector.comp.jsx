/*   Contiene una lista con todas las tecnologias desarrolladas en la aplicacion, cada tecnologia incluida   *
 *   en la lista esta formada por un objeto con el nombre de la seccion (la cual se usa para direccionar a   *
 *   la URL correspondiente) y un icono para redireccionar a cada seccion.                                   *
 *                                                                                                           *
 *   Al darle click al icono con la tecnologia actual se despliega una lista de seleccion con todas las      *
 *   tecnologias disponibles, al darles click el usuario sera redireccionado a la URL correspondiente        */

// modules
import React, {useState} from 'react';
import { NavLink, Navigate } from 'react-router-dom';

// stores
import useUrlHandler from '../store/useUrlHandler.store.jsx';
import useTheme from "../store/useTheme.store.jsx";
import useTechSections from '../store/useTechSections.store.jsx';

// logos de las tecnologias desarrolladas
import LogoReactRouter from './LogoReactRouter.comp.jsx';
import LogoReactHookForm from './LogoReactHookForm.comp.jsx';
import LogoHTML from './LogoHTML.comp.jsx';
import LogoExpress from './LogoExpress.comp.jsx';
import LogoCSS from './LogoCSS.comp.jsx'; 
import LogoJS from './LogoJS.comp.jsx';
import LogoTS from './LogoTS.comp.jsx';
import LogoGit from './LogoGit.comp.jsx';
import LogoMongoDB from './LogoMongoDB.comp.jsx';
import LogoMongoose from './LogoMongoose.comp.jsx';

export default function TechSelector({model}){

    // Lista de tecnologias
    const techOptions = [
        // { url: 'css', component: <LogoCSS/> },
        { url: 'express', component: <LogoExpress/> },
        { url: 'git', component: <LogoGit/> },
        // { url: 'html', component: <LogoHTML/> },
        // { url: 'javascript', component: <LogoJS/> },
        { url: 'mongoDB', component: <LogoMongoDB/> },
        { url: 'mongoose', component: <LogoMongoose/> },
        // { url: 'typescript', component: <LogoTS/> },
        { url: 'react-router', component: <LogoReactRouter/> },
        { url: 'react-hook-form', component: <LogoReactHookForm/> },
    ];

    // Store para procesar informacion sobre la url del tech actual
    const { getUrlTech, setUrlTech, getUrlSection, setUrlSection } = useUrlHandler();

    // Store para actualizar la seccion actual por defecto al cambiar el tech
    const { setCurrentSection } = useTechSections();

    // Tema actual de la aplicacion
    const { globalTheme } = useTheme();

    // Busca el objeto correspondiente en techOptions basado en la URL almacenada en el store useTech
    const initialSelectedTech = techOptions.find(tech => tech.url === getUrlTech());

    // selectedTech hace referencia a la tecnologia seleccionada actualmente
    const [selectedTech, setSelectedTech] = useState(initialSelectedTech);
    
    // isOpen indica si la lista esta actualmente desplegada
    const [isOpen, setIsOpen] = useState(false);

    // Abre y cierra la lista con las tecnologias de la aplicacion
    const handleToggleList = () => {
        setIsOpen(!isOpen);
    };

    // Al seleccionar la nueva tecnologia se actualizan la variable de estado, el store y se cierra la lista
    const handleTechSelect = (tech) => {
        setUrlSection('introduccion');
        setCurrentSection('Introducción')
        setUrlTech(tech.url)
        setSelectedTech(tech);
        setIsOpen(false);
    };

    return (
        <div className={`tech-selector ${globalTheme} ${isOpen ? 'displayed' : ''}`}>
            <Navigate to={`/My-Code-Hero/${getUrlTech()}/${getUrlSection()}`}/>
            <div className="selected-tech" onClick={handleToggleList}>
                {selectedTech.component}
            </div>
            {isOpen && (
                <div className="tech-list">
                    {techOptions.map((tech) => (
                        tech.url !== selectedTech.url && (
                            <div
                                key={tech.url}
                                className="tech-option"
                                onClick={() => handleTechSelect(tech)}
                            >
                                <NavLink to={tech.url}>
                                    {tech.component}
                                </NavLink>
                            </div>
                        )
                    ))}
                </div>
            )}
        </div>
    );  
}