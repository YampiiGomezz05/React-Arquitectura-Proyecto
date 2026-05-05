// Hooks de React para manejar estado y efectos
import { useState , useEffect } from "react";


// Iconos Usados dentro del Switch

import{Check , X} from "lucide-react"

// Componente reutilizable para representar un switch de estado (activo/ inactivo)

export default function Switch ({
    checked = false,
    onChange,
    disabled = false,
    size = "md",
}) {
    // Estado interno del componente 
    // Se inicializa con el valor recibido desde la prop "checked"

    const [isActive, setIsActive] = useState(checked)

    // Efecto que sincroniza el estado interno 
    //Con el valor recibido desde el componente padre
    
    useEffect(() => {
        setIsActive(checked);
    }, [checked]) // Se ejecuta cada vez que cambia el checked

    // Funcion que maneja el cambio del switch
    const handleToggle = () =>{

        // si el switch esta deshabilitado no permite la interaccion
        if(disabled) return;
        
        
        //Calcula  el nuevo estado(invierte el valor actual)
        const newValue = !isActive;


        //Actualiza el estado interno
        setIsActive(newValue);


        // Si existe un callback onChange, se ejecuta
        // enviando el nuevo valor al componente padre
        if(onChange){
            onChange(newValue)
        }
    };

    // Clases de tamaño del contenedor del switch

    const sizes = {
        sm: "h-5 w-9",
        md: "h-6 w-11",
        lg: "h-6 w-6",
    };

    //Clases de tamaño del "knob" (el circulo que se mueve)
    const knobSizes = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-6 w-6"
    };

    return(

        //Boton que funciona como switch 
        <button
        onClick={handleToggle}
        disabled={disabled}
        className={`
            // Posicionamiento base del switch 
            relative inline-flex items-center


            //Forma redondeada del contenedor
            rounded-full transition-colors

            // Tamaño  dinamico segun la prop "size"
                ${sizes[size]}


            //Color dependiendo del estado
            ${isActive ?  "bg-green-500" : "bg-gray-300"}

            // Estilo cuando esta deshabilitado
            ${disabled ? "opacity-50  cursor-not-allowed" : "cursor-pointer"}
            `}
            >





                {/* "knob del switch (el circulo que se mueve de izq a der) " */}
                <span
                className={`
                    absolute left-0.5 flex items-center  justify-center


                    // Formato del knob
                    rounded-full bg-white shadow


                    // Animacion de movimiento 
                    transition-transform


                    //Tamaño dinámico del knob
                    ${knobSizes[size]}


                    //Posicion dependiendo del estado 
                    ${isActive ? "translate-x-full" : "translate-x-0"}
                    `}
                >   
                {/* Icono que cambia dependiendo del estado
                    ACTIVO
                    DESACTIVO */}

                {isActive ? (
                    <check size={12} className="text-green-600"/>
                ) : (
                    <X size={12} className="text-gray-500"/>
                )
            }

                </span>
            </button>
    )
}

