
export default function ConceptosBasicosMongoDB(){

    return(
        <>
            <h3>Conceptos básicos de mongoDB</h3>

            <p>Antes de sumergirse en la creación de código en MongoDB, es esencial comprender algunos conceptos clave que forman la base de esta base de datos NoSQL. Aquí se presentan los conceptos previos que se debería conocer:</p>

            <ul>
                <li><b>Base de Datos NoSQL: </b>MongoDB es una base de datos NoSQL, que se distingue por su enfoque flexible y sin esquema. A diferencia de las bases de datos relacionales tradicionales, MongoDB no requiere una estructura de tablas predefinida. En su lugar, almacena datos en documentos BSON (Binary JSON) que pueden variar en estructura de un documento a otro. Esta flexibilidad hace que MongoDB sea ideal para aplicaciones con esquemas de datos cambiantes y dinámicos.</li>

                <li><b>Colecciones: </b>Las colecciones en MongoDB son grupos lógicos de documentos relacionados. A menudo, los documentos dentro de una colección tienen una estructura similar, pero MongoDB no impone un esquema fijo en las colecciones. Las colecciones son equivalentes a las tablas en bases de datos relacionales, pero con la ventaja de que pueden contener documentos con estructuras diversas y evolucionar con facilidad a medida que cambian los requisitos de la aplicación.</li>

                <li><b>Documentos: </b>Los documentos en MongoDB son unidades de datos autónomas que se almacenan en colecciones. Cada documento es una representación en formato BSON, que es una extensión binaria de JSON. Pueden contener campos con pares clave-valor y, a diferencia de las tablas en bases de datos relacionales, los documentos no necesitan tener una estructura uniforme. Esta característica permite una representación más natural de los datos y facilita la adaptación a las necesidades cambiantes de la aplicación.</li>

                <li><b>JSON y BSON: </b>MongoDB utiliza el formato BSON, que es una extensión binaria de JSON (JavaScript Object Notation). Los documentos MongoDB se representan en BSON para una mayor eficiencia y para incluir tipos de datos binarios. Comprender la estructura de BSON y su relación con JSON es esencial para trabajar con MongoDB y manipular datos de manera efectiva.</li>

                <li><b>CRUD: </b>MongoDB admite operaciones CRUD básicas que son fundamentales para la gestión de datos. Debes comprender cómo crear documentos (Create), recuperar datos (Read), actualizar documentos (Update) y eliminar documentos (Delete) utilizando las operaciones proporcionadas por MongoDB. Estas operaciones son esenciales para interactuar con los datos en tu aplicación.</li>
            </ul>
        </>
    )
}