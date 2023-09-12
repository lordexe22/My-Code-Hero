// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function CommitGit(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `git add "ejemplo.txt"
git commit -m "mensaje descriptivo del commit"`;

    const code2 = `git log`;

    const code3 = `git log --oneline`;

    const code4 = `git revert HEAD`;

    const code5 = `git revert --no-commit HEAD`;

    const code6 = `git revert --no-commit HEAD HEAD~1 HEAD~2`;


    
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

            <p>En caso de querer ver el historia con todos los commits se puede usar el comando:</p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/git-commit-1.jpg" alt="git-commit-1.jpg"/>
            </div>

            <p>Al ejecutar este comando se nos muestra en la terminal una lista con todos los commits del proyecto, y de cada uno de ellos se muestra la rama desde la cual se ha realizado el commit, su identificador <b>"SHA"</b>, los datos del autor, la fecha del commit y el mensaje descriptivo.</p>

            <p>Para salir de este modo y volver a la terminal presionamos la combinaciòn de teclas <b><code>SHIFT+Q</code></b>.</p>

            <p>Existe una manera más comoda con la cual se pueden ver los commits que es usando el comando <b><code>git log --oneline</code></b>, esto muestra una versión resumida de cada commit lo que ayuda a identificar de manera más sencilla el commit de interés. Cada commit muestra a la izquierda su correspondiente codigo <b><code>SHA</code></b> y a la derecha su mensaje descriptivo.</p>

            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/git-commit-2.jpg" alt="git-commit-2.jpg"/>
            </div>

            <p>Este comando resulta particularmente de interés ya que muchos otros comandos requieren identificar inequivocamente un commit determinado y con el comando anterior se tiene acceso al código <b>SHA</b> de todos ellos.</p>

            <h4>Revertir commits</h4>

            <p>Si se ha realizado un commit y se desean revertir los cambios de dicho commit, entonces se puede utilizar el comando <b><code>revert</code></b> más el commit el cual se desea revertir (generalmente el último).</p>

            <p>Se puede referenciar a un commit en concreto mediante su código <b>SHA</b> aunque también existe una forma más cómoda si el objetivo es revertir el o los últimos commits del proyecto. En un proyecto git existe un puntero que sirve para referenciar al último commit realizado en el mismo, este puntero es el <b><code>HEAD</code></b>. Por lo cual, podriamos también revertir el último commit del proyecto utilizando el comando <b><code>revert</code></b> de la siguiente forma:</p>

            <BeautifullCode code={code4} theme={globalTheme}></BeautifullCode>

            <p>Luego de usar el <b><code>revert</code></b> se ejecuta un commit de confirmación para guardar la reversión de los cambios. Es importante aclarar que usando <b><code>revert</code></b> no se borra el commit seleccionado, sino que se crea un nuevo commit en el cual se guarda el proyecto actual revirtiendo todos los cambios efectuados en el commit seleccionado. Esto se puede evitar si se usa <b><code>revert --no-commit</code></b> de la siguiente forma:</p>

            <BeautifullCode code={code5} theme={globalTheme}></BeautifullCode>

            <p>Por último, si se desea revertir más de un commit simultaneamente en una sola línea de código, se puede utilizar el puntero HEAD seguido del signo <b>'~'</b> más el número de commits que deseamos ir hacia atras a partir del commit actual. Al hacer esto se va a pedir un commit de confirmación para cada uno de los commits que se hayan revertido, por lo cual se puede usar el comando <b><code>revert --no-commit</code></b> para evitar esto. </p>

            <p>Si por ejemplo se desean revertir los cambios efectuados en los últimos tres commits, el código sería el siguiente:</p>

            <BeautifullCode code={code6} theme={globalTheme}></BeautifullCode>


       </>
    )
}