/*   Diseño del icono de la seccion "css"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoCSS(){

    const {model} = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#ededed' : 'black',
    };

    return (
        model===3?
        <div className="logo logo-css">
            <img src="/My-Code-Hero/css-icon.jpg" alt="logo css"/>
        </div>
        : 
        <div className="logo logo-css">
            <img src="/My-Code-Hero/css-icon.jpg" alt="logo css"/>
            <div style={logoStyle}>CSS</div>
        </div>
    );
}

