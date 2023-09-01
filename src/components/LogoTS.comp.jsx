/*   Diseño del icono de la seccion "javascript"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoTS(){

    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#ededed' : 'black',
    };

    return (
        screenModel.model===3?
        <div className="logo logo-ts">
            <img src="/My-Code-Hero/ts-icon.jpg" alt="logo ts"/>
        </div>
        : 
        <div className="logo logo-ts">
            <img src="/My-Code-Hero/ts-icon.jpg" alt="logo ts"/>
            <div style={logoStyle}>TypeScript</div>
        </div>
    );
}

