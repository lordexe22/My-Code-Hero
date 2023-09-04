/*   Diseño del icono de la seccion "javascript"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoReactHookForm(){
    
    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#ededed' : 'black',
    };

    return (
        screenModel.model===3?
        <div className="logo logo-js">
            <img src="/My-Code-Hero/react-hook-form-icon.jpg" alt="logo react hook form"/>
        </div>
        : 
        <div className="logo logo-js">
            <img src="/My-Code-Hero/react-hook-form-icon.jpg" alt="logo react hook form"/>
            <div style={logoStyle}>React Hook Form</div>
        </div>
    );
}

