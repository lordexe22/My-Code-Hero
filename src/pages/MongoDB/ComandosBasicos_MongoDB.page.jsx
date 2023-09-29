// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function ComandosBasicosMongoDB(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `mongod`;

    const code2 = `mongosh`;

    const code3 = `use Usuarios`;

    const code4 = `show dbs`;

    const code5 = `db.createCollection(name,options)`;

    const code6 = `db`;

    const code7 = `db.dropDatabase()`;

    const code8 = `show collections`;

    const code9 = `db.collectionName.drop()`;

    const code10 = `db.currentName.renameCollection("newName")`;

    const code11 = `db.collection.insertOne({document})`;

    const code12 = `db.collection.insertMany([{document1},{document2}...{documentn}])`;

    const code13 = `db.collection.find()`;

    const code14 = `db.collection.updateOne(filter, update, options)`;

    const code15 = `db.colection.deleteOne({ filter: value })
db.colection.deleteMany({ filter: value })`;

    
    return(
        <>
            <h3>Crear base de datos local</h3>

            <p>En este articulo se van a presentar los comandos básicos para crear y manipular una base de datos.</p>

            <h4>Ejecución de mongod</h4>

            <p>Este es el comando principal para iniciar el servidor de base de datos MongoDB. Debe ser el primer comando ejecutado y al hacerlo, se inicia el proceso del servidor de MongoDB en el sistema. Este proceso maneja todas las solicitudes de la base de datos, administra los usuarios y roles de la base de datos, y también realiza funciones como el balanceo de carga y la replicación en un entorno distribuido. Para ejecutarlo se debe escribir el siguiente comando en la terminal y luego se debe dejar abierta la misma:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <h4>Ejecución de mongosh</h4>

            <p>Este es el shell interactivo de MongoDB, que te permite interactuar con los datos almacenados en MongoDB. Se usa para consultar y manipular datos, crear y modificar esquemas, y realizar una variedad de tareas administrativas como la creación de índices o la gestión de usuarios y roles.</p>

            <p>Se debe ejecutar este comando dentro de otra ventana de comandos. Al hacer esto podremos comenzar a ejecutar los métodos de mongoDB que permiten manipular las bases de datos y su contenido. El comando para abrir el shell es:</p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <p>A partir de ahora, en esta misma ventana de comandos se podrán comenzar a usar los comandos que se desarrollarán en el resto de este artículo.</p>

            <h4>Operaciones con bases de datos</h4>

            <p><b>Nueva base de datos: </b> Se crea y redirecciona a una nueva base de datos llamada <b>"Usuarios"</b>. Si la base de datos Usuarios ya existe solamente se redirecciona, si no existe se crea y luego se redirecciona.</p>

            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-1.jpg" alt="mongoDB-comandos-basicos-1.jpg"/>
            </div>

            <p><b>Listar bases de datos: </b>Se muestra una lista de todas las bases de datos. Las bases de datos no se mostrarán si no tienen creada al menos una colección dentro de las mismas, por esto no se deberia poder ver la base de datos Usuarios.</p>

            <BeautifullCode code={code4} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-2.jpg" alt="mongoDB-comandos-basicos-2.jpg"/>
            </div>

            <p><b>Crear colección: </b>Imaginemos que en la base de datos <b>"Usuarios"</b> se desea guardar la información de los usuarios en distintas aplicaciones, por lo cual se van a crear colecciones para dos aplicaciones <b>"api-1"</b> y <b>"api-2"</b>. Para esto hay que asegurarse de que la base de datos actual es <b>"Usuarios"</b>.</p>

            <BeautifullCode code={code5} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-3.jpg" alt="mongoDB-comandos-basicos-3.jpg"/>
            </div>

            <p>Ahora si volvemos a listar las bases de datos vamos a ver incluida en la lista a la base de datos <b>"Usuarios"</b>.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-4.jpg" alt="mongoDB-comandos-basicos-4.jpg"/>
            </div>

            <p><b>Ver base de datos actual: </b>Muestra en pantalla la base de datos que esta siendo usuada actualmente.</p>

            <BeautifullCode code={code6} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-5.jpg" alt="mongoDB-comandos-basicos-5.jpg"/>
            </div>

            <p><b>Eliminar base de datos: </b>Se recomienda usar este comando con precaución ya que al borrar una base de datos se borrarán también todas las colecciones y sus respectivos documentos.</p>

            <BeautifullCode code={code7} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-6.jpg" alt="mongoDB-comandos-basicos-6.jpg"/>
            </div>

            <p>Este comando elimina la base de datos en la cual nos encontremos actualmente y a todo su contenido.</p>

            <h4>Operaciones con colecciones</h4>

            <p><b>Crear colección:</b> Se debe ejecutar el siguiente comando:</p>

            <BeautifullCode code={code5} theme={globalTheme}></BeautifullCode>

            <p>Para este ejemplo se van a crear las colecciones <b>"app-1"</b>, <b>"app-2"</b> y <b>"newApp"</b> dentro de la base de datos <b>"Usuarios"</b>.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-7.jpg" alt="mongoDB-comandos-basicos-7.jpg"/>
            </div>

            <p><b>Ver lista de colecciones: </b> Para ver la lista de colecciones de la base de datos actual ejecutamos el comando:</p>

            <BeautifullCode code={code8} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-8.jpg" alt="mongoDB-comandos-basicos-8.jpg"/>
            </div>

            <p><b>Eliminar colecciones: </b>Antes de eliminar una colección se debe considerar que si el nombre de la colección contiene guiones u otro caracter no soportado por mongoDB se debe usar el comando <b>drop</b> con una sintaxis ligeramente diferente, para poder ver esto vamos a eliminar las colecciones <b>"newApp"</b> y <b>"app-2"</b>.</p>

            <p>Por otro lado, también hay que tener presente que al eliminar una colección también se eliminan los documentos que contenga el mismo, por lo cual se recomienda usar estos comandos con precaución.</p>

            <p>La sintaxis es la siguiente:</p>

            <BeautifullCode code={code9} theme={globalTheme}></BeautifullCode>

            <p>Procedemos a eliminar las colecciones indicadas:</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-9.jpg" alt="mongoDB-comandos-basicos-9.jpg"/>
            </div>

            <p><b>Renombrar colección: </b>Se renombra la colección <b>"app-1"</b> por <b>"collApp"</b>. La sintaxis del comando es la siguiente:</p>

            <BeautifullCode code={code10} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-10.jpg" alt="mongoDB-comandos-basicos-10.jpg"/>
            </div>

            <h4>Operaciones CRUD en documentos</h4>

            <p><b>Insertar documento en colección: </b> Un documento es un objeto en javascript. Para agregar un nuevo documento especificamos la colección en la cual se desea incluirlo con el comando:</p>

            <BeautifullCode code={code11} theme={globalTheme}></BeautifullCode>

            <p>También se pueden agregar varios documentos al mismo tiempo usando el comandos:</p>

            <BeautifullCode code={code12} theme={globalTheme}></BeautifullCode>

            <p>Como ejemplo se agrega una lista de usuarios dentro de la colección <b>"collApp"</b>:</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-11.jpg" alt="mongoDB-comandos-basicos-11.jpg"/>
            </div>

            <p>Al crear un documento mongoDB se le crea automaticamente un campo <b>"_id"</b> en el cual se le asigna un identificador único a cada uno. Esto es importante cuando se desea editar o eliminar los documentos ya existentes.</p>

            <p>Notese además que los documentos no son iguales, a algunos de ellos le faltan campos, esto va a ser importante cuando se analicen los próximos comandos.</p>

            <p><b>Busqueda de documentos: </b>Al tener una colección con varios documentos, podemos ver la lista completa de documentos con todo su contenido ejecutando el comando:</p>

            <BeautifullCode code={code13} theme={globalTheme}></BeautifullCode>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-12.jpg" alt="mongoDB-comandos-basicos-12.jpg"/>
            </div>

            <p>El comando <b>find</b> admite condiciones en la busqueda de documentos que actuan a modo de filtros. Para usar un filtro con el comando <b>find</b> especificamos entre comillas los pares <b>clave-valor</b>. En los próximos ejemplos se van a aplicar filtros de busqueda para realizar operaciones de actualización y eliminación de campos y documentos.</p>

            <p><b>Edición de documentos: </b>Se pueden filtrar documentos que cumplan con una condición determinada y posteriormente editar alguno de sus campos. Si se desea editar un campo en particular se puede usar el comando:</p>

            <BeautifullCode code={code14} theme={globalTheme}></BeautifullCode>

            <p>Si se desea cambiar la edad del usuario <b>"user4"</b>, primero aplicamos el filtro estableciendo el valor del campo <b>"name"</b> y luego escribimos el cambio deseado con ayuda de la instrucción <b>"$set"</b> de la siguiente forma:</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-13.jpg" alt="mongoDB-comandos-basicos-13.jpg"/>
            </div>

            <p>Con este mismo comando también se pueden agregar nuevos campos dentro de una colección ya existente, entonces si deseo agregar el campo <b>"password"</b> al usuario <b>"user4"</b> puedo escribir el siguiente comando:</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-14.jpg" alt="mongoDB-comandos-basicos-14.jpg"/>
            </div>

            <p>Por último, con este comando también se puede eliminar un campo dentro de algún documento, para esto se usa la instrucción <b>"$unset"</b> de la siguiente forma:</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-15.jpg" alt="mongoDB-comandos-basicos-15.jpg"/>
            </div>     

            <p>En este ejemplo se ha modificado el usuario <b>"user3"</b> y se le ha eliminado el campo <b>"password"</b>.</p>

            <p><b>Eliminar documentos: </b>Además de eliminar un campo en concreto dentro de un documento, MongoDB permite eliminar documentos completos. Para esto se usa el comando <b>deleteOne</b> o <b>deleteMany</b> junto al filtro sobre el cual vamos a buscar en los documentos.</p>

            <BeautifullCode code={code15} theme={globalTheme}></BeautifullCode>

            <p>En este ejemplo se van a borrar los documentos que tengan en el campos <b>"password"</b> el valor <b>"1234"</b>.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-comandos-basicos-16.jpg" alt="mongoDB-comandos-basicos-16.jpg"/>
            </div>   

        </>
    )
}