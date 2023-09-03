/* Configuración del logo principal de la página en el header */

// styles
import '../styles/header.style.css';

// stores
import useScreenModel from '../store/useScreenModel.store.jsx';

// modules
import { Navigate } from 'react-router-dom';


const LogoHomePage = () => {

  const screenModel = useScreenModel();

  const handleClick = () => {
    console.log('Le diste click al logo')
  };

  return (

    screenModel.model===1?
    <div className="logo logo-home-page">
      <img
        onClick={handleClick}
        src="/My-Code-Hero/logo2.jpg"
        alt="My Code Hero logo"
        className="main-logo"
      />
    </div>
    : screenModel.model===2?
    <div className="logo logo-home-page">
      <img
        onClick={handleClick}
        src="../../public/logo2.jpg"
        alt="My Code Hero logo"
        className="main-logo"
      />
    </div>
    : screenModel.model===3?
    <div className="logo logo-home-page">
      <img
        onClick={handleClick}
        src="../../public/logo2.jpg"
        alt="My Code Hero logo"
        className="main-logo"
      />
    </div>
    : screenModel.model===4?
    <div className="logo logo-home-page">
      <img
        onClick={handleClick}
        src="../../public/logo2.jpg"
        alt="My Code Hero logo"
        className="main-logo"
      />
    </div>
    : screenModel.model===5?
    <div className="logo logo-home-page">
      <img
        onClick={handleClick}
        src="../../public/logo2.jpg"
        alt="My Code Hero logo"
        className="main-logo"
      />
    </div>
    : null

  );
};

export default LogoHomePage;
