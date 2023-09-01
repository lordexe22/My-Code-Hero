/*   Diseño del icono de la seccion "javascript"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoJS(){
    
    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#ededed' : 'black',
    };

    return (
        screenModel.model===3?
        <div className="logo logo-js">
            <img src="/My-Code-Hero/js-icon.jpg" alt="logo js"/>
        </div>
        : 
        <div className="logo logo-js">
            <img src="/My-Code-Hero/js-icon.jpg" alt="logo js"/>
            <div style={logoStyle}>JavaScript</div>
        </div>
    );
}

