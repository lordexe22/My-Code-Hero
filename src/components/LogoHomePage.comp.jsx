/* Configuración del logo principal de la página en el header */

// styles
import '../styles/header.style.css';

// stores
import useUrlHandler from '../store/useUrlHandler.store.jsx'

// modules
import { useNavigate } from 'react-router-dom';


const LogoHomePage = () => {

  const navigate = useNavigate();
  const {setUrlTech, setUrlSection, updateUrlPage} = useUrlHandler();

  const handleClick = () => {
    setUrlTech('');
    setUrlSection('');
    updateUrlPage();
    
    navigate('/My-Code-Hero/');
  };

  return (
    <div className="logo logo-home-page">
      <img
        onClick={handleClick}
        src="/My-Code-Hero/logo2.jpg"
        alt="My Code Hero logo"
        className="main-logo"
      />
    </div>
  );
};

export default LogoHomePage;
