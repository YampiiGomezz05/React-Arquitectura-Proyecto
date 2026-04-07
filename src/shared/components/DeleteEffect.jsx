import { useState , useEffect } from "react";

// export default function DeleteEfect(){

//     const[message , setmessage] = useState("Cargando...")

//     useEffect(() => {
//         setTimeout(() =>{
//             setmessage("Componente Cargado...")
//         } , 2000)
//     } ,[])
//     return <h1>{message}</h1>
// }

// ================== Segundo Ejemplo =============================

export default function DeleteEfect(){

    console.log("render")
    const[message , setmessage] = useState("Cargando...")

    useEffect(() => {
        console.log("Efecto Ejecutado")
        
        setTimeout(() =>{
            setmessage("Componente Cargado...")
        } , 2000)

    } ,[])
    return <h1>{message}</h1>

}