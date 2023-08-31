/*  Carga los componentes del header, por un lado el boton para cambiar el tema actual de la pagina.   *
 *  Por otro lado se carga el componente <TechSelector> que es el responsable de desplegar la lista    *
 *  con todas las tecnologias desarrolladas en la pagina.                                              */

// modules
import React, {useEffect} from "react";

// styles
import '../styles/header.style.css'

export default function AppHeader(){

    return(
        <header>
            <h2>Header</h2>
        </header>
    );
}