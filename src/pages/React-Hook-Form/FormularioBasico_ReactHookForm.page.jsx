// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function FormularioBasicoReactHookForm(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `import { useForm } from 'react-hook-form' //🎌1

export default function App(){

    const {  register, handleSubmit, formState: {errors} } = useForm(); //🎌2

    const onSubmit = (data) => {
        console.log('data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}> {/*🎌3*/}
            <label htmlFor="user">User</label>
            <input type="text" id="user" {...register("user",{ required: true, })} /> {/*🎌4*/}
            { errors.user && <span>This field is required</span>}  {/*🎌5*/}

            <label htmlFor="password">Password</label>
            <input type="password" id="password" {...register("password")} />

            <input type="submit" value="Submit"/>
        </form>
}`;
    

    return(
        <>
            <h3>Formulario básico</h3>

            <p>Como una primera introducción a <b>React Hook Form</b> en esta sección se muestra y explica como implementar un formulario de logueo básico.</p>
            
            <p>El formulario va a contar con dos campos y un boton de submit, los campos son el usuario <b>"user"</b> y la contraseña <b>"password"</b>. El campo <b>"user"</b> va a ser obligatorio y en caso de intentar enviar el formulario sin completar este campo se muestra un mensaje indicando que el campo <b>"user"</b> es obligatorio.</p>

            <p>El código del formulario implementando React Hook Form es el siguiente:</p>

            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>

            <p>🎌1 - Se comienza por importar el componente <b>useForm</b> del módulo de <b>react-hook-form</b>.</p>

            <p>🎌2 - Se destructura el componente <b>"useForm"</b> y se obtiene del mismo los métodos <b>"register"</b>, <b>"handleSubmit"</b> y <b>"formState"</b> (del cual adicionalmente se obtiene el método <b>"errors"</b>).</p>

            <p>🎌3 - Al ejecutar el evento <b>"onSubmit"</b>, dentro del mismo se ejecuta el método <b>"handleSubmit"</b> extraido de <b>"useForm"</b> en el paso 🎌2 y se le da como parámetro el método <b>"onSubmit"</b>. El método <b>"handleSubmit"</b> verifica que todos los campos del formulario sean correctos y en caso afirmativo ejecuta el método <b>"onSubmit"</b> y le envia los datos.</p>

            <p>🎌4 - Se ejecuta el método <b>"register"</b> dentro del cuerpo del input. El primer parámetro del método register es <b>"user"</b> e indica que dentro del objeto que se va a enviar al ejecutar el evento onSubmit se le debe incluir un campo con el nombre <b>"user"</b> y cuyo valor va a ser el contenido del input correspondiente. El segundo parámetro es un objeto opcional en el cual se pueden especificar algunos criterios que deberá cumplir el input, para este caso el campo <b>"user"</b> se hace requerido.</p>

            <p>🎌5 - El método <b>errors</b> retorna un objeto el cual puede estar vacio o contener información en base a los errores que se produzcan en el formulario. Si no se llena el campo <b>"user"</b> entonces el método <b>"errors"</b> retorna un objeto en el cual va a existir el campo <b>"user"</b>,  por lo cual <b><code>"errors.user === true"</code></b>, se usa esta información en un renderizado condicional para mostrar el mensaje dentro de la etiqueta <b>span</b> en caso de que el campo este vacio. Si se llena el campo entonces el objeto retornado por <b>"errors"</b> estará vacio y se cumplirá que <b><code>"errors.user === false"</code></b></p>
     

        </>
    )
}