/* 
Contiene el estado del tema actual de la aplicación dentro de la variable 'theme', pudiendo variar entre 'light' y 'dark'. Adicionalmente proporciona un método para actualizar la variable 'theme' mediante una función toggleTheme. 
El valor de la variable 'theme' solo puede alterado por el componente ThemeButton, el cual es el botón de cambio de estado de la aplicación, por lo tanto, debe ser el único componente con acceso al método toggleTheme.
El valor de theme debe ser usado por todos aquellos componentes cuyos estilos dependan del valor de esta variable.
*/

// Se requere la importación del módulo create de la libreria 'zustand' para el manejo de variables de estado globales.
import { create } from "zustand";

const useTheme = create((set) => ({
  DARK_VALUE: "dark", // Constante usada para aplicar el tema 'dark' a la variable globalTheme
  LIGHT_VALUE: "light", // Constante usada para aplicar el tema 'light' a la variable globalTheme
  globalTheme: localStorage.getItem("theme") || "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.globalTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme); // Guarda el theme actual en el local storage
      return { globalTheme: newTheme };
    }),
}));

export default useTheme;
