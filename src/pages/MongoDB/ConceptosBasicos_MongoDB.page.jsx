
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

            <h4>Base de datos, colecciones y documentos</h4>

            <p>Antes de escribir código en mongoDB es importante conocer la relación entre las bases de datos, las colecciones y los documentos.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoDB-conceptos-basicos-1.jpg" alt="mongoDB-conceptos-basicos-1.jpg"/>
            </div>

            <ul>
                <li><b>Base de datos: </b>En MongoDB, una base de datos es el contenedor de alto nivel para los datos. Puedes tener múltiples bases de datos independientes en un solo servidor MongoDB, y cada una tiene su propio conjunto de colecciones. Cada base de datos tiene su propio espacio en el disco y no comparte estos datos con otras bases de datos.</li>
                <li><b>Colecciones: </b>Dentro de cada base de datos, los datos se organizan en colecciones. Una colección es un grupo de documentos MongoDB, similar a cómo una tabla es un grupo de filas en las bases de datos relacionales. Sin embargo, a diferencia de las tablas, las colecciones no obligan a sus documentos a tener un esquema fijo, lo que significa que los documentos dentro de una colección pueden tener diferentes campos.</li>
                <li><b>Documentos: </b>Los documentos son el nivel más bajo en esta jerarquía. Un documento es un conjunto de pares clave-valor y es la unidad básica de datos en MongoDB. Los documentos dentro de una colección se identifican de manera única por un campo _id que se genera automáticamente al insertar un documento.</li>
            </ul>
        </>
    )
}