// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function ConceptosBasicosExpress(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `scheme://authority/path?query#fragment`;


    return(
        <>
            <h3>Conceptos básicos</h3>

            <p>En esta sección se listan los conceptos básicos previos que se deben conocer para comprender los temas desarrollados.</p>

            <h4>Protocolo HTTP</h4>

            <p>HTTP es el protocolo fundamental de la World Wide Web. Permite la transferencia de datos a través de la web, generalmente documentos y recursos.</p>

            <p>La transferencia de datos se da en el modelo <b>cliente-servidor</b>, en el cual el usuario interactuando con una aplicación cumple el rol del cliente y el mismo, al realizar determinadas tareas, interactua con una API en el lado del servidor enviando y recibiendo datos.</p>

            <p>El protocolo HTTP define los siguiente datos para la interacción entre cliente y servidor:</p>
            <ul>
                <li><b>GET: </b>El cliente le solicita datos al servidor.</li>
                <li><b>POST: </b>El cliente le envia nuevos datos al servidor.</li>
                <li><b>PUT: </b>El cliente quiere actualizar datos ya existentes.</li>
                <li><b>DELETE: </b>El cliente solicita la eliminación de algun recurso.</li>
            </ul>

            <h4>URI (Uniform Resource Identifier)</h4>

            <p>Las solicitudes y respuestas HTTP hacen referencia a recursos a través de URIs. Una URI es una cadena de caracteres que se utiliza para identificar un recurso de manera única en la web. Tiene una estructura general que consiste en cinco partes:</p>

            <ul>
                <li><b>Scheme: </b>Indica el protocolo o el sistema de nomenclatura utilizado para acceder al recurso. Ejemplos comunes de esquemas incluyen "http", "https", "ftp", "mailto", "file" y "urn".</li>
                <li><b>Authority: </b>La autoridad puede incluir información sobre el servidor o la ubicación del recurso. En el caso de las URL, esto a menudo incluye el nombre de dominio (por ejemplo, "www.ejemplo.com"). En las URN, esto podría ser un identificador único, como un ISBN para un libro.</li>
                <li><b>Path: </b>La ruta especifica la ubicación del recurso en el servidor o en la estructura de directorios. Puede incluir nombres de archivos, directorios y otros identificadores que permiten acceder al recurso.</li>
                <li><b>Query: </b>Se utiliza para incluir parámetros o datos adicionales en la URI. Los parámetros se separan del resto de la URI con el símbolo "?" y se separan entre sí con el símbolo "&" (por ejemplo, <b>"?parametro1=valor1&parametro2=valor2"</b>).</li>
                <li><b>Fragment: </b>El fragmento se utiliza para identificar una sección específica de un recurso web, como una ancla en una página HTML. Se indica con el símbolo "#" seguido de un identificador (por ejemplo, <b>"#seccion-importante"</b>).</li>
            </ul>

            <p>Una URI completa tiene la siguiente estructura:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>Dicho esto, en una URI solamente son obligatorios el <b>scheme</b> y el <b>path</b>, el resto de las partes son opcionales.</p>

            <h4>Códigos de estado</h4>

            <p>Al enviar o solicitar datos entre el cliente y el servidor pueden pasar parias cosas, como por ejemplo, errores del lado del cliente, errores del lado del servidor, una comunicación exitosa, etc. Existe una tabla que contiene una lista con códigos de estado que especifican el resultado de la interacción entre el cliente y el servidor.</p>

            <p>Los códigos de estado que esten entre 200 y 299 hacen referencia a <b>"respuestas satisfactorias"</b> en las peticiones, entre 300 y 399 hacen referencia a <b>"redirecciones"</b> que debe ejecutar el cliente, entre 400 y 499 hacen referencia a <b>"errores del cliente"</b> y del 500 al 599 a <b>"errores del servidor"</b>.</p>

            <p>Usando express se puede configurar el tipo de respuesta en función de lo que haya pasado en la ejecución del programa, por ejemplo un estado 200 para indicar que la solicitud ha tenido exito o un estado 404 para indicar que el servidor no pudo encontrar el contenido solicitado. En caso de querer comunicar algún estado concreto en la API se puede acceder al siguiente enlace para ver una lista con toodos los códigos de estado del protocolo HTTP: <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Status" target="_blank">https://developer.mozilla.org/es/docs/Web/HTTP/Status</a></p>

            <h4>Middleware</h4>

            <p>Los middlewares son funciones que se ejecutan durante el ciclo de vida de una solicitud HTTP en una aplicación web. Desempeñan un papel crucial en la manipulación y el procesamiento de solicitudes antes de que lleguen a su destino final (como una ruta o un controlador) y en la generación de respuestas.</p>

            <p>Algunas características y usos típicos de middlewares son:</p>

            <ul>
                <li><b>Procesamiento intermedio: </b>Los middlewares son funciones que se ejecutan entre la recepción de una solicitud HTTP y la generación de una respuesta. Pueden realizar diversas tareas, como autenticación, autorización, registro, validación de datos, manipulación de encabezados y más.</li>
                <li><b>Ejecución secuencial: </b>En Express.js y otros frameworks similares, los middlewares se organizan en una cadena y se ejecutan en el orden en el que se agregan a la aplicación. Esto permite un control preciso sobre cómo se procesa una solicitud.</li>
                <li><b>Objetos request y response: </b>Cada middleware tiene acceso a los objetos de solicitud (request) y respuesta (response). Estos objetos contienen información sobre la solicitud entrante y se utilizan para enviar una respuesta al cliente. Los middlewares pueden modificar estos objetos según sea necesario.</li>
                <li><b>Función next: </b>La mayoría de los middlewares llaman a una función next(), que es un argumento de la función de middleware. Llamar a next() pasa el control al siguiente middleware en la cadena. Si no se llama a next(), la cadena de middlewares se detiene y la solicitud no avanza más.</li>
            </ul>

            

    
        </>
    )
}