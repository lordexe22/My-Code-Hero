/*  Carga los componentes del header, por un lado el boton para cambiar el tema actual de la pagina.   *
 *  Por otro lado se carga el componente <TechSelector> que es el responsable de desplegar la lista    *
 *  con todas las tecnologias desarrolladas en la pagina.                                              */

// stores
import useTheme from '../store/useTheme.store.jsx';

// styles
import '../styles/header.style.css';

// components
import TechSelector from "./TechSelector.comp.jsx";
import ThemeButton from "./ThemeButton.comp.jsx";
import LogoHomePage from './LogoHomePage.comp.jsx';

export default function AppHeader({model}){
    const theme = useTheme().globalTheme;
    return(
        <header className={`${theme}`}>
            <TechSelector model={model} theme={theme}/>
            <ThemeButton/>            
            <LogoHomePage/>
        </header>
    );
}