// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function TagsGit(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `git tag <nombre-de-la-etiqueta>`;
    const code2 = `git tag <nombre-de-la-etiqueta> <ID-del-commit>`;
    const code3 = `git tag v1.0 c46d6df`;
    const code4 = `git tag`;
    const code5 = `git tag -a <nombre-de-la-etiqueta> -m "Mensaje descriptivo"`;
    const code6 = `git tag -a v1.1 -m "Versión 1.1 con correcciones de errores críticos"`;
    const code7 = 'git show <nombre-de-la-etiqueta>';
    const code8 = 'git tag -d <nombre-de-la-etiqueta>';
    const code9 = '';
    const code10 = '';
    const code11 = '';
    const code12 = '';
    const code13 = '';
    const code14 = '';
    

return(
        <>
            <h3>Tags (etiquetas)</h3>

            <h4>Crear una etiqueta</h4>

            <p>Para crear una etiqueta se utiliza el comand <b><code>git tag</code></b>. Se puede etiquetar un commit específico o la confirmación actual (HEAD). Si se desea crear una etiqueta sobre el commit actual se ejecuta el comando:</p>
            
            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>
                        
            <p>Para etiquetar un commit en particular debemos indicar el identificador <b>SHA</b> de dicho commit, se ejecuta entonces: </p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <p>Por ejemplo, para etiquetar un commit con el ID c46d6df como "v1.0", se realiza:</p>
            
            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>

            <p>Se puede obtener una lista de todas las etiquetas en el repositorio con el comando:</p>

            <BeautifullCode code={code4} theme={globalTheme}></BeautifullCode>

            <h4>Etiquetas anotadas</h4>

            <p>Las etiquetas anotadas incluyen un mensaje descriptivo. Para crear una etiqueta anotada, se agrega la opción <b><code>'-a'</code></b> al comando <b><code>git tag</code></b> de la siguiente forma:</p>

            <BeautifullCode code={code5} theme={globalTheme}></BeautifullCode>

            <p>Por ejemplo:</p>

            <BeautifullCode code={code6} theme={globalTheme}></BeautifullCode>

            <p>Por último, se pueden ver todos los detalles de una etiqueta en particular (incluyendo el mensaje descriptivo, el autor, la fecha de modificación, etc.) ejecutando el comando:</p>

            <BeautifullCode code={code7} theme={globalTheme}></BeautifullCode>

            <h4>Eliminar etiquetas</h4>

            <p>Para eliminar una etiqueta (de forma local) se emplea el comando <b><code>git tag -d</code></b> seguido del nombre de la etiqueta:</p>

            <BeautifullCode code={code8} theme={globalTheme}></BeautifullCode>

            <p>Es importante recordar que eliminar una etiqueta local no la elimina en el repositorio remoto, solamente de manera local. Para eliminar la etiqueta del repositorio remoto, se utiliza el comando <b><code>git push --delete</code></b> seguida del nombre del repositorio remoto y el nombre de la etiqueta.</p>


            {/* <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/git-branches-1.jpg" alt="git-branches-1.jpg"/>
            </div> */}

            {/* <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode> */}

       </>
    )
}