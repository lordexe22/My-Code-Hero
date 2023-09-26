/*   Diseño del icono de la seccion "mongoose"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoMongoose(){
    
    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#880000' : '880000',
    };

    return (
        screenModel.model===3?
        <div className="logo logo-mongoose">
            <img src="/My-Code-Hero/mongoose-icon.jpg" alt="logo mongoose"/>
        </div>
        : 
        <div className="logo logo-mongoose">
            <img src="/My-Code-Hero/mongoose-icon.jpg" alt="logo mongoose"/>
            <div style={logoStyle}>mongoose</div>
        </div>
    );
}

