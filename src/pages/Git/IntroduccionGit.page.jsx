
export default function IntroduccionGit(){

    return(
        <>
            <h3>Introduccion a git</h3>

            <h4>¿Que es git?</h4>
            <p>
                Git es un sistema de control de versiones que permite a los desarrolladores y equipos de trabajo rastrear y gestionar cambios en los archivos a lo largo del tiempo. Fue creado por Linus Torvalds en 2005 y se ha convertido en una herramienta esencial en el desarrollo de software moderno.
            </p>

            <h4>¿Por qué es importante Git?</h4>
            <ol>
                <li><b>Control de versiones:</b> Permite llevar un registro detallado de las modificaciones realizadas en un proyecto, lo que facilita la colaboración entre desarrolladores y evita la pérdida de código.</li>
                <li><b>Colaboración:</b> Facilita la colaboración en equipos distribuidos geográficamente al permitir que múltiples personas trabajen en un mismo proyecto al mismo tiempo.</li>
                <li><b>Historial de cambios: </b>Guarda un historial completo de todos los cambios realizados en un proyecto, lo que facilita la identificación y corrección de errores.</li>
                <li><b>Ramas:</b> Permite la creación de ramas independientes para trabajar en nuevas características o correcciones sin afectar la versión principal del proyecto, lo que facilita el desarrollo concurrente.</li>
                <li><b>Integración continua: </b>Se integra fácilmente con herramientas de integración continua y entrega continua (CI/CD) para automatizar pruebas y despliegues.</li>
            </ol>

            <h4>¿Cómo funciona Git?</h4>
            <p>Git funciona mediante la creación de un repositorio que almacena todo el historial de cambios de un proyecto. Cada vez que se realiza una modificación en los archivos, se crea una instantánea o "commit" que registra los cambios. Estos commits se organizan en ramas que pueden fusionarse entre sí cuando se completa una tarea o función. Git también permite clonar repositorios, lo que facilita la colaboración entre desarrolladores y la distribución de proyectos.</p>
        </>
    )
}