
export default function IntroduccionReactRouter(){

    return(
        <>
            <h3>Introducción a React Router</h3>
            <p>
                React Router es una librería de enrutamiento diseñada específicamente para aplicaciones web construidas con React, una popular biblioteca de JavaScript utilizada para crear interfaces de usuario interactivas. React Router facilita la navegación y la gestión de las diferentes vistas y componentes de una aplicación React, permitiendo a los desarrolladores crear aplicaciones de una sola página (SPA) con múltiples rutas y vistas.
            </p>
            <p>
                En el contexto de las aplicaciones web, el enrutamiento se refiere a cómo se manejan las transiciones entre diferentes páginas o vistas en una interfaz. En lugar de cargar páginas web completamente nuevas cada vez que el usuario navega a una sección diferente de la aplicación, una aplicación de una sola página (SPA) reemplaza o actualiza solo las partes relevantes de la interfaz, lo que resulta en una experiencia más fluida y rápida para el usuario.
            </p>
            <p>
                React Router aborda este enfoque SPA proporcionando un conjunto de componentes que permiten a los desarrolladores definir cómo se debe comportar la navegación en la aplicación. A través de estas rutas y componentes, React Router permite:
            </p>
            <ul>
                <li><b>Definir Rutas:</b> Puedes definir las diferentes rutas (URLs) de tu aplicación y asociarlas con componentes específicos que se deben renderizar cuando se accede a esas rutas.</li>
                <li><b>Navegación Declarativa:</b> React Router proporciona componentes especiales como Route, Link, y NavLink que permiten a los desarrolladores definir la navegación de manera declarativa utilizando JSX.</li>
                <li><b>Gestión de Historial:</b> React Router maneja el historial de navegación, lo que significa que puedes navegar hacia adelante y hacia atrás en la historia del navegador sin recargar la página.</li>
                <li><b>Parámetros y Consultas:</b> Puedes definir rutas que contengan parámetros variables y consultas para capturar valores específicos de la URL y pasarlos a los componentes.</li>
                <li><b>Anidamiento de Rutas:</b> Puedes anidar rutas para construir jerarquías de navegación más complejas.</li>
                <li><b>Manejo de Errores:</b> React Router permite configurar rutas de manejo de errores, lo que es útil para mostrar páginas 404 o manejar otros errores de navegación.</li>
                <li><b>Lazy Loading:</b> Puedes cargar componentes bajo demanda (lazy loading) para mejorar el rendimiento de la aplicación cargando solo los componentes necesarios para la vista actual.</li>
            </ul>
        </>
    )
}