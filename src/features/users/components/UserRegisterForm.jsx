import {useState , useEffect} from "react"; 
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
import { getDocumentType } from "../services/SelectService";
import {userSchema} from "../schemas/userSchema";
import { Checkbox } from "../../../shared";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { SquareArrowRightEnter , Menu} from "lucide-react";



export default function UserRegisterForm (){
    const navigate = useNavigate();
    const [DocumentType , setDocumentType] = useState ([])
    const [formData , setformData] = useState({
    userName: "",
    userEmail: "",
    userPhone: "",
    userDocumentType: "",
    userDocumentNumber: "",
    userPassword: "",

    //Flags booleanos *Se hace para cumplir de una con los requerimientos 
    isStaff:false,
    isActive: true,
    isSuperUser: false
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
    <h1 className="text text-primary text-2xl mb-6 text-center pt-6">
        REGISTRO DE USUARIOS
    </h1>
    <form className="grid grid-cols-1 place-items-center gap-6"
    onSubmit={handleSubmit}
    >
    { /* Inputs*/ }
        <div className=" grid grid-cols-2 gap-6 my-0 mx-auto border p-[24px] rounded-[6px]">

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

    <Checkbox
    id="isStaff"
    name="isStaff"
    label="Es Staff"
    checked={formData.isStaff}
    onChange={handleChange}
    />

    <Checkbox
    id="isSuperUser"
    name="isSuperUser"
    label="Es Super User"
    checked={formData.isSuperUser}
    onChange={handleChange}
    />

    <Checkbox
    id="isActive"
    name="isActive"
    label="Está Activo"
    checked={formData.isActive}
    onChange={handleChange}
    />
{/* Actions*/ }
<div className="flex items-end justify-center gap-6">
    <Button 
    type = "button"
    variant="secondary"
    size="sm"
    onClick={() => navigate(-1)}
    >
    Cancelar
    </Button>

    <Button 
    type = "submit"
    variant="primary"
    size="sm"
    >
    Guardar
    </Button>


    {/* Icon Button */}
    <Link to ='/dashboard'>
    <IconButton
    variant = "ghost"
    >
    <SquareArrowRightEnter/>
    </IconButton>
    </Link>



{/* ======== Dropdown ======== */}
                        <div className="p-10">
                            <DropDown>
                                <DropDownTrigger>
                                    <IconButton aria-label="Menú de usuario">
                                        <Menu/>
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
                                </DropdownContent>
                            </DropDown>
                        </div>
    
</div>

</div>


    </form> 

    </div>
    )
}