/*  Carga los enlaces necesarios para navegar entre las distintas secciones de cada una
    de las diferentes tecnologias que existen en la página                           */

// modules
import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';
import useTechSections from '../store/useTechSections.store.jsx';
import useUrlHandler from '../store/useUrlHandler.store.jsx';

// styles
import '../styles/nav.style.css'

export default function AppNav(){

    const theme = useTheme().globalTheme; 
    const screenModel = useScreenModel();
    const techSections = useTechSections();

    const currentTech = useUrlHandler().getUrlTech(); // tech actual
    const techData = techSections[`${currentTech}`]; // categorias y secciones del tech

    // Store para procesar informacion sobre la url de la seccion actual
    const { setUrlSection } = useUrlHandler();
    // Store para almacenar el titulo de la seccion actual
    const { setCurrentSection, getCurrentSection } = useTechSections();

    // Variable de estado que indica si el menu desplegable de las secciones esta abierto o no
    const [ menuIsOpen, setMenuIsOpen ] = useState(false);

    const handleMenuState = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return(
        screenModel.model===1 || screenModel.model===2 
        ? // Modelo del nav desplegable
        <nav className={`${theme}`}>
            <div className='current-section' onClick={handleMenuState}>
                <h3>{getCurrentSection()}</h3>
            </div>
            { menuIsOpen ? 
            <div className='section-list'>
            <ul>
                {techData.map((categoryData) => (
                    <li key={categoryData.category}>
                    <h3>{categoryData.category}</h3>
                    <ul>
                        {categoryData.sections.map((section) => (
                        <li key={section.text}>
                            <NavLink 
                                className={section.text===getCurrentSection()?'active':''}
                                onClick={ () => {
                                    setUrlSection(section.url);
                                    setCurrentSection(section.text);
                                    handleMenuState();
                                }} 
                                to={`${localStorage.getItem('urlTech')}/${section.url}`}>
                                    {section.text}
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                    </li>
                ))}
            </ul>
            </div> 
            :null }
        </nav>
        : // Modelo del nav fijo 
        <nav className={`${theme}`}>
            <ul>
                {techData.map((categoryData) => (
                    <li key={categoryData.category}>
                    <h3>{categoryData.category}</h3>
                    <ul>
                        {categoryData.sections.map((section) => (
                        <li key={section.text}>
                            <NavLink 
                                onClick={ () => {
                                    setUrlSection(section.url);
                                    setCurrentSection(section.text);
                                }} 
                                to={`${localStorage.getItem('urlTech')}/${section.url}`}>
                                    {section.text}
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                    </li>
                ))}
            </ul>
        </nav>

    );
}