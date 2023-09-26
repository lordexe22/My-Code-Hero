// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function InstalacionExpress(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `npm install express`;

    return(
        <>
            <h3>Instalación de Express</h3>

            <p>Para instalar express debemos abrir la ventana de comandos de la terminal asegurandonos de estar en la carpeta raiz del proyecto, finalmente ejecutamos el comando:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>



       </>
    )
}