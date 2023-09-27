
export default function InstalacionMongoDB(){

    return(
        <>
            <h3>Intalación de MongoDB</h3>

            <h4>Paso 1 - Instalar mongoDB ( + mongoDB-compass )</h4>

            <p>Para instalar MongoDB debemos dirigirnos a su página oficial: <a href="https://www.mongodb.com/es">https://www.mongodb.com/es</a>. Una vez dentro se ingresa a la sección <b>"Productos"</b> - <b>"Comunity edition"</b> - <b>"Comunity server"</b>, en esta sección vamos a poder descargar el instalador de mongoDB, </p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-instalacion-1.gif" alt="mongoDB-instalacion-1.git"/>
            </div>

            <p>Desplazando hacia abajo la página se encuentra el botón de descarga. Configuramos las opciones seleccionando la versión <b>current</b>, la plataforma correspondiente para nuestro sistema operativo y el package en <b>msi</b>.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-instalacion-2.jpg" alt="mongoDB-instalacion-2.jpg"/>
            </div>

            <p>Se debe ejecutar el archivo descargado para comenzar el proceso de instalación. Se recomienda incluir dentro de la descarga a <b>mongoDB compass</b>. MongoDB compass es una herramienta grafica de interfaz de usuario que sirve para facilitar la interacción con las bases de datos de mongoDB.</p>


            <h4>Paso 2 - Instalar mongoDB Shell</h4>

            <p>MongoDB Shell es el cliente oficial de MongoDB que permite a los usuarios ejecutar comandos y consultas directamente en una base de datos MongoDB. Es una herramienta versátil que proporciona una forma eficiente de interactuar con la base de datos, administrar documentos, realizar consultas y llevar a cabo tareas de administración.</p>

            <p>MongoDB Shell permite la consulta directa de datos, la inserción, edición y eliminación de documentos, la creación y administracion de bases de datos y de colecciones, la configuración y supervisión de un servidor y por último la automatización de tareas.</p>

            <p>Para instalarlo se debe ir al sitio oficial de mongoDB <a href="https://www.mongodb.com/es">https://www.mongodb.com/es</a>. Desde ahi se debe acceder a la sección <b>"Productos"</b> - <b>"Herramientas"</b> - <b>"Shell"</b>.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-instalacion-3.gif" alt="mongoDB-instalacion-3.git"/>
            </div>

            <p>Al bajar en la página se encuentra el botón de descarga, al darle click se nos redirige a la página de descarga de <b>mongoDB Shell</b> en la cual debemos configurar la versión del programa, la plataforma y el package.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-instalacion-4.jpg" alt="mongoDB-instalacion-4.jpg"/>
            </div>

            <h4>Paso 3 - Variables de entorno</h4>

            <p>Las descargas anteriores le brindan al desarrollador la poibilidad de ejecutar algunos comandos para interactuar con la base de datos, para tener acceso a estos comandos desde la terminal debemos incluirlos dentro de las variables de entorno.</p>

            <p>Lo primero es buscar e identificar la ruta en la cual instalamos <b>mongoDB</b> y entrar dentro de la carpeta <b>"bin"</b>, la ubicación por defecto en windows es <b>"C:\Program Files\MongoDB\Server\6.0\bin"</b>, se va a necesitar la ruta de la carpeta <b>bin</b> en los próximos pasos, por lo cual la copiamos.</p>

            <p>El siguiente paso es editar las variables de entorno del sistema, se puede acceder a ellas escribiendo <b>"Editar las variables de entorno del sistema"</b> en el buscador. A continuación hay que abrir <b>"Variables de entorno"</b> y en la sección <b>"Variables del sistema"</b> buscar y dar doble click sobre <b>"path"</b>, ahora se le da al botón <b>"Nuevo"</b> y se agrega dentro de la lista la ruta a la carpeta bin que copiamos previamente, para finalizar aceptamos todos los cambios y listo.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-instalacion-5.gif" alt="mongoDB-instalacion-5.git"/>
            </div>

            <p>Con esto tendramos acceso a los comandos de las aplicaciones <b>"mongod"</b>,  <b>"mongosh"</b> y <b>"mongos"</b> alijados en la carpeta bin.</p>

            <p>Con todos estos pasos ya hemos instalado correctamente mongoDB.</p>

        </>
    )
}