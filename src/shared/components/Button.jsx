export default function Button({
    variant = "primary", // estilo visual
    size = "md",         // tamaño
    type = "button",     // tipo de botón
    children,            // contenido interno
    ...props             
}) {

    const variants = {
        primary: "text-brand border text-body hover:bg-surface-muted hover:text-text-inverse",
        secondary:
        "bg-background border border-border text-primary hover:bg-surface-muted hover:text-text-inverse "
    };

    const sizes = {
        sm: `
            h-9 px-3
            before:absolute before:content-['']
            before:-inset-y-[6px] before:-inset-x-[0px]
        `,
        md: `
            h-10 px-
            before:absolute before:content-['']
            before:-inset-y-[5px] before:-inset-x-[0px]
        `
    };

    return (
        <button
            type={type}
            className={`
                relative
                inline-flex items-center justify-center
                rounded-md
                transition-colors
                ${variants[variant]}
                ${sizes[size]}
            `}
            {...props}
        >
            {children}
        </button>
        
    );
}