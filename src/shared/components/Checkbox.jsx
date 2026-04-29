export default function Checkbox({
    id,  //Identificador unico necesario para accesibilidad
    name, // Nombre del campo (util para el formulario)
    label, // Texto invisible asociado con el checkbox
    checked = false, // Estado controlado del checkbox
    onChange,  //  Funcion que maneja el cambio de estado 
    disabled = false,// Indica si el checkbox esta habilitado
    className = "", // Clases adicionales para personalizacion
}){

return(
        <label 
            htmlFor={id}
            className={`
            flex items-center gap-2
            text-sm 
            cursor-pointer
            ${disabled ? "opacity-50 cursor-not-allowed :" : ""}
            ${className}
            `}  //si es falso se aplican estos estilos sino, se aplican los de arriba
            >
            

    {/* {Este es el input del checkbox} */}
    <input 
    id={id}
    name={name}
    type="checkbox"
    checked={checked}
    disabled={disabled}
    onChange={onChange}
    className="w-5 h-5"
    />
    
    {/*{Texto del checkbox}*/}
    <span>{label}</span>
    </label>
)
}