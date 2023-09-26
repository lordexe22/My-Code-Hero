// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function EstructuraBasicaExpress(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `npm init -y`;

    const code2 = `"main": "index.js",`;

    const code3 = `npm install express`;

    const code4 = `const express = require('express'); //🎌1

const app = express(); //🎌2

const PORT = process.env.PORT || 3000; //🎌3

app.get('/', (req, res) => { //🎌4
    res.send('¡Hola, mundo!');
});

app.listen(PORT, () => { //🎌5
    console.log(\`Servidor Express escuchando en el puerto \${PORT}\`);
});`;

    const code5 = `node index.js`;
    

    return(
        <>
            <h3>Estructura básica de un programa de express</h3>

            <h4>Inicialización de un nuevo proyecto</h4>

            <p>Antes de escribir código con express se debe crear e inicializar previamente un nuevo proyecto de <b>Node.js</b>.</p>

            <p>El primer paso es crear la carpeta del proyecto y posteriormente inicializar el proyecto con <b>Node.js</b>. Para esto se debe ejecutar el siguiente comando en la terminal:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>El comando crea un proyecto básico preconfigurado y listo para comenzar. En el proceso se crea un archivo llamado <b>"package.json"</b> en el cual, entre otras cosas, se guarda la configuración del proyecto, las dependencias de los módulos que se instalen para el proyecto y los comandos de ejecución del mismo. Dentro de dicho archivo se debe asegurar la existencia de la siguiente linea:</p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <p>Con esto se asegura que al inicializar el proyecto el primer archivo que ejecute sea <b>"index.js"</b>. A esto se le conoce como <b>"entry point"</b>.</p>

            <p>Como paso final se instala el módulo de <b>express</b> para permitir el acceso a su contenido.</p>

            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>

            <h4>Direccionamiento básico</h4>

            <p>El direccionamiento hace referencia a como responde la aplicación a una solicitud del lado del cliente en un determinado punto final <b>"endpoint"</b> o via de acceso <b>"URI"</b>, pudiendo ser la solicitud un método HTTP especifico (GET, PUT, POST, DELETE, etc.).</p>

            <p>El siguiente ejemplo muestra un programa básico de express:</p>

            <BeautifullCode code={code4} theme={globalTheme}></BeautifullCode>

            <p>🎌1 - Se importa express y se lo asigna a una variable con el mismo nombre.</p>

            <p>🎌2 - Se crea una instancia de express. Una aplicación puede tener varias instancias en donde cada una de ellas se ocupa de una tarea concreta, a esto se lo conoce como <b>micro servicios</b>.</p>

            <p>🎌3 - Se asigna el puerto en el cual se va a ejecutar la instancia creada anteriormente. Aquí <b>"process.env.PORT"</b> es una variable de entorno en Node.js que se utiliza comúnmente para especificar el puerto en el que un servidor web o una aplicación debe escuchar las solicitudes entrantes. Esta variable de entorno es especialmente útil cuando se implementa una aplicación en un entorno de alojamiento o servidor en la nube, ya que permite configurar el puerto dinámicamente según las preferencias del entorno de alojamiento. Si la misma no existe, entonces se le asigna a la variable <b>PORT</b> el puerto 3000.</p>

            <p>🎌4 - La función <b>app.get()</b> se ejecuta cuando el cliente hace una petición get al puerto PORT en el path <b>'/'</b>. Dentro del cuerpo de la función se usa el método <b>res.send</b> para retornar la cadena <b>¡Hola, mundo!</b> hacia el cliente.</p>

            <p>🎌5 - Esta función se encarga de asignarle el puerto <b>PORT</b> a la variable <b>"app"</b>, con esto la variable <b>"app"</b> estará pendiente de todas las peticiones enviadas al puerto <b>PORT</b> y ejecutará la función correspondiente al <b>path</b> y al tipo de solicitud HTTP (GET, POST, PUT, DELETE) enviado. Por último, al inicializar el puerto se muestra en consola el mensaje <b>`Servidor Express escuchando en el puerto $&#123;PORT&#125;`</b>.</p>

            <p>Para ejecutar la aplicación se ejecuta el siguiente comando en la consola:</p>

            <BeautifullCode code={code5} theme={globalTheme}></BeautifullCode>

            <p>Con esto el servidor estará pendiente de las solicitudes que se les haga desde el lado del cliente. Si ejecuto una aplicación en el mismo equipo y hago una petición en este caso a <b>http://localhost:3000/</b> se le enviará la petición al servidor. Notar que en la URI anterior el path es <b>'/'</b>.</p>



            


            


     
     

        </>
    )
}