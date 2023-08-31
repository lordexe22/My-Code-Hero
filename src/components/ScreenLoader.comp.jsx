// components
import AppHeader from "./AppHeader.comp.jsx";
import AppNav from "./AppNav.comp.jsx";

// styles
import '../styles/appContainer.style.css'

export default function ScreenLoader(){

    return(
        <div id="app-container" className="dark">
            <AppHeader/>
            <AppNav/>
            <main></main>
        </div>
    );
}