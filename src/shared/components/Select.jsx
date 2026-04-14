export default function Select({
    label,
    name,
    error,
    value,
    onChange,
    options = [],
}) {
    return (
        <div className="w-[320px]">

            {label && (
            <label className="block text-small mb-1 text-text-secondary-500 place-self-start">
            
                {label}
            
            </label>

            )}
            
            <select 
            name = {name}
            value={value}
            onChange={onChange}
            className="
            w-full
            h-12
            rounded-b-md
            border
            border-border
            px-4

            hover:border
            hover:border-2
            hover:border-focus-border
            
            ">


                <option value="">
                    Selecione una Opcion
                </option>

                {options.map((opt) =>  (
                    <option key={opt.id} value ={opt.id}>
                        {opt.label}
                    </option>
                ))}


    </select>
        {error && ( <p className="text-caption text-red-800 place-self-start">
        {error}   
        </p>)}
        </div>

    )
}