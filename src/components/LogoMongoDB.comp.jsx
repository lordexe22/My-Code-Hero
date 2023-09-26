/*   Diseño del icono de la seccion "mongoose"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoMongoDB(){
    
    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#ededed' : 'black',    };

    return (
        screenModel.model===3?
        <div className="logo logo-mongoDB">
            <img src="/My-Code-Hero/mongoDB-icon.jpg" alt="logo mongoDB"/>
        </div>
        : 
        <div className="logo logo-mongoDB">
            <img src="/My-Code-Hero/mongoDB-icon.jpg" alt="logo mongoDB"/>
            <div><span style={logoStyle}>mongo</span> <span style={{color:'#803030'}}>DB</span></div>
        </div>
    );
}

