// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function IntroduccionReactHookForm(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `npm install react-hook-form`;

    return(
        <>
            <h3>Instalación a React Hook Form</h3>

            <p>Para instalar React Hook Form simplemente debemos ejecutar en la terminal el siguiente comando:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>



        </>
    )
}