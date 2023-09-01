/*   Diseño del icono de la seccion "html"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoHTML(){
    
    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#ededed' : 'black',
    };

    return (
        screenModel.model===3?
        <div className="logo logo-html">
            <img src="/My-Code-Hero/html-icon.jpg" alt="logo html"/>
        </div>
        : 
        <div className="logo logo-html">
            <img src="/My-Code-Hero/html-icon.jpg" alt="logo html"/>
            <div style={logoStyle}>HTML</div>
        </div>
    );
}

