// components
import AppHeader from "./AppHeader.comp.jsx";
import AppNav from "./AppNav.comp.jsx";
import AppMain from "./AppMain.comp.jsx";

// styles
import '../styles/appContainer.style.css'

export default function ScreenLoader(){

    return(
        <div id="app-container" className="dark">
            <AppHeader/>
            <AppNav/>
            <AppMain/>
        </div>
    );
}