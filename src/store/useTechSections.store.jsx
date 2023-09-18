// Retorna una lista con todas las secciones de cada una de las tecnologias disponibles

import { create } from 'zustand';

const useTechSections = create((set)=>({
    currentSection: 'Introducción',
    "html": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
       ]},
    ],
    "css": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
       ]},
    ],
    "express": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
       ]},
    ],
    "git": [
        {"category":"Primeros pasos",
        "sections":[
            {text: "Introducción", url: "introduccion"},
            {text: "Instalación", url: "instalacion"},
            {text: "Configuración", url: "configuracion"},
            {text: "Repositorio", url: "repositorio"},
            {text: "Colaboradores", url: "colaboradores"},
            {text: "Glosario (P)", url: "glosario"},
       ]},
        {"category":"Conceptos básicos",
        "sections":[
            {text: "Staging area", url: "staging-area"},
            {text: "Commit", url: "commit"},
            {text: "Repositorio remoto", url: "repositorio-remoto"},
            {text: "Branches", url: "branches"},
            {text: "Tags", url: "tags"},
        ]},
    ],
    "javascript": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
       ]},
    ],
    "typescript": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
       ]},
    ],
    "react-router": [
        {"category":"Primeros pasos",
         "sections":[
            {text: "Introducción", url: "introduccion"},
            {text: "Instalación", url: "instalacion"},
            {text: "Estructura básica", url: "estructura-basica"},
        ]},
        {"category":"Routers",
         "sections":[
            {text: "Seleccionando un Router (P)", url: "seleccionando-un-router"},
            {text: "createBrowserRouter (P)", url: "createBrowserRouter"},
            {text: "createHashRouter (P)", url: "createHashRouter"},
            {text: "createMemoryRouter (P)", url: "createMemoryRouter"},
            {text: "createStaticHandler (P)", url: "createStaticHandler"},
            {text: "createStaticRouter (P)", url: "createStaticRouter"},
            {text: "RouterProvider (P)", url: "RouterProvider"},
            {text: "StaticRouterProvider (P)", url: "StaticRouterProvider"},
        ]},
        {"category":"Router Components",
         "sections":[
            {text: "BrowserRouter (P)", url: "BrowserRouter"},
            {text: "HashRouter (P)", url: "HashRouter"},
            {text: "MemoryRouter (P)", url: "RouteMemoryRouter"},
            {text: "NativeRouter (P)", url: "NativeRouter"},
            {text: "Router (P)", url: "Router"},
            {text: "StaticRouter (P)", url: "StaticRouter"},
        ]},
        {"category":"Route",
         "sections":[
            {text: "Route (P)", url: "Route"},
            {text: "action (P)", url: "action"},
            {text: "errorElement (P)", url: "errorElement"},
            {text: "lazy (P)", url: "lazy"},
            {text: "loader (P)", url: "loader"},
            {text: "shouldRevalidate (P)", url: "shouldRevalidate"},
        ]},
        {"category":"Components",
         "sections":[
            {text: "Await (P)", url: "Await"},
            {text: "Form (P)", url: "Form"},
            {text: "Link (P)", url: "Link"},
            {text: "Link (RN) (P)", url: "Link-RN"},
            {text: "NavLink (P)", url: "NavLink"},
            {text: "Navigate (P)", url: "Navigate"},
            {text: "Outlet (P)", url: "Outlet"},
            {text: "Route (P)", url: "Route"},
            {text: "Routes (P)", url: "Routes"},
            {text: "ScrollRestoration (P)", url: "ScrollRestoration"},
        ]},
        {"category":"Hooks",
         "sections":[
            {text: "useActionData (P)", url: "useActionData"},
            {text: "useAsyncError (P)", url: "useAsyncError"},
            {text: "useAsyncValue (P)", url: "useAsyncValue"},
            {text: "useBeforeUnload (P)", url: "useBeforeUnload"},
            {text: "useFetcher (P)", url: "useFetcher"},
            {text: "useFetchers (P)", url: "useFetchers"},
            {text: "useFormAction (P)", url: "useFormAction"},
            {text: "useHref (P)", url: "useHref"},
            {text: "useInRouterContext (P)", url: "useInRouterContext"},
            {text: "useLinkClickHandler (P)", url: "useLinkClickHandler"},
            {text: "useLinkPressHandler (P)", url: "useLinkPressHandler"},
            {text: "useLoaderData (P)", url: "useLoaderData"},
            {text: "useLocation (P)", url: "useLocation"},
            {text: "useMatch (P)", url: "useMatch"},
            {text: "useMatches (P)", url: "useMatches"},
            {text: "useNavigate (P)", url: "useNavigate"},
            {text: "useNavigation (P)", url: "useNavigation"},
            {text: "useNavigationType (P)", url: "useNavigationType"},
            {text: "useOutlet (P)", url: "useOutlet"},
            {text: "useOutletContext (P)", url: "useOutletContext"},
            {text: "useParams (P)", url: "useParams"},
            {text: "useResolvedPath (P)", url: "useResolvedPath"},
            {text: "useRevalidator (P)", url: "useRevalidator"},
            {text: "useRouteError (P)", url: "useRouteError"},
            {text: "useRouteLoaderData (P)", url: "useRouteLoaderData"},
            {text: "useRoutes (P)", url: "useRoutes"},
            {text: "useSearchParams (P)", url: "useSearchParams"},
            {text: "useSearchParams (RN) (P)", url: "useSearchParams-RN"},
            {text: "useSubmit (P)", url: "useSubmit"},
        ]},
        {"category":"Fetch Utilities",
         "sections":[
            {text: "json (P)", url: "json"},
            {text: "redirect (P)", url: "redirect"},
            {text: "redirectDocument (P)", url: "redirectDocument"},
        ]},
        {"category":"Utilities",
         "sections":[
            {text: "createRoutesFromChildren (P)", url: "createRoutesFromChildren"},
            {text: "createRoutesFromElements (P)", url: "createRoutesFromElements"},
            {text: "createSearchParams (P)", url: "createSearchParams"},
            {text: "defer (P)", url: "defer"},
            {text: "generatePath (P)", url: "generatePath"},
            {text: "usRouterErrorResponse (P)", url: "usRouterErrorResponse"},
            {text: "Location (P)", url: "Location"},
            {text: "matchPath (P)", url: "matchPath"},
            {text: "matchRoutes (P)", url: "matchRoutes"},
            {text: "renderMatches (P)", url: "renderMatches"},
            {text: "resolvePath (P)", url: "resolvePath"},
        ]},
        {"category":"Guias",
         "sections":[

        ]},
        {"category":"Plantillas de código",
        "sections":[
       ]},
    ],
    "react-hook-form": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
           {text: "Instalación", url: "instalacion"},
        ]},
        {"category":"Primeros pasos",
        "sections":[
            {text: "Formulario básico", url: "formulario-basico"},
        ]},
        {"category":"useForm",
        "sections":[
           {text: "useForm", url: "useForm"},
           {text: "register", url: "register"},
           {text: "unregister", url: "unregister"},
           {text: "formState", url: "formState"},
           {text: "watch", url: "watch"},
           {text: "handleSubmit", url: "handleSubmit"},
           {text: "reset", url: "reset"},
           {text: "resetField", url: "resetField"},
           {text: "setError", url: "setError"},
           {text: "clearErrors", url: "clearErrors"},
           {text: "setValue", url: "setValue"},
           {text: "setFocus", url: "setFocus"},
           {text: "getValues", url: "getValues"},
           {text: "getFieldState", url: "getFieldState"},
           {text: "trigger", url: "trigger"},
           {text: "control", url: "control"},
           {text: "Form", url: "Form"},
        ]},
        {"category":"useController",
        "sections":[
           {text: "useController", url: "useController"},
           {text: "Controller", url: "Controller"},
        ]},
        {"category":"useFormContext",
        "sections":[
           {text: "useFormContext", url: "useFormContext"},
           {text: "formProvider", url: "formProvider"},
        ]},
        {"category":"useWatch",
        "sections":[
            {text: "useWatch", url: "useWatch"},
        ]},
        {"category":"useFormState",
        "sections":[
            {text: "useFormState", url: "useFormState"},
            {text: "ErrorMessage", url: "ErrorMessage"},
        ]},
        {"category":"useFieldArray",
        "sections":[
            {text: "useFieldArray", url: "useFieldArray"},
        ]},
      
      
    ],
    setCurrentSection: (section) => {
        set({ currentSection: section });
        localStorage.setItem('currentSection', section); // Actualiza el valor en el localStorage
    },  
    getCurrentSection: () => {
        return useTechSections.getState().currentSection;
    },
}))

export default useTechSections;