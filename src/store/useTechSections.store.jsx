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
            {text: "Instalación", url: "instalacion"},
            {text: "Conceptos básicos", url: "conceptos-basicos"},
            {text: "Estructura básica", url: "estructura-basica"},
       ]},
       {"category":"express()",
       "sections":[
            {text: "express()", url: "express()"},
       ]},
       {"category":"express() (Methods)",
       "sections":[
            {text: "express.json()", url: "express.json()"},
            {text: "express.raw()", url: "express.raw()"},
            {text: "express.Router()", url: "express.Router()"},
            {text: "express.static()", url: "express.static()"},
            {text: "express.text()", url: "express.text()"},
            {text: "express.urlencoded()", url: "express.urlencoded()"},
       ]},
       {"category":"Application",
       "sections":[
            {text: "Application", url: "Application"},
       ]},
      {"category":"Application (Properties)",
      "sections":[
            {text: "app.locals", url: "app.locals"},
            {text: "app.mountpath", url: "app.mountpath"},
         ]},
        {"category":"Application (Events)",
        "sections":[
            {text: "mount", url: "mount"},
        ]},
        {"category":"Application (Methods)",
        "sections":[
            {text: "app.all()", url: "app.all()"},
            {text: "app.delete()", url: "app.delete()"},
            {text: "app.disable()", url: "app.disable()"},
            {text: "app.disabled()", url: "app.disabled()"},
            {text: "app.enable()", url: "app.enable()"},
            {text: "app.enabled()", url: "app.enabled()"},
            {text: "app.engine()", url: "app.engine()"},
            {text: "app.get()", url: "app.get()"},
            {text: "app.listen()", url: "app.listen()"},
            {text: "app.METHOD()", url: "app.METHOD()"},
            {text: "app.param()", url: "app.param()"},
            {text: "app.path()", url: "app.path()"},
            {text: "app.post()", url: "app.post()"},
            {text: "app.put()", url: "app.put()"},
            {text: "app.render()", url: "app.render()"},
            {text: "app.route()", url: "app.route()"},
            {text: "app.set()", url: "app.set()"},
            {text: "app.use", url: "app.use"},
        ]},
        {"category":"Request",
        "sections":[
            {text: "Request", url: "Request"},
        ]},
        {"category":"Request (Properties)",
        "sections":[
            {text: "req.app", url: "req.app"},
            {text: "req.baseUrl", url: "req.baseUrl"},
            {text: "req.body", url: "req.body"},
            {text: "req.cookies", url: "req.cookies"},
            {text: "req.fresh", url: "req.fresh"},
            {text: "req.hostname", url: "req.hostname"},
            {text: "req.ip", url: "req.ip"},
            {text: "req.ips", url: "req.ips"},
            {text: "req.method", url: "req.method"},
            {text: "req.originalUrl", url: "req.originalUrl"},
            {text: "req.params", url: "req.params"},
            {text: "req.path", url: "req.path"},
            {text: "req.protocol", url: "req.protocol"},
            {text: "req.query", url: "req.query"},
            {text: "req.route", url: "req.route"},
            {text: "req.secure", url: "req.secure"},
            {text: "req.signedCookies", url: "req.signedCookies"},
            {text: "req.stale", url: "req.stale"},
            {text: "req.subdomains", url: "req.subdomains"},
            {text: "req.xhr", url: "req.xhr"},
        ]},
        {"category":"Request (Methods)",
        "sections":[
            {text: "req.accepts()", url: "req.accepts()"},
            {text: "req.acceptsCharsets()", url: "req.acceptsCharsets()"},
            {text: "req.acceptsEncodings()", url: "req.acceptsEncodings()"},
            {text: "req.acceptsLanguages()", url: "req.acceptsLanguages()"},
            {text: "req.get()", url: "req.get()"},
            {text: "req.is()", url: "req.is()"},
            {text: "req.param()", url: "req.param()"},
            {text: "req.range()", url: "req.range()"},
        ]},
        {"category":"Response",
        "sections":[
            {text: "Response", url: "Response"},
        ]},
        {"category":"Response (Properties)",
        "sections":[
            {text: "res.app", url: "res.app"},
            {text: "res.headersSent", url: "res.headersSent"},
            {text: "res.locals", url: "res.locals"},
        ]},
        {"category":"Response (Methods)",
        "sections":[
            {text: "res.append()", url: "res.append()"},
            {text: "res.attachment()", url: "res.attachment()"},
            {text: "res.cookie()", url: "res.cookie()"},
            {text: "res.clearCookie()", url: "res.clearCookie()"},
            {text: "res.download()", url: "res.download()"},
            {text: "res.end()", url: "res.end()"},
            {text: "res.format()", url: "res.format()"},
            {text: "res.get()", url: "res.get()"},
            {text: "res.json()", url: "res.json()"},
            {text: "res.jsonp()", url: "res.jsonp()"},
            {text: "res.links()", url: "res.links()"},
            {text: "res.location()", url: "res.location()"},
            {text: "res.redirect()", url: "res.redirect()"},
            {text: "res.render()", url: "res.render()"},
            {text: "res.send()", url: "res.send()"},
            {text: "res.sendFile()", url: "res.sendFile()"},
            {text: "res.sendStatus()", url: "res.sendStatus()"},
            {text: "res.set()", url: "res.set()"},
            {text: "res.status()", url: "res.status()"},
            {text: "res.type()", url: "res.type()"},
            {text: "res.vary()", url: "res.vary()"},
        ]},
        {"category":"Router",
        "sections":[
            {text: "Router", url: "Router"},
        ]},
        {"category":"Router (Methods)",
        "sections":[
            {text: "router.all()", url: "router.all()"},
            {text: "router.METHOD()", url: "router.METHOD()"},
            {text: "router.param()", url: "router.param()"},
            {text: "router.route()", url: "router.route()"},
            {text: "router.use()", url: "router.use()"},
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
    "mongoDB": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
           {text: "Instalación", url: "instalacion"},
           {text: "Conceptos básicos", url: "conceptos-basicos"},
           {text: "Comandos básicos", url: "comandos-basicos"},
       ]},
    ],
    "mongoose": [
        {"category":"Inicio",
        "sections":[
           {text: "Introducción", url: "introduccion"},
           {text: "Instalación", url: "instalacion"},
           {text: "Estructura básica", url: "estructura-basica"},
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