// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function StagingAreaGit(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `git add "/c/projects/my project/ejemplo.txt"`;

    const code2 = `git add .`;

    const code3 = `git status`;

    const code4 = `git restore --staged 'ejemplo.txt'`;


return(
        <>
            <h3>Staging area</h3>

            <h4>Añadir cambios al staging area</h4>

            <p>El <b>"staging area"</b> (área de preparación) es una característica fundamental en git que juega un papel crucial en el proceso de confirmación de cambios en un repositorio git. También se le conoce como <b>"index"</b>. El <b>"staging area"</b> permite seleccionar y preparar los cambios que se incluirán en el próximo commit. Esta función resulta útil e importante por las siguiente razones:</p>

            <ol>
                <li><b>Selección de cambios: </b>Antes de confirmar los cambios en el repositorio mediante un <b>"commit"</b>, debes agregarlos al <b>"staging area"</b>. Esto te permite seleccionar cuidadosamente qué modificaciones se incluirán en el próximo commit ya que permite elegir entre agregar todos los cambios realizados o solo algunos de ellos.</li>               
                <li><b>Revisión antes de confirmar: </b>Al utilizar el staging area, se puede revisar y verificar los cambios que han sido realizados antes de confirmarlos. Esto es útil para evitar confirmaciones accidentales o para dividir los cambios en commits más pequeños y coherentes. </li>
                <li><b>Comentarios descriptivos: </b>Al hacer un <b>"commit"</b> se pueden proporcionar comentarios descriptivos (mensajes de commit) para explicar de manera clara y concisa los cambios realizados. Los mensajes de <b>"commit"</b> son importantes para comprender el propósito de cada confirmación en el historial del repositorio.</li>
                <li><b>Flexibilidad: </b>El <b>"staging area"</b> brinda flexibilidad para trabajar en diferentes partes de un proyecto de forma aislada. Esto permite preparar y confirmar cambios en diferentes archivos o directorios por separado, lo que facilita la organización y la gestión de un proyecto.</li>
            </ol>
            
            <p>Para añadir cambios al <b>"staging area"</b> ejecutamos el comando <b><code>"git add"</code></b> seguido del nombre de los archivos que deseemos añadir.</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>En el comando anterior se envia al <b>"stagins area"</b> el archivo <b>"ejemplo.txt"</b>. También es posible el envio directo de todos los archivos que hayan sido modificados ejecutando el comando:</p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <h4>¿Cómo ver los cambios realizados en el repositorio?</h4>

            <p>Es posible visualizar todos los archivos que han sido modificados desde el último commit y que han sido agregados al <b>"staging area"</b> mediante el comando:</p>

            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>

            <p>Se nos mostrará algo parecido a lo siguiente en la consola:</p>

            <div style={{textAlign:'center', margin:'2vh 0'}}>
                <img style={{width:'100%'}} src="/My-Code-Hero/git-operacionesBasicas-1.jpg" alt="git-operacionesBasicas-1.jpg"/>
            </div>

            <p>Podemos distinguir las siguiente caracteristicas:</p>
            <ul>
                <li><b>On branch master: </b>Indica que el proceso fue llevado a cabo en la rama (master) y como se verá en la sección de ramas, se puede trabajar con varias ramas y cada una puede tener sus propias ediciones en el <b>"staging area"</b>.</li>
                <li><b>Changes to be committed: </b>Aquí se listan todos los archivos que han sido creados, eliminados o editados y se encuentran en el <b>"staging area"</b>. En este caso particular vemos que se ha creado el archivo <b>"ejemplo.txt"</b>.</li>
                <li><b>Changes not staged for commit: </b>Aquí se listan todos los archivos que han sido creados, eliminados o editados pero que no se encuentran en el <b>"staging area"</b>. En este caso particular vemos como <b>modificados</b> los archivos indicados en las rutas listadas.</li>
                <li><b>Untracked files: </b>Esta sección enumera los archivos que git aún no está rastreando en el repositorio. En otras palabras, son archivos nuevos que no se han agregado al repositorio y no se incluirán en el próximo commit a menos que se los agregue manualmente al <b>"staging area"</b>.</li>

            </ul>

            <h4>Revertir cambios en el staging area</h4>

            <p>Si se desean revertir los cambios enviados al <b>"staging area"</b>, por ejemplo el archivo <b>ejemplo.txt</b>, podemos ejecutar el siguiente comando:</p>

            <BeautifullCode code={code4} theme={globalTheme}></BeautifullCode>

            <p>Con esto hemos quitado del <b>"staging area"</b> el archivo <b>"ejemplo.txt"</b>.</p>

            {/* <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode> */}

            {/* <div style={{textAlign:'center', margin:'2vh 0'}}>
                <img style={{width:'100%'}} src="/My-Code-Hero/git-repositorio-1.jpg" alt="git-repositorio-1.jpg"/>
            </div> */}
       </>
    )
}