// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function RepositorioRemotoGit(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `git remote -v`;

    const code2 = `git remote add <nombre-de-la-referencia> <URL-del-repositorio-remoto>`;

    const code3 = `git remote add origin https://github.com/lordexe22/My-Code-Hero.git`;

    const code4 = `git push <nombre-del-repositorio-remoto> <nombre-rama>`;

    const code5 = `git push origin master`;

    const code6 = `git push <nombre-de-la-referencia> <rama-local>:<rama-remota>`;

    const code7 = `git push origin master
git push origin master:master`;

    const code8 = ``;
    const code9 = ``;
    const code10 = ``;
    const code11 = ``;
    const code12 = ``;



    
return(
        <>
            <h3>Repositorio remoto</h3>

            <h4>Variable de referencia (origin)</h4>

            <p>La variable <b>"origin"</b> es el nombre por defecto que se le da al repositorio remoto. La variable <b>"origin"</b> se utiliza como un alias para la URL del repositorio remoto y simplifica las operaciones con él. Por lo general, cuando se clona un repositorio, git automáticamente configura "origin" para apuntar a la ubicación del repositorio remoto.</p>

            <p>Para verificar la URL de <b>"origin"</b>, se usa el comando:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>Si el repositorio local no ha sido clonado desde un repositorio remoto, se puede definir manualmente la referencia utilizando el siguiente comando:</p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <p>La URL del repositorio hace referencia a donde esta guardado el repositorio remoto (por ejemplo en git-hub). Si quiero que la referencia origin apunte hacia este mismo repositorio entonces deberia usar el comando:</p>

            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>

            <p>Básicamente lo que se indica es que se desea guardar en la referencia <b><code>origin</code></b> la URL del repositorio remoto ubicado en <a href="https://github.com/lordexe22/My-Code-Hero.git" target="_blank">https://github.com/lordexe22/My-Code-Hero.git</a>. Esto resulta útil para simplificar el código en los próximos comandos ya que en lugar de utilizar la URL completa solamente se usa <b>"origin"</b>. Por último, se pueden crear más referencias y se les puede dar otros nombres.</p>

            <h4>Actualizar el repositorio remoto (push)</h4>

            <p>El comando <b><code>"git push"</code></b> se utiliza cuando deseamos enviar los cambios de los commits en nuestro repositorio local hacia el repositorio remoto. La sintaxis es:</p>

            <BeautifullCode code={code4} theme={globalTheme}></BeautifullCode>

            <p>Por ejemplo:</p>

            <BeautifullCode code={code5} theme={globalTheme}></BeautifullCode>

            <p>Aqui se hace un envio (push) desde el repositorio local hacia el repositorio remoto al cual apunta la variable de referencia <b>"origin"</b>. El contenido enviado es todo lo que se encuentre dentro del último commit de la rama <b>"master"</b> y dicho contenido es enviado a la rama <b>"master"</b> en el repositorio remoto.</p>

            <p>Si usamos el código en este formato se espera que la rama especificada exista tanto en el repositorio local como en el repositorio remoto. Sin embargo, si se desea especificar tanto la rama del repositorio local como la rama del repositorio remoto, podriamos usar el comando de la siguiente forma:</p>

            <BeautifullCode code={code6} theme={globalTheme}></BeautifullCode>

            <p>Con esto aclarado se hace obvio que las siguiente dos lineas de código son equivalentes:</p>
            

            <BeautifullCode code={code7} theme={globalTheme}></BeautifullCode>

            <p>Más alla del formato elegido, al ejecutar el comando <b><code>"push"</code></b> va a ser enviado hacia el repositorio remoto y al actualizar la url del mismo se podrá observar el contenido actualizado.</p>

            {/* <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode> */}

            {/* <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/git-commit-1.jpg" alt="git-commit-1.jpg"/>
            </div> */}
       </>
    )
}