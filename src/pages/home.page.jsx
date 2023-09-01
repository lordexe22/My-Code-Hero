// components
import LogoHTML from "../components/LogoHTML.comp";
import LogoCSS from "../components/LogoCSS.comp";
import LogoJS from "../components/LogoJS.comp";
import LogoTS from "../components/LogoTS.comp";
import LogoReactRouter from "../components/LogoReactRouter.comp";
import ThemeButton from "../components/ThemeButton.comp";

// styles
import '../styles/home.style.css'

export default function Home(){
    return(
        <div>
            <h2>Bienvenido</h2>
            <ThemeButton/>
            <LogoHTML/>
            <LogoCSS/>
            <LogoJS/>
            <LogoTS/>
            <LogoReactRouter/>
        </div>
    );
}