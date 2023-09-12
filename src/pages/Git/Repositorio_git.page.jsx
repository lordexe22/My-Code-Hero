// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function RepositorioGit(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `git init`;

    const code2 = `# se inicia el proyecto en git
git init 

# se agregan todos los cambios detectados al 'staging area'
git add . 

# se ejecuta el primer commit del proyecto 
git commit -m "Subiendo el repositorio a git-hub" 

# se crea la rama main
git branch -M main 

# se indica la url de nuestro repositorio remoto 
git remote add origin https://github.com/lordexe22/Resumen.git

# se envia el contenido del repositorio local hacia el repositorio remoto
git push -u origin main
`;

return(
        <>
            <h3>Repositorio</h3>

            <h4>¿Qué es un repositorio?</h4>

            <p>Los repositorios son un componente fundamental en el mundo del control de versiones, y en particular, en Git. Un repositorio en Git es un lugar donde se almacenan todos los archivos y el historial de cambios de un proyecto de software. Puedes pensar en él como una base de datos que registra cada modificación realizada en los archivos, lo que facilita el seguimiento de la evolución del proyecto a lo largo del tiempo. Cada vez que se realiza una modificación, se crea un "commit", que es una instantánea que representa el estado del proyecto en ese momento.</p>

            <h4>Tipos de repositorios</h4>

            <p>Los principales tipos de repositorios con los cuales un programador debe estar relacionado son:</p>

            <ul>
                <li><b>Repositorio local: </b>Este es el repositorio alojado en tu propia PC. Contiene una copia completa de los archivos y todo el historial de cambios.</li>
                <li><b>Repositorio remoto: </b>Este es un repositorio ubicado en un servidor remoto (como GitHub, GitLab o Bitbucket). Los repositorios remotos se utilizan para colaborar con otros desarrolladores, compartir tu código y realizar un seguimiento centralizado del proyecto.</li>
            </ul>

            <h4>Creación de un nuevo repositorio</h4>

            <p>La forma más sencilla de crear un nuevo repositorio es inicializar un repositorio local en nuestra PC y posteriormente cargarla como repositorio remoto a una plataforma como git-hub. Para crear el repositorio debemos crear la carpeta que va a contener el proyecto y ejecutar el comando:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>Al ejecutar este comando estamos realizando las siguientes acciones:</p>
            
            <ol>
                <li><b>Creación del directorio: </b>Git crea un subdirectorio oculto llamado <b>`.git`</b> en la carpeta actual. Este directorio es esencial para el funcionamiento interno de Git y contiene toda la información relacionada con el repositorio.</li>
                <li><b>Configuración del repositorio: </b>Se efectua la configuración inicial del repositorio, como el nombre del repositorio, el nombre del autor, el formato de los archivos de configuración y otras opciones. Esta información se almacena en el archivo <b>`.git/config`</b>.</li>
                <li><b>Creación de estructuras internas: </b>Git crea diversas estructuras internas en el directorio <b>`.git`</b> para rastrear y gestionar cambios en el proyecto, incluidas las ramas, commits, árboles y objetos.</li>
                <li><b>Inicialización del área de preparación (staging area): </b>Git también inicializa un área conocida como <b>"staging area"</b> o <b>"index"</b>. Esta área se utiliza para preparar los cambios antes de confirmarlos (mediante un commit) en el repositorio. Los archivos se agregan a la <b>"staging area"</b> antes de confirmarlos, lo que permite seleccionar qué cambios se incluirán en el próximo commit.</li>
                <li><b>Creación del primer commit: </b>Aunque el repositorio se inicia vacío, Git crea automáticamente el primer commit inicial para indicar que el repositorio ha sido creado. Este commit inicial a menudo se denomina "commit raíz" y contiene metadatos básicos, pero no contiene cambios reales en archivos, ya que inicialmente no hay archivos rastreados en el repositorio.</li>
            </ol>

            <p>Una vez que ejecutado el comando, la carpeta en la que lo ejecutaste se convierte en un repositorio Git completamente funcional. Desde este punto, se puede comenzar a agregar archivos, realizar commits y trabajar con todas las capacidades de control de versiones de Git para gestionar un proyecto. Es importante tener en cuenta que cada subdirectorio en un proyecto puede contener su propio repositorio Git, lo que permite una gestión de versiones independiente en cada parte del proyecto si es necesario.</p>

            <h4>Vincular un repositorio remoto</h4>

            <p>El primer paso va a ser crear un repositorio remoto en git-hub, para ello debemos acceder al perfil de usuario, seleccionamos la sección <b>"Repositories"</b> y dentro de esta damos click a <b>"New"</b>. A continuación se nos va a abrir un menu donde podemos rellenar los datos del repositorio, en el nombre se pone el nombre del proyecto creado en la PC, el resto de los campos son opcionales. Una vez creado, se nos indican las distintas formas en las cuales podemos subir nuestro repositorio local a git-hub y por defecto se muestra la siguiente imagen:</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img style={{width:'min(auto, 100%)'}} src="/My-Code-Hero/git-repositorio-1.jpg" alt="git-repositorio-1.jpg"/>
            </div>

            <p>Si previamente no hemos realizado ningún commit en nuestro proyecto, deberiamos ejecutar las siguientes instrucciones para sincronizar nuestro repositorio local con el repositorio remoto:</p>
            
            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <p>Es importante notar que la dirección url a la cual enviamos el repositorio local es la dirección de nuestro repositorio remoto en git-hub, para este ejemplo es <b>"https://github.com/lordexe22/Resumen.git"</b>.</p>

            <p>Si todo ha resultado correcto, entonces al actualizar la página del repositorio remoto se deberia ver el contenido del repositorio local.</p>

            <div>
                <img style={{width:'min(auto, 100%)'}} src="/My-Code-Hero/git-repositorio-2.jpg" alt="git-repositorio-2.jpg"/>
            </div>

       </>
    )
}