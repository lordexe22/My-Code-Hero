export default function ColaboradoresGit(){

return(
        <>
            <h3>Colaboradores</h3>

            <h4>¿Como añadir colaboradores?</h4>

            <p>La plataforma de git-hub permite el trabajo colaborativo entre desarrolladores, por lo cual es posible brindar acceso a otros desarrolladores a un proyecto para que colaboren en el mismo. Para permitir que otro usuario realice cambios sobre alguno de los repositorio alojados en la plataforma de git-hub se debe agregar al mismo como un colaborador de dicho repositorio. </p>
            <p> Lo primero que debemos hacer es ingresar al repositorio al cual querramos agregar el colaborador, nos vamos a la sección de <b>"Settings"</b> y a continuación a <b>"Collaborators"</b>. Posiblemente se pida la contraseña para verificar el usuario. Al finalizar se nos da acceso al <b>"Manage Access"</b> lugar en el cual podemos agregar y eliminar a los colaboradores que participan del repositorio seleccionado.
            </p>
            <p>Para agregar a un colaborador es necesario conocer previamente su nombre de usuario para poder buscarlo en el <b>"manage Access"</b>. El colaborador va a recibir una invitación para participar como colaborador del repositorio y al aceptar la misma tendrá acceso para trabajar conjuntamente en el repositorio, esto significa que ahora tanto el creador del repositorio como sus colaboradores podrán descargar el repositorio remoto, editarlo de manera local y luego subir los cambios y actualizar el repositorio remoto.</p>
       </>
    )
}