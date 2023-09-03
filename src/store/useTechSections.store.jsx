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
    "git": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
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
            {text: "Seleccionando un Router", url: "seleccionando-un-router"},
            {text: "createBrowserRouter", url: "createBrowserRouter"},
            {text: "createHashRouter", url: "createHashRouter"},
            {text: "createMemoryRouter", url: "createMemoryRouter"},
            {text: "createStaticHandler", url: "createStaticHandler"},
            {text: "createStaticRouter", url: "createStaticRouter"},
            {text: "RouterProvider", url: "RouterProvider"},
            {text: "StaticRouterProvider", url: "StaticRouterProvider"},
        ]},
        {"category":"Router Components",
         "sections":[
            {text: "BrowserRouter", url: "BrowserRouter"},
            {text: "HashRouter", url: "HashRouter"},
            {text: "MemoryRouter", url: "RouteMemoryRouter"},
            {text: "NativeRouter", url: "NativeRouter"},
            {text: "Router", url: "Router"},
            {text: "StaticRouter", url: "StaticRouter"},
        ]},
        {"category":"Route",
         "sections":[
            {text: "Route", url: "Route"},
            {text: "action", url: "action"},
            {text: "errorElement", url: "errorElement"},
            {text: "lazy", url: "lazy"},
            {text: "loader", url: "loader"},
            {text: "shouldRevalidate", url: "shouldRevalidate"},
        ]},
        {"category":"Components",
         "sections":[
            {text: "Await", url: "Await"},
            {text: "Form", url: "Form"},
            {text: "Link", url: "Link"},
            {text: "Link (RN)", url: "Link-RN"},
            {text: "NavLink", url: "NavLink"},
            {text: "Navigate", url: "Navigate"},
            {text: "Outlet", url: "Outlet"},
            {text: "Route", url: "Route"},
            {text: "Routes", url: "Routes"},
            {text: "ScrollRestoration", url: "ScrollRestoration"},
        ]},
        {"category":"Hooks",
         "sections":[
            {text: "useActionData", url: "useActionData"},
            {text: "useAsyncError", url: "useAsyncError"},
            {text: "useAsyncValue", url: "useAsyncValue"},
            {text: "useBeforeUnload", url: "useBeforeUnload"},
            {text: "useFetcher", url: "useFetcher"},
            {text: "useFetchers", url: "useFetchers"},
            {text: "useFormAction", url: "useFormAction"},
            {text: "useHref", url: "useHref"},
            {text: "useInRouterContext", url: "useInRouterContext"},
            {text: "useLinkClickHandler", url: "useLinkClickHandler"},
            {text: "useLinkPressHandler", url: "useLinkPressHandler"},
            {text: "useLoaderData", url: "useLoaderData"},
            {text: "useLocation", url: "useLocation"},
            {text: "useMatch", url: "useMatch"},
            {text: "useMatches", url: "useMatches"},
            {text: "useNavigate", url: "useNavigate"},
            {text: "useNavigation", url: "useNavigation"},
            {text: "useNavigationType", url: "useNavigationType"},
            {text: "useOutlet", url: "useOutlet"},
            {text: "useOutletContext", url: "useOutletContext"},
            {text: "useParams", url: "useParams"},
            {text: "useResolvedPath", url: "useResolvedPath"},
            {text: "useRevalidator", url: "useRevalidator"},
            {text: "useRouteError", url: "useRouteError"},
            {text: "useRouteLoaderData", url: "useRouteLoaderData"},
            {text: "useRoutes", url: "useRoutes"},
            {text: "useSearchParams", url: "useSearchParams"},
            {text: "useSearchParams (RN)", url: "useSearchParams-RN"},
            {text: "useSubmit", url: "useSubmit"},
        ]},
        {"category":"Fetch Utilities",
         "sections":[
            {text: "json", url: "json"},
            {text: "redirect", url: "redirect"},
            {text: "redirectDocument", url: "redirectDocument"},
        ]},
        {"category":"Utilities",
         "sections":[
            {text: "createRoutesFromChildren", url: "createRoutesFromChildren"},
            {text: "createRoutesFromElements", url: "createRoutesFromElements"},
            {text: "createSearchParams", url: "createSearchParams"},
            {text: "defer", url: "defer"},
            {text: "generatePath", url: "generatePath"},
            {text: "usRouterErrorResponse", url: "usRouterErrorResponse"},
            {text: "Location", url: "Location"},
            {text: "matchPath", url: "matchPath"},
            {text: "matchRoutes", url: "matchRoutes"},
            {text: "renderMatches", url: "renderMatches"},
            {text: "resolvePath", url: "resolvePath"},
        ]},
        {"category":"Guias",
         "sections":[

        ]},
        {"category":"Plantillas de código",
        "sections":[
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