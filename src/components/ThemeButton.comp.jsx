/* Este código es un componente de React que muestra un botón con un icono de sol o de luna, dependiendo del tema actual de la aplicación. Al presionar el botón, se cambia el tema y se guarda el nuevo valor en el local storage. Además, el código verifica si el valor de tema guardado en el local storage es diferente al valor actual de la aplicación, y si es así, se cambia el tema automáticamente al valor guardado en el local storage. */

import React, { useEffect } from "react";
import useTheme from "../store/useTheme.store.jsx";

const ThemeButton = () => {
  const LOCAL_STORAGE_KEY = "theme"; // ⚡1 - Se establece la clave que se usará para guardar el tema en el local storage
  const LIGHT_ICON = "/My-Code-Hero/sun.ico"; // ⚡2 - Se establece la ruta de la imagen del icono para el tema claro
  const DARK_ICON = "/My-Code-Hero/moon.ico"; // ⚡3 - Se establece la ruta de la imagen del icono para el tema oscuro

  /* ⚡4 - Se leen el valor global del tema actual 'globalTheme' y la función para cambiarle el valor 'toggleTheme' */
  const { globalTheme, toggleTheme, LIGHT_VALUE, DARK_VALUE } = useTheme();

  /* ⚡5 ⚡9 - Se verifica si el valor de 'globalTheme' es diferente al que se encuentra en el local storage, si es así se cambia el tema de la aplicación (que es el que marca globalTheme) */
  useEffect(() => {
    if (globalTheme !== localStorage.getItem(LOCAL_STORAGE_KEY)) {
      toggleTheme();
    }
  }, [globalTheme]);

  /* ⚡8 - La función handleClick cambia el tema de la aplicación y guarda el nuevo valor en el local storage */
  const handleClick = () => {
    const newTheme = globalTheme === LIGHT_VALUE ? DARK_VALUE : LIGHT_VALUE;
    localStorage.setItem(LOCAL_STORAGE_KEY, newTheme);
    toggleTheme();
  };

  /* ⚡6 Se determina la ruta y el texto alternativo del icono según el tema actual de la aplicación */
  const iconSrc = globalTheme === LIGHT_VALUE ? LIGHT_ICON : DARK_ICON;
  const iconAlt =
    globalTheme === LIGHT_VALUE ? "Icono de sol" : "Icono de luna";

  /* ⚡7 Se devuelve el botón con el icono, el cual ejecuta la función handleClick al ser presionado */
  return (
      <div onClick={handleClick} className={`theme-button`}>
        <img src={iconSrc} alt={iconAlt} />
      </div>
  );
};

export default ThemeButton;
