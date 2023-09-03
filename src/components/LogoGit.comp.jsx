/*   Diseño del icono de la seccion "git"   */

// styles
import '../styles/logos.style.css';

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoGit(){
    
    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle = {
        color: theme === 'dark' ? '#ededed' : 'black',
    };

    return (
        screenModel.model===3?
        <div className="logo logo-git">
            <img src="/My-Code-Hero/git-icon.jpg" alt="logo git"/>
        </div>
        : 
        <div className="logo logo-git">
            <img src="/My-Code-Hero/git-icon.jpg" alt="logo git"/>
            <div style={logoStyle}>git</div>
        </div>
    );
}

