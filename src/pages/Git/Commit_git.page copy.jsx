// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function CommitGit(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `git add "ejemplo.txt"   # Agregamos el archivo "ejemplo.txt" al staging area
git commit -m "mensaje descriptivo del commit"   # Aplicamos un commit a todos los archivos dentro del staging area`;

    const code2 = `git log`;

return(
        <>
            <h3>Commits</h3>

            <h4>¿Qué es un commit?</h4>

            <p>Un commit en git es una captura instantánea (snapshot) de los cambios realizados en los archivos de un repositorio en un momento específico. Cada commit tiene un identificador único y un mensaje descriptivo que proporciona información sobre los cambios realizados. Los commits son la base del control de versiones y permiten realizar un seguimiento preciso de la evolución de un proyecto.</p>

            <h4>Características de los commits</h4>

            <ul>
                <li><b>Identificador SHA: </b>Cada commit tiene un identificador único de 40 caracteres generado mediante una función hash (SHA-1). Este identificador permite referenciar el commit de manera única.</li>
                <li><b>Mensaje descriptivo: </b>Cada commit se acompaña de un mensaje descriptivo ingresado por el desarrollador que debe explicar qué cambios se realizaron en ese commit. Estos mensajes son importantes para entender el propósito y el contenido de cada cambio.</li>
                <li><b>Historial ordenado: </b>Los commits se almacenan en un historial cronológico, lo que permite navegar por la historia del proyecto y ver cómo ha evolucionado a lo largo del tiempo.</li>
                <li><b>Cambios atómicos: </b>Los commits suelen contener cambios coherentes y relacionados entre sí. Esto facilita la identificación de las modificaciones realizadas y su impacto en el proyecto.</li>
            </ul>

            <h4>¿Cómo se crea un commit?</h4>

            <p>El requisito previo para crear un commit es que el contenido al cual se le quiere hacer un commit se encuentre dentro del staging area, recordando que los archivos que se encuentren dentro del staging area son los candidatos a los cuales nos interesa aplicarles el commit.</p>

            <p>Si creo un archivo llamado <b>"ejemplo.txt"</b> y deseo aplicarle un commit, entonces deberia ejecutar los siguientes comandos:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>Con esto hemos logrado generar un commit con el estado actual del proyecto incluyendo al mismo el nuevo archivo <b>"ejemplo.txt"</b>.</p>

            <h4>Historial del proyecto</h4>

            <p>A medida que se avance en un proyecto y se generen nuevos commits, se ira generando también un historial de commits del cual se podrá obtener detalles especificos de cada uno de los commits que formen parte del historial, se podran comparar dos commits y se podrá llevar el proyecto a una versión anterior del mismo (deshaciendo todos los cambios que se hayan producido posteriormente).</p>

            <p>En caso de querer ver el historia con todos los commits se puedeusar el comando:</p>

            

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img style={{width:'60%'}} src="/My-Code-Hero/git-commit-1.jpg" alt="git-commit-1.jpg"/>
            </div>

            <p>Al ejecutar este comando se nos muestra en la terminal una lista con todos los commits del proyecto, y de cada uno de ellos se muestra la rama desde la cual se ha realizado el commit, su identificador <b>"SHA"</b>, los datos del autor, la fecha del commit y el mensaje descriptivo.</p>

            <p>Para salir de este modo y volver a la terminal presionamos la combinaciòn de teclas <b><code>SHIFT+Q</code></b>.</p>


            {/* <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode> */}

            {/* <div style={{textAlign:'center', margin:'2vh 0'}}>
                <img style={{width:'100%'}} src="/My-Code-Hero/git-repositorio-1.jpg" alt="git-repositorio-1.jpg"/>
            </div> */}
       </>
    )
}