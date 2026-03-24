export default function Input({
label,
type = "text",
...props
}) {
return (
    <div className="w-[320px]">
    
      {/* Label */}
    <label
        className="
        block
        text-[8px]
        mb-1
        place-self-start
        "
    >
        {label}
    </label>


      {/* Contenedor del input */}
    <div className="relative
                    h-12
                    flex
                    items-center ">
        
        {/* Área interactiva invisible */}
        <div
        className="
        absolute 
        inset-0"
        onMouseDown={(e) => {
            e.preventDefault();
            e.currentTarget.nextSibling.focus();
        }}
        />

        {/* Input real */}
        <input
        type={type}
        className="
            w-full
            h-12
            rounded-md
            border
            border-border
            px-4
            text-base

            focus:outline-none
            focus:ring-2
            focus:ring-focus-ring
            focus:border-focus-border
        "
        {...props}
        />

    </div>
        {/* Feedback message*/}

    </div>
);
}