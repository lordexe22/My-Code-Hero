// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function EstructuraBasicaMongoose(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `mongod`;

    const code2 = `// 🎌1 - Importación de mongoose
import mongoose from 'mongoose';

// 🎌2 - Conexión de la base de datos
await mongoose.connect('mongodb://127.0.0.1:27017/Usuarios');

// 🎌3 - Crear un esquema
const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    email: String,
    age: Number,
    registerDate: Date,
    premium: Boolean,
});

// 🎌4 - Agregar métodos al esquema:
userSchema.methods.showData = function showData() {
    const validUser = 
        this.user && 
        this.password && 
        this.email && 
        this.age && 
        this.registerDate &&
        this.premium !== undefined;
    if(validUser){
        console.log(\`user: \${this.user}
            password: \${this.password}
            email: \${this.email}
            age: \${this.age}
            registerDate: \${this.registerDate}
            premium: \${this.premium}\`);
    } else { console.log ('invalid user') }
}

// 🎌5 - Modelo del esquema
const User = mongoose.model('User', userSchema);

// 🎌6 - Instancias del modelo
const user1 = new User({
    user: 'Tadeo123',
    password: 'elTadeo123',
    email: 'tadeo123@test.com',
    age: 25,
    registerDate: new Date(),
    premium: false,
})

const user2 = new User({
    user: 'Ratata',
    password: 'ratata_22',
    email: 'ratata@test.com',
    age: 20,
    registerDate: new Date(),
    premium: true,
})

// 🎌7 - Guardar en la base de datos
async function saveUsers() {
    await user1.save();
    await user2.save();
}

saveUsers();

// 🎌8 - Ejecutar métodos
user1.showData();
user2.showData();`

    return(
        <>
            <h3>Estructura básica</h3>

            <p>Como paso previo para que funcione cualquier código que implemente <b>mongoose</b> en su código se debe ejecutar y dejar en funcionamiento la base de datos de mongoDB en la terminal:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>En esta sección se presenta la estructura básica de un programa que implementa Mongoose. Como primer paso se va a estudiar el siguiente código:</p>

            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>

            <p><b>🎌1 - Importación de mongoose: </b>Se importa el objeto <b>mongoose</b> de la libreria <b>mongoose</b>. A partir de este objeto podremos hacer todas las operaciones básicas para hacer funcionar la base de datos.</p>

            <p><b>🎌2 - Conexión de la base de datos: </b> En este caso se establece la conexión de la base de datos en el <b>"localhost"</b>. En ocaciones podria no funcionar y requerirse reemplazar <b>localhost</b> por la dirección IP <b>"127.0.0.1"</b> que es su equivalente. La conexión se establece en el puerto 27017 que es el puerto al que se conecta mongoDb por defecto y por último, el nombre <b>Usuarios</b> es la base de datos a la cual se intenta conectar en este programa. Si no existe la base de datos especificada se la crea de forma automatica.</p>

            <p><b>🎌3 - Crear un esquema: </b> Un esquema en mongoose es un objeto que permite establecer cuales van a ser los campos que se espera que tengan los documentos dentro de la base de datos y que tipo de datos se aceptan como valor. En este caso el esquema esta orientado al manejo de datos de usuarios.</p>

            <p><b>🎌4 - Agregar métodos al esquema: </b>Se añade un método adicional al esquema creado anteriormente. Los métodos agregados de esta forma deben ser agregados antes de crear un modelo con el esquema, razón por la cual se recomienda agregar el método justo despues de definir el esquema para así evitar errores. En este caso el método muestra los datos del usuario registrado siempre y cuando sus datos sean válidos.</p>

            <p><b>🎌5 - Modelo del esquema: </b>Se crea un modelo a partir del esquema definido previamente. El modelo puede pensarse como una colección en <b>mongoDB</b>, de hecho el el primer parámetro del método <b>'User'</b> va a ser el nombre que se le va a dar a la colección que se va a crear dentro de la base de datos y el segundo parámetro <b>'userSchema'</b> es el esquema en el cual se basa este modelo.</p>

            <p><b>🎌6 - Instancias del modelo: </b>Se crean dos instancias a partir del modelo <b>'user'</b> definido en el item 🎌5. Cada instancia va a ser un <b>documento</b> de mongoDB y su contenido coincide con el cuerpo del esquema <b>'userSchema'</b> definido en el item 🎌3. Además cada una de las instancias va a contar con el método <b>showData</b> creado en el item 🎌4.</p>

            <p><b>🎌7 - Guardar en la base de datos:</b> Para guardar los documentos dentro de la base de datos se usa el método <b>'save'</b>. El proceso de guardado es asíncrono por lo cual es recomendable ejecutar este proceso dentro de una función asíncrona empleando los comandos <b>'async'</b> y <b>'await'</b>. Justo después de crear el método se lo ejecuta y se guardan ambos documentos con la información de los usuarios dentro de la base de datos, especificamente en la base de datos <b>'Usuarios'</b> y en la colección <b>'User'</b>.</p>

            <p><b>🎌8 - Ejecutar métodos: </b>Como último punto se ejecutan los métodos que se les fueron asignados a los documentos. El resultado es mostrar la información de cada documento en la consola.</p>

            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoose-estructura-basica-1.jpg" alt="mongoose-estructura-basica-1.jpg"/>
            </div>

            <p>Si se entra a <b>MongoDB Compass</b> podremos ver que efectivamente se ha creado la base de datos <b>Usuarios</b>, dentro de ella la colección <b>users</b> y dentro de esta colección se han agregado los documentos con los datos correspondientes a <b>'user1'</b> y <b>'user2'</b>.</p>


            <div style={{textAlign:'left', margin:'2vh 0'}}>
                <img src="/My-Code-Hero/mongoose-estructura-basica-2.jpg" alt="mongoose-estructura-basica-2.jpg"/>
            </div>

            <p><b>NOTA: </b>En el punto 🎌5 el primer parámetro <b>'User'</b> es el nombre que se le da a las colecciones, sin embargo, el nombre que se le de siempre va a ser editado y escrito en minúsculas y se le agregara una letra <b>'s'</b> al final (salvo que el nombre de la colección acabe en 's').</p>

        </>
    )
}