// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function EstructuraBasicaMongoose(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `// 🎌1 - Importación de Mongoose
const mongoose = require('mongoose');

// 🎌2 - Conexión a la Base de Datos
mongoose.connect('mongodb://localhost/tu-base-de-datos', { useNewUrlParser: true, useUnifiedTopology: true });

// 🎌3 - Definición de un Modelo
const Tarea = mongoose.model('Tarea', {
    nombre: String,
    completada: Boolean,
});

// 🎌4 - Creación y Guardado de una Tarea
const nuevaTarea = new Tarea({
    nombre: 'Completar el tutorial de Mongoose',
    completada: false,
});

nuevaTarea.save((error) => {
    if (error) {
    console.error('Error al guardar la tarea:', error);
    } else {
    console.log('Tarea guardada con éxito.');
    }
});

// 🎌5 - Consulta de Tareas
Tarea.find((error, tareas) => {
    if (error) {
    console.error('Error al consultar las tareas:', error);
    } else {
    console.log('Tareas encontradas en la base de datos:');
    console.log(tareas);
    }
});
`;

    return(
        <>
            <h3>Estructura básica</h3>

            <p>En esta sección se presenta la estructura básica de un programa que implementa Mongoose.</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>🎌1 - Importación de Mongoose: Se importa el módulo Mongoose. Este módulo es esencial para trabajar con MongoDB desde Node.js.</p>

            <p>🎌2 - Conexión a la Base de Datos: Establecemos una conexión a la base de datos MongoDB utilizando mongoose.connect. Asegúrate de reemplazar 'tu-base-de-datos' con el nombre de tu propia base de datos. Esta conexión es fundamental para interactuar con MongoDB.</p>

            <p>🎌3 - Definición de un Modelo: Definimos un modelo llamado Tarea que representará las tareas en nuestra aplicación. El modelo se basa en un esquema que especifica la estructura de las tareas, incluyendo los campos nombre (una cadena de texto) y completada (un valor booleano).</p>

            <p>🎌4 - Creación y Guardado de una Tarea: Creamos una nueva tarea llamada nuevaTarea utilizando el modelo Tarea. Configuramos esta tarea con un nombre y un estado de completado. Luego, utilizamos el método save para guardar la tarea en la base de datos. Si ocurre algún error, lo registramos en la consola; de lo contrario, mostramos un mensaje de éxito.</p>

            <p>🎌5 - Consulta de Tareas: Utilizamos el método find de Mongoose para consultar y recuperar todas las tareas almacenadas en la base de datos. Cualquier error que ocurra se maneja adecuadamente, y si la consulta tiene éxito, mostramos las tareas en la consola.</p>

        </>
    )
}