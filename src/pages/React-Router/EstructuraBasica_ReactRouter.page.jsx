// services
import BeautifullCode from "../../services/BeautifullCode.service";

// stores
import useTheme from "../../store/useTheme.store";

export default function EstructuraBasicaReactRouter(){

    const { globalTheme } = useTheme();

    // Codigos
    const code1 = `import { BrowserRouter, Routes, Route } from 'react-router-dom'`;
    const code2 = `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'`;
    const code3 = `import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'

function App(
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>          
      </Router>
    </>
  )
)`;

    return(
        <div> 
            <h3>Estructura básica</h3>
            <p>Lo primero que debemos hacer es importar los componentes de react-router, vamos a importar los tres componentes más básicos del módulo:</p>
            <BeautifullCode code={code1} theme={globalTheme}></BeautifullCode>
            <p>Se le suele poner un alias al componente <b>BrowserRouter</b> llamandolo <b>Router</b>, con lo cual, la línea de código anterior quedaria de la siguiente forma:</p>
            <BeautifullCode code={code2} theme={globalTheme}></BeautifullCode>
            <ul>
                <li>
                <b>&lt;BrowserRouter&gt;:</b> Almacena la dirección actual de la barra de navegación usando URLs limpias y navega usando la pila del historial integrada del navegador. 
                </li>
                <li>
                <b>&lt;Routes&gt;:</b> Se renderiza en cualquier parte de la aplicación y desde ahi busca emparejar a sus hijos con la ubicación actual. 
                </li>
                <li>
                <b>&lt;Route&gt;:</b> Permite el acople entre un segmento de una URL y un componente, es decir, en una URL determinada podremos indicar que se ejecute un componente en particular. 
                </li>
            </ul>
            <p>La estructura básica que toma este conjunto de componentes es el siguiente:</p>
            <BeautifullCode code={code3} theme={globalTheme}></BeautifullCode>
            <p>El componente Route utiliza el parámetro "path" para especificar en que URL se va a activar (en este caso en la ruta raiz "/") y el parámetro "element" especifica cual es el componente que se va a renderizar (en este caso el componente &lt;Home/&gt;) si nos posicionamos en la URL especificada en el parámetro "path".</p>

        </div>
    );

}