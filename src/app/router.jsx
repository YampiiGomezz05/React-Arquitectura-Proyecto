import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/shared/layouts/MainLayout"
import {CreateUserPage} from "@/features/users"

    const router =  createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children :[
            {
                index: true,
                element: <CreateUserPage/>
            },

            {
                path: "cursos",
                element: <h1 className="p-4">Cursos</h1>,
            },

            {
                path: "recursos",
                element: <h1 className="p-4">Recursos</h1>,
            },

            {
                path: "Contacto",
                element: <h1 className="p-4">Contacto</h1>,
            },
        ],
    },
]);

export default router