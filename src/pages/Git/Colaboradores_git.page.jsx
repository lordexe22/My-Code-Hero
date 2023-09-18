export default function ColaboradoresGit(){

return(
        <>
            <h3>Colaboradores</h3>

            <h4>¿Como añadir colaboradores?</h4>

            <p>La plataforma de git-hub permite el trabajo colaborativo entre desarrolladores, por lo cual es posible brindar acceso a otros desarrolladores a un proyecto para que colaboren en el mismo. Para permitir que otro usuario realice cambios sobre alguno de los repositorio alojados en la plataforma de git-hub se debe agregar al mismo como un colaborador de dicho repositorio. </p>
            <p> Lo primero que debemos hacer es ingresar al repositorio al cual querramos agregar el colaborador, nos vamos a la sección de <b>"Settings"</b> y a continuación a <b>"Collaborators"</b>. Posiblemente se pida la contraseña para verificar el usuario. Al finalizar se nos da acceso al <b>"Manage Access"</b> lugar en el cual podemos agregar y eliminar a los colaboradores que participan del repositorio seleccionado.
            </p>
            <p>Para agregar a un colaborador es necesario conocer previamente su nombre de usuario para poder buscarlo en el <b>"Manage Access"</b>. El colaborador va a recibir una invitación para participar como colaborador del repositorio y al aceptar la misma tendrá acceso el mismo.</p>
     
            <p>Lo último que se debe hacer es darle permisos al colaborador para que pueda interactuar con el repositorio remoto. Para brindarle permisos a un colaborador hay que agregarlo en la sección <b>"DIRECT ACCESS"</b> que se encuentra dentro de la pestaña de <b>"collaborators"</b>.</p>
            <p>Ahora tanto el creador del repositorio como sus colaboradores podrán descargar el repositorio remoto, editarlo de manera local y luego subir los cambios y actualizar el repositorio remoto mediante un <b>"Pull Request"</b>. Un Pull Request es una forma de proponer cambios en un repositorio a los propietarios del mismo para que los revisen y, si están de acuerdo, los fusionen en la rama principal del proyecto.</p>
       </>
    )
}