// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function InstalacionMongoose(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `npm install mongoose`;

    return(
        <>
            <h3>Instalación</h3>

            <p>Previo a la instalación de Mongoose hay que asegurarse de tener instalados <b>Node.js</b> y <b>MongoDB</b>, de otra manera este módulo no funcionará.</p>

            <p>Finalmente abrimos la ventana de comandos en la carpeta raiz del proyecto y ejecutamos el comando:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>



        </>
    )
}