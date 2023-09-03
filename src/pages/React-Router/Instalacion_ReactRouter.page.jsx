// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

const InstalacionReactRouter = () => {
    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `npm install react-router-dom`;

    return(
        <> 
            <h3>Instalación</h3>
            <p>Para instalar react-router debemos abrir la ventana de comandos de la terminal y asegurarnos de estar en la carpeta raiz del proyecto, finalmente ejecutamos el  comando:</p>
            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>
        </>
    );

}

export default InstalacionReactRouter;