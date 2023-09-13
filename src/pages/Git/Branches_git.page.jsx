// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function BranchesGit(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `git branch "new-widget"`;

    const code2 = `git checkout "new-widget"`;

    const code3 = `git checkout -b "test"`;

    const code4 = `git branch`;

    const code5 = `git checkout "new-widget" 
git branch -d "test" `;

    const code6 = `git merge "new-widget"`;

    const code7 = `# Se inicializa el proyecto
git init

# Se crea contenido 

# Se hace un commit en la rama principal
git add .
git commit -m 'Primer commit'

# Iniciamos un nuevo widget, creamos la rama "new-widget"
git checkout -b "new-widget"

# Se crea contenido en la rama "new-widget"

# Hacemos un commit guardando los cambios desde la rama "new-widget"
git add .
git commit -m 'Primer commit en la rama new-widget'

# Hacemos un merge de ambas ramas
git checkout master 
git merge "new-widget"

# Resolución manual en caso de conflictos

# Borramos la rama new-widget
git branch -d "new-widget"`;


return(
        <>
            <h3>Branches (ramas)</h3>

            <h4>¿Qué es una rama?</h4>

            <p>En el desarrollo de software es común que un programador (o un equipo de programadores) deban desarrollar en paralelo multiples funcionalidades para una misma aplicación. Ejemplos típicos suelen ser la división de trabajo entre un grupo de desarrollo o el cambio de actividades inesperado para algún desarrollador. En cualquiera de estos casos una branch va a presentar muchas ventajas.</p>

            <p>Una <b>branch</b> o rama es una línea independiente de desarrollo dentro de un repositorio. Cada rama representa una linea de desarrollo separada del proyecto, lo que permite a los desarrolladores trabajar en características, correcciones de errores o mejoras sin interferir con el trabajo en otras partes del proyecto. Se puede decir que las ramas son como caminos paralelos en un proyecto de desarrollo, y cada una puede evolucionar independientemente.</p>

            <h4>Ventajas de usar ramas</h4>

            <ul>
                <li><b>Aislamiento de Cambios: </b>Las ramas permiten que los cambios se realicen en un entorno aislado. Puedes crear una nueva rama para una tarea específica, como agregar una nueva característica o solucionar un error, sin afectar la rama principal (generalmente llamada "master" o "main"). Esto evita que los cambios en desarrollo interfieran con el trabajo en curso.</li>
                <li><b>Colaboración: </b>Las ramas son esenciales para la colaboración en proyectos de equipo. Varios desarrolladores pueden trabajar simultáneamente en diferentes ramas, y luego fusionar sus contribuciones cuando estén listas. Esto facilita la gestión de conflictos y la integración de cambios.</li>
                <li><b>Experimentación: </b>Puedes utilizar ramas para experimentar con nuevas ideas sin comprometer el estado estable del proyecto. Si una idea no funciona como se esperaba, puedes eliminar la rama sin afectar la rama principal.</li>
                <li><b>Versiones Estables: </b>La rama principal ("master" o "main") suele contener la versión estable y probada del proyecto. Las ramas de características o de desarrollo permiten mantener la estabilidad de la rama principal mientras se trabaja en nuevas funcionalidades.</li>
            </ul>

            <h4>Crear y moverse entre ramas</h4>

            <p>Supongamos que en una determinada etapa de un proyecto se quiere iniciar con el desarrollo de un nuevo widget, si se crea una nueva rama para trabajar sobre ese widget podriamos obtener algo como esto:</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/git-branches-1.jpg" alt="git-branches-1.jpg"/>
            </div>

            <p>La imagen muestra un mapa de la evolución del proyecto. Cada circulo es un commit, los circulos azules representan los commits realizados sobre la rama principal del proyecto <b>"main"</b> y los verdes los commits realizados sobre una nueva rama en la cual se va a guardar el contenido referido al widget en desarrollo.</p>

            <p>Después del commit <b>(c2)</b> se crea una nueva rama, a la misma el desarrollador le puede dar el nombre que desee, por ejemplo <b>"new-widget"</b>. Para crear una nueva rama con el nombre <b>"new-widget"</b> se usa el comando <b><code>"git branch" </code></b> más el nombre de la rama:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>A partir de aqui y en cualquier momento se puede optar por trabajar en la rama <b>"main"</b> o en la rama <b>"new-widget"</b>. Inicialmente y de manera predeterminada, el proyecto se desarrolla el la rama <b>"master"</b> o <b>"main"</b>. Para ir hacia la rama <b>"new-widget"</b> ejecutamos el comando <b><code>"git checkout" </code></b> más el nombre de la rama:</p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <p>Posteriormente, el desarrollador puede hacer commits en cada una de estas ramas de manera aislada, es decir, todas las modificaciones que se crean en una rama en concreto solo existirán en dicha rama. Si por ejemplo en la rama <b>"new-widget"</b> se crea el archivo <b>"button-style.css"</b>, se le añade contenido y se guardan los cambios, al cambiar nuevamente a la rama <b>"main"</b> el archivo habrá desaparecido. Si ahora vuelvo a la rama <b>"new-widget"</b> el archivo volverá a aparecer.</p>

            <p>El proceso de crear una nueva rama y moverse a la misma se puede hacer directamente con el comando <b><code>"git checkout -b"</code></b> más el nombre de la nueva rama, por ejemplo, para crear la rama <b>"test"</b> ejecuto: </p>

            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>

            <p>Para ver la lista completa de las ramas del proyecto podemos usar el comando:</p>

            <BeautifullCode code={code4} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/git-branches-2.jpg" alt="git-branches-2.jpg"/>
            </div>

            <h4>Borrar ramas</h4>

            <p>Para borrar alguna de las ramas existentes ejecutamos <b><code>"git branch -d"</code></b> más el nombre de la rama que se desea borrar, sin embargo antes de hacer esto debemos asegurarnos de no encontrarnos actualmente dentro de la rama que se va a borrar. Si deseo borrar la rama <b>"test"</b> previamente debo salir de la misma.</p>

            <BeautifullCode code={code5} theme={globalTheme}></BeautifullCode>

            <h4>Merge</h4>


            <p>Lo que pasa en los commits c2-2 y c5 se denomina <b>"merge"</b> o <b>"unión"</b>. Básicamente se fusionan las ramas <b>"main"</b> y <b>"new-widget"</b> para unificar el contenido de ambas en el commit <b>"c6"</b>.</p>

            <p>Para hacer un <b>"merge"</b> primero debemos posicionarnos en la rama a la cual se desea incorporar los cambios. Generalmente es la rama <b>"master"</b> o <b>"main"</b>. Lo siguiente es ejecutar el comando <b><code>"git merge"</code></b> más el nombre de la rama que deseamos fusionar con la rama actual.</p>

            <BeautifullCode code={code6} theme={globalTheme}></BeautifullCode>

            <p>Git intentará fusionar los cambios automáticamente. Si no hay conflictos, los cambios se incorporarán de manera exitosa y se creará un nuevo commit de fusión.</p>
            
            <p>Si se producen conflictos durante la fusión, Git te notificará. Deberás abrir los archivos en conflicto, resolver los conflictos manualmente y, luego, realizar un commit para finalizar la fusión.</p>

            <h4>Simulando el proceso completo</h4>

            <BeautifullCode code={code7} theme={globalTheme}></BeautifullCode>

            <h4>Resolución de conflictos</h4>

            <p>Los conflictos en Git son una parte común y a menudo inevitable del trabajo colaborativo en proyectos de desarrollo de software. Ocurren cuando dos o más personas están trabajando en la misma área de un archivo y Git no puede determinar automáticamente cómo combinar los cambios. Esto puede suceder, por ejemplo, cuando dos ramas diferentes hacen cambios en las mismas líneas de código.</p>

            <p>En caso de conflicto git indicará en qué archivo(s) y en qué línea(s) se ha producido el conflicto. Se puede usar comandos como git status o git diff para ver los detalles del conflicto.
            </p>

            <p>Lo siguiente que se debe hacer es editar el archivo en conflicto, para ello se abre el archivo en conflicto en tu editor de código y verás secciones del código rodeadas por marcadores &lt;&lt;&lt;&lt;&lt;&lt;&lt;, =======, y &gt;&gt;&gt;&gt;&gt;&gt;&gt;. Estos marcadores indican las diferencias entre las versiones en conflicto. Se debe editar el código manualmente para decidir qué cambios deben mantenerse y cuáles deben descartarse. Finalmente se eliminan los marcadores.</p>

            <p>Una ves resuelto el conflicto, simplemente se confirma el cambio agregando el contenido al <b>"staigng area"</b> y haciendo un <b>"commit"</b>.</p>

            <p>Un ejemplo sencillo es el siguiente, supongamos que se crea en la rama <b>"master"</b> un archivo <b>"test.txt"</b> con el contenido <b>"Rama actual:"</b>, luego se lo agrega al staging area y se le hace un commit.</p>

            <p>Ahora se crea una nueva rama llamada <b>"test"</b> y en la misma se reemplaza el contenido del archivo por <b>"Rama actual: test"</b>, posteriormente guardamos los cambios agregando el archivo al staging area y haciendo un commit.</p>

            <p>Nos posicionamos en la rama <b>"master"</b> y editamos el contenido del archivo, el nuevo contenido va a ser <b>"Rama actual: master"</b>, nuevamente guardamos los cambios agregando el archivo al staging area y haciendo un commit.</p>

            <p>En la rama <b>"master"</b> el contenido del archivo es <b>"Rama actual: master"</b> y en la rama <b>"test"</b> el contenido es <b>"Rama actual: test"</b>. Si hacemos un merge hacia la rama <b>"master"</b> se va a generar un conflico porque ambas ramas intentan editar el contenido del archivo en la misma parte.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/git-branches-3.jpg" alt="git-branches-3.jpg"/>
            </div>

            <p>El archivo nos muestra dentro de los marcadores las líneas de código en conflicto, el paso final es editar manualmente el contenido y al finalizar guardar el progreso agregando los cambios al staging area y haciendo un último commit.</p>




            



          



            {/* <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode> */}

            {/* <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/git-commit-1.jpg" alt="git-commit-1.jpg"/>
            </div> */}
       </>
    )
}