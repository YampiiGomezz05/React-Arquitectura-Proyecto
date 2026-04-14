import {useState , useEffect} from "react"; 
import {Input, Button, DeleteCounter2 , Select} from "@/shared"
import { getDocumentType } from "../services/SelectService";
import {userSchema} from "../schemas/userSchema";


export default function UserRegisterForm (){

    const [DocumentType , setDocumentType] = useState ([])
    const [formData , setformData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userDocumentType: "",
    userDocumentNumber: "",
    userPassword: "",
    });
    const [errors, setErrors] = useState ({})

    useEffect(() => {
        getDocumentType().then(setDocumentType)
    }, []);

    //=========================
    //      Handle Génerico
    //* Función que se ejecuta cada vez que cambia el valor de un input del formulario
    //==========================

    const handleChange = (e) => {
    // se obtiene el nombre del campo y su valor 
    const { name, value } = e.target;
    
    setformData((prev) => ({
        // Se copian todos los valores anteriores del estado
        ...prev,
        // Se actualiza únicamente lo que cambió
        [name]: value,
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
        const result = userSchema.safeParse(formData);

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
<div>
    <h1 className="text text-primary text-2xl mb-6">
        REGISTRO DE USUARIOS
    </h1>
    <form className="grid grid-cols-1 place-items-center gap-6"
    onSubmit={handleSubmit}
    >
    { /* Inputs*/ }
        <div className=" grid grid-cols-2 gap-6 my-0 mx-auto">

    <Input
    label= "Nombre"
    name= "userName"
    placeholder= "Ingrese su Nombre" 
    value = {formData.userName}
    type="input"
    onChange ={handleChange }
    error = {errors.userName}
    />
    
    <Input
    label= "Correo"
    name= "userEmail"
    placeholder= "Ingrese su correo"
    value = {formData.userEmail}
    type="email" 
    onChange ={handleChange}
    error = {errors.userEmail}
    />
    <Select
    label= "Tipo de Documento"
    name= "userDocumentType"
    options= {DocumentType}
    value = {formData.userDocumentType}
    onChange ={handleChange}
    error = {errors.userDocumentType}
    />

    <Input
    label= "Telefono"
    name= "userPhone"
    placeholder= "Ingrese su telefono" 
    value = {formData.userPhone}
    type="tel"
    onChange ={handleChange}
    error = {errors.userPhone}
    />



    <Input
    label= "Numero de Documento"
    name= "userDocumentNumber"
    placeholder= "Ingrese su Numero de documento"
    value = {formData.userDocumentNumber}
    onChange ={handleChange }
    error = {errors.userDocumentNumber}
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


</div>

{/* Actions*/ }
<div className="flex items-end justify-center gap-6">
    <Button 
    type = "button"
    variant="secondary"
    size="sm">
    Cancelar
    </Button>

    <Button 
    type = "submit"
    variant="primary"
    size="sm">
    Guardar
    </Button>
</div>

    </form>
    {/* <DeleteCounter/>

    <DeleteEfect/> */}

    <DeleteCounter2/>

    </div>
    )
}