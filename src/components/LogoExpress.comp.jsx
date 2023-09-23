/*   Diseño del icono de la seccion "html"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoExpress(){
    
    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#ededed' : 'black',
    };

    return (
        screenModel.model===3?
        <div className="logo logo-express">
            <img src="/My-Code-Hero/express-icon.jpg" alt="logo express"/>
        </div>
        : 
        <div className="logo logo-express">
            <img src="/My-Code-Hero/express-icon.jpg" alt="logo express"/>
            <div style={logoStyle}>Express 4.x</div>
        </div>
    );
}

