// components
import LogoHTML from "../components/LogoHTML.comp";
import LogoCSS from "../components/LogoCSS.comp";
import LogoExpress from "../components/LogoExpress.comp";
import LogoGit from "../components/LogoGit.comp";
import LogoJS from "../components/LogoJS.comp";
import LogoTS from "../components/LogoTS.comp";
import LogoReactRouter from "../components/LogoReactRouter.comp";
import LogoReactHookForm from "../components/LogoReactHookForm.comp";
import ThemeButton from "../components/ThemeButton.comp";
import LogoMongoDB from "../components/LogoMongoDB.comp";
import LogoMongoose from "../components/LogoMongoose.comp";


// styles
import '../styles/Home.style.css'

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
        <>
            <h2>Bienvenido</h2>
            <ThemeButton/>
            <div className="tech-container">
                {/* <div className="tech-item" onClick={() => clickHandler('html')}><LogoHTML/></div> */}
                {/* <div className="tech-item" onClick={() => clickHandler('css')}><LogoCSS/></div> */}
                <div className="tech-item" onClick={() => clickHandler('express')}><LogoExpress/></div>
                <div className="tech-item" onClick={() => clickHandler('git')}><LogoGit/></div>
                <div className="tech-item" onClick={() => clickHandler('mongoDB')}><LogoMongoDB/></div>
                <div className="tech-item" onClick={() => clickHandler('mongoose')}><LogoMongoose/></div>
                {/* <div className="tech-item" onClick={() => clickHandler('javascript')}><LogoJS/></div> */}
                {/* <div className="tech-item" onClick={() => clickHandler('typescript')}><LogoTS/></div> */}
                <div className="tech-item" onClick={() => clickHandler('react-hook-form')}><LogoReactHookForm/></div>
                <div className="tech-item" onClick={() => clickHandler('react-router')}><LogoReactRouter/></div>
            </div>
        </>
    );
}