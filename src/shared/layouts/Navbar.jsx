import {Search, User , } from "lucide-react";
import { Link } from "react-router-dom";
import  logo from "@/assets/images/logo.png";
import {Input,
    Button,
    DeleteCounter2 ,
    Select , 
    IconButton ,
    DropDown,
    DropdownContent ,
    DropDownTrigger ,
    DropdownItem 
    }  from "@/shared"
export default function Navbar (){

    return (
        <nav className="w-full bg-trasparent border-b-2"> 
            {/* Caja Papa */}
            <div className="mx-auto max-w-7xl px-16 ">
                {/* Caja hijo mayor */}
                <div className="flex h-16 items-center justify-between">
                    {/* Logo de Marca */}
                    <div className="flex items-center">
                    <Link to={"/"} className="text-h1 font-heading">
                    <img src={logo} alt="logo" className="h-12" />
                    </Link>
                    </div>
                    {/* Links de Navegación */}
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <Link to={"/inicio"} className="hover:text text-primary transition">Inicio
                            </Link>
                            </li>
                        <li>
                            <Link to={"/cursos"} className="hover:text text-primary transition">Cursos
                            </Link>
                            </li>
                        <li>
                            <Link to={"/redes"} className="hover:text text-primary transition">Redes
                            </Link>
                            </li>
                        <li>
                            <Link to={"/contacto"} className="hover:text text-primary transition">Contacto
                            </Link>
                            </li>
                    </ul>
                        {/* Seccion del la Derecha busqueda + Usuario */}
                    <div className="flex items-center gap-4">
                         {/* Buscador icono */}
                        <div className="relative hidden sm:block">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-500" />

                        {/* Input  */}
                        <input 
                        type="text"
                        placeholder="Buscar"
                        className="pl-9 pr-4 py-2.5 border rounded-lg text-body focus:outline-none
                        focus:ring-2 focus:ring text-text-primary"/>
                        </div>
                        
                        {/* Icono de usuario
                        <IconButton aria-label="Menú de usuario">
                                <User/>
                        </IconButton> */}

                        <div className="p-10">
                            <DropDown>
                                <DropDownTrigger>
                                    <IconButton aria-label="Menú de usuario">
                                        <User/>
                                    </IconButton>
                                </DropDownTrigger>

                                <DropdownContent className="right-0 w-48">
                                    <DropdownItem>
                                        <Link to="/auth" className="block w-full">
                                        Autenticación
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <Link to="/dashboard" className="block w-full">
                                        Panel de control
                                        </Link>
                                    </DropdownItem>
                                    <DropdownItem>
                                            <Link to="/dashboard/auth" className="block w-full">
                                            Cerrar Sesión
                                            </Link>
                                        </DropdownItem>

                                </DropdownContent>
                            </DropDown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )

}