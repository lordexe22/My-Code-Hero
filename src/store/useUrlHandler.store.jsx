/*  Almacena las secciones que componen las URL de la página.
    Adicionalmente almacena estos valores en el localStorage para mantener la página al abrir nuevamente la aplicación.

    Composición de una url:
        /My-Code-Hero/{urlTech}/{urlSection}

    urlTech: url correspondiente a la tecnologia actual (HTML, CSS, JS, etc.).
    urlSection: sección de estudio de la tecnologia actual (introducción, instalación, etc.).
    urlPage: url completa de la página actual /{urlTech}/{urlSection}
    
*/


// Se requere la importación del módulo create de la libreria 'zustand' para el manejo de variables de estado globales.
import { create } from "zustand";

const useUrlHandler = create((set) => ({

    urlTech: localStorage.getItem('urlTech') || '', 
    urlSection: localStorage.getItem('urlSection') || '', 
    urlPage: localStorage.getItem('urlPage') || '',

    setUrlTech: (tech) => {
        set({ urlTech: tech });
        localStorage.setItem('urlTech', tech);
    },
    setUrlSection: (section) => {
        set({ urlSection: section });
        localStorage.setItem('urlSection', section);
    },
    getUrlTech: () => {
        return useUrlHandler.getState().urlTech;
    },
    getUrlSection: () => {
        return useUrlHandler.getState().urlSection;
    },
    getUrlPage: () => {
        return useUrlHandler.getState().urlPage;
    },
    updateUrlPage: () => {
        const urlTech = useUrlHandler.getState().urlTech;
        const urlSection = useUrlHandler.getState().urlSection; 
        if(urlTech && urlSection){
            set({ urlPage: `${urlTech}/${urlSection}` });
            localStorage.setItem('urlPage', `${urlTech}/${urlSection}`);
        }
    }
}));

export default useUrlHandler;
