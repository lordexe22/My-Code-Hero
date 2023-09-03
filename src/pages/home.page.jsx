// components
import LogoHTML from "../components/LogoHTML.comp";
import LogoCSS from "../components/LogoCSS.comp";
import LogoGit from "../components/LogoGit.comp";
import LogoJS from "../components/LogoJS.comp";
import LogoTS from "../components/LogoTS.comp";
import LogoReactRouter from "../components/LogoReactRouter.comp";
import ThemeButton from "../components/ThemeButton.comp";

// styles
import '../styles/home.style.css'

// store
import useUrlHandler from "../store/useUrlHandler.store";
import useTheme from "../store/useTheme.store";
import useScreenModel from "../store/useScreenModel.store";

// modules
import { useNavigate } from "react-router-dom";

export default function Home(){

    // instanciamos el hook useNavigate
    const navigate = useNavigate();

    // obtenemos los métodos para actualizar el tech y la seccion
    const { setUrlTech, setUrlSection, updateUrlPage } = useUrlHandler();

    // al darle click a un icono, actualizamos el tech, la sección y redireccionamos
    const clickHandler = (tech) => {
        setUrlTech(tech);
        setUrlSection('introduccion');
        updateUrlPage();
        navigate(`/My-Code-Hero/${tech}/introduccion`);
    }

    return(
        <div>
            <h2>Bienvenido</h2>
            <ThemeButton/>
            <div onClick={() => clickHandler('html')}><LogoHTML/></div>
            <div onClick={() => clickHandler('css')}><LogoCSS/></div>
            <div onClick={() => clickHandler('git')}><LogoGit/></div>
            <div onClick={() => clickHandler('javascript')}><LogoJS/></div>
            <div onClick={() => clickHandler('typescript')}><LogoTS/></div>
            <div onClick={() => clickHandler('react-router')}><LogoReactRouter/></div>
        </div>
    );
}