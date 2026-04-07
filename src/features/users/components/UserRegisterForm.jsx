import {useState , useEffect} from "react"; 
import {Input, Button, DeleteCounter2 , Select} from "@/shared"
import { getDocumentType } from "../services/SelectService";


export default function UserRegisterForm (){

    const [DocumentType , setDocumentType] = useState ([])

    useEffect(() => {
        getDocumentType().then(setDocumentType)
    }, []);

    //Handle

    const handleNameChange = (e) => {
        console.log("Nombre: "  + e.target.value)
    }
    const handleEmailBlur = (e) => {
        console.log("Email: "  + e.target.value)
    }


    return(
<div>
    <h1 className="text text-primary text-2xl mb-6">
        REGISTRO DE USUARIOS
    </h1>
    <form className="grid grid-cols-1 place-items-center gap-6 ">
    { /* Inputs*/ }
        <div className=" grid grid-cols-2 gap-6 my-0 mx-auto">

    <Input
    label= "Nombre"
    placeholder= "Ingrese su Nombre" 
    type="input"
    onChange ={handleNameChange}
    />
    <Input
    label= "Correo"
    placeholder= "Ingrese su correo"
    type="email" 
    onBlur = {handleEmailBlur}
    />

    <Input
    label= "Nombre"
    placeholder= "Ingrese su Nombre" 
    type="input"
    onChange ={handleNameChange}
    />

    <Input
    label= "Nombre"
    placeholder= "Ingrese su Nombre" 
    type="input"
    onChange ={handleNameChange}
    />

    <Input
    label= "Nombre"
    placeholder= "Ingrese su Nombre" 
    type="input"
    onChange ={handleNameChange}
    />

    <Input
    label= "Nombre"
    placeholder= "Ingrese su Nombre" 
    type="input"
    onChange ={handleNameChange}
    />

    <Input
    label= "Nombre"
    placeholder= "Ingrese su Nombre" 
    type="input"
    onChange ={handleNameChange}
    />

    <Input
    label= "Nombre"
    placeholder= "Ingrese su Nombre" 
    type="input"
    onChange ={handleNameChange}
    />

    <Select
        label= "Tipo de Documento"
        name= "DocumentType"
        options= {DocumentType}
        />

</div>

{/* Actions*/ }
<div className="flex items-end justify-center gap-6">
    <Button 
    variant="secondary"
    size="sm">
    Cancelar
    </Button>

    <Button 
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