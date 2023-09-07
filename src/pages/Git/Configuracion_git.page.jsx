// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function ConfiguracionGit(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `$ git config --global user.name "Tu Nombre"
$ git config --global user.email "tu@email.com"`;

    const code2 = `git config --global core.editor "core --wait"`;

    const code3 = `git config --global -e`;

    const code4 = `git config --global core.autocrlf true`;

    const code5 = `git config --global core.autocrlf input`;

    const code6 = `git config --global user.password "código del token`;
    


    return(
        <>
            <h3>Configuración</h3>

            <h4>Datos del usuario</h4>

            <p>Antes de empezar a usar Git, es importante configurar el nombre de usuario y dirección de correo electrónico. Estos detalles son incluidos en los commits realizados para identificar la contribución al proyecto. Para esto usamos los siguientes comandos:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <h4>Configuración de la terminal</h4>

            <p>Con el siguiente comando logramos que la terminal quede activa y a la espera hasta que el usuario cierre el editor de texto sobre el cual está trabajando.</p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <p>Para abrir el archivo de configuración global y ver como esta configurado actualemnte ejecutamos:</p>

            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>

            <h4>Carriage Return (CR) y Line Feed (LF)</h4>

            <p>En un proyecto en git que involucra colaboradores, los mismos pueden utilizar diferentes sistemas operativos (por ejemplo, Windows, macOS y Linux), en estos casos es importante que los saltos de línea en los archivos de texto se manejen correctamente para que los archivos sean legibles y se comporten de manera adecuada en todos los sistemas.</p>

            <p>Para evitar problemas en el manejo de archivos y permitir el trabajo en conjunto en diferentes sistemas operativos se manejan los caracteres de retorno de carro (CR) y avance de línea (LF). Estos caracteres son utilizados para representar saltos de línea en los archivos de texto y su manejo puede variar entre sistemas. Para configurarlos ejecutamos los siguientes comandos:</p>

            <p>Para Windows</p> 
            <BeautifullCode code={code4} theme={globalTheme}></BeautifullCode>

            <p>Para MAC</p> 
            <BeautifullCode code={code5} theme={globalTheme}></BeautifullCode>

            <h4>Configuración de git-hub</h4>
            
            <p>
                Al crear la cuenta en git-hub se debe configurar un token de acceso como medida de seguridad para los repositorios. Para ello ingresamos a nuestro perfil de usuario y vamos al apartado de <b>Settings</b>, en el panel de la izquierda buscamos la opcion de <b>Developer settings</b> y una vez adentro seleccionamos la opción <b>Personal access tokens</b>, seleccionamos <b>Tokens (classic)</b> y finalmente damos click en <b>Generate new token</b> y <b>Generate new token (classic)</b>. Puede que se pida la contraseña de la cuenta de git-hub para confirmar esta acción. 
            </p>

            <p>
                Ya adentro podremos generar un token para trabajar, podemos darle al mismo una descripcion y una fecha de expiración. Para finalizar la acción tildamos la casilla repo, bajamos hasta el final y damos click en <b>Generate token</b>. 
            </p>

            <div style={{textAlign:'center', margin:'2vh 0'}}>
                <img style={{width:'100%'}} src="/My-Code-Hero/git-configuracion-1.jpg" alt="git-configuracion-1.jpg"/>
            </div>

            <p>Al hacer esto se da un código como el que se ve en el item con fondo verde.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img style={{width:'80%'}} src="/My-Code-Hero/git-configuracion-2.jpg" alt="git-configuracion-2.jpg"/>
            </div>

            <p>Para finalizar vamos a configurar nuestra contraseña de usuario que no es otra cosa que el código que se nos ha proporcionado en el token, para esto nos dirigimos a git-bash y ejecutamos el comando:</p>
            <BeautifullCode code={code6} theme={globalTheme}></BeautifullCode>
        </>
    )
}