import {useState, } from "react"; 
import {Input,Button,}  from "@/shared"
import {LoginSchema} from "../schemas/LoginSchema";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SquareArrowRightEnter , Menu} from "lucide-react";


export default function UserRegisterForm (){
    const navigate = useNavigate();

    const [formData , setformData] = useState({
    userEmail: "",
    userPassword: "",

    //Flags booleanos *Se hace para cumplir de una con los requerimientos 
    isStaff:false,
    isActive: true,
    isSuperUser: false
    });
    const [errors, setErrors] = useState ({})


    //=========================
    //      Handle Génerico
    //* Función que se ejecuta cada vez que cambia el valor de un input del formulario
    //==========================

    const handleChange = (e) => {
    // se obtiene el nombre del campo y su valor 
    const { name, value , type , Checkbox , checked} = e.target;
    
    setformData((prev) => ({
        // Se copian todos los valores anteriores del estado
        ...prev,
        // Se actualiza únicamente lo que cambió
        [name]: type  === "checkbox"  ? checked : value,

    }));
}

 //=========================
    //      Handle Submit
    //* Función que se ejecurta cuando se envia el formulario
    //==========================

    const handleSubmit = (e) => {
        // Evita que el formulario recargue la página
        e.preventDefault();

        // Se valida el objeto formData usando el esquema definido con zod
        // safeParse devuelve un objeto indicando si la vlaidación fue exitosa o no
        const result = LoginSchema.safeParse(formData);

        // Si la validaión falla
        if (!result.success) {
            // Objeto donde se alamcenarán los errores por campo
            const fieldErrors = {};

            // Zod devuelve los errores en un arreglo llamado issues
            // Se recorren para asociar cada error a su campo correspondiente
            result.error.issues.forEach((issue) => {
                // issue.path contiene la ruta del campo que falló
                const field = issue.path[0];

                // Se guarda el mensaje de error en el objeto
                fieldErrors[field] = issue.message;

                // Se actualiza el estado de errores para mostrarlos en el formulario
                setErrors(fieldErrors)
            });

            // Se detiene la ejecución porque el formulario tiene errores
            return;
        }

        // Si la validación es exitosa se limpian los errores anteriores
        setErrors({});

        //result.data contiene los datos 
        console.log("Usuario válido:", result.data)
    }

    return(
<div className="flex flex-col justify-center h-screen">
    <h1 className="text text-primary text-2xl mb-6 text-center pt-6">
    Inicio de sesión
    </h1>
    <form className="grid grid-cols-1 place-items-center gap-6"
    onSubmit={handleSubmit}
    >
    { /* Inputs*/ }
        <div className=" grid gap-6 my-0 mx-auto border p-[48px] rounded-[6px]">

    <Input
    label= "Correo"
    name= "userEmail"
    placeholder= "Ingrese su correo"
    value = {formData.userEmail}
    type="email" 
    onChange ={handleChange}
    error = {errors.userEmail}
    />
    
    <Input
    label= "Contraseña"
    name= "userPassword"
    placeholder= "Ingrese su contraseña"
    value = {formData.userPassword}
    type="password"
    onChange ={handleChange }
    error = {errors.userPassword}
    />


<div className="flex items-center justify-center gap-12">
            <Button variant="secondary" size="sm" >
            Cancelar
            </Button>

            <Button variant="primary" size="md" onClick={() => navigate("/dashboard")}>
            Iniciar Sesión
            </Button>
</div>

</div>


    </form> 

    </div>
    )
}