/*   Diseño del icono de la seccion "react-router"   */

// stores
import useTheme from '../store/useTheme.store.jsx';
import useScreenModel from '../store/useScreenModel.store.jsx';

export default function LogoReactRouter(){

    const screenModel = useScreenModel();
    const theme = useTheme().globalTheme;

    const logoStyle1 = {
        color: theme === 'dark' ? '#ededed' : 'black',
    };

    const logoStyle2 = {
        color: theme === 'dark' ? 'rgb(202,66,69)' : 'rgb(182,46,49)',
    };

    const icoSrc = theme === 'dark'
        ? '/My-Code-Hero/react-router-icon-dark.jpg' 
        : '/My-Code-Hero/react-router-icon-light.jpg';

    return (
        screenModel.model===3 ?
        <div className="logo logo-react-router">
            <img src={icoSrc} alt="logo react router"/>
        </div>
        : 
        <div className="logo logo-react-router">
            <img src={icoSrc} alt="logo react router"/>
            <div><span style={logoStyle1}>React</span> <span style={logoStyle2}>Router v6</span></div>
        </div>

    );
}

