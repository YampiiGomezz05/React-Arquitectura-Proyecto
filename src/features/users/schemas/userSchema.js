import { z } from "zod";
import { ParseStatus } from "zod/v3";

export const userSchema = z.object({

userName : z
.string()
.min( 3, "El nombre debe tener mínimo 3 caracteres")
.max( 60, "El nombre es demasiado largo"),


userEmail :z 
.string()
.regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Debe ingresar un email valido"),


userPhone : z
.string()
.regex(/^[0-9]{10}$/ , "El teléfono debe tener 10 dígitos"),


userDocumentType : z
.string()
.min(1, "Debe seleccionar un tipo de documento"),


userDocumentNumber: z
.string()
.min(5,"Número de documento invalido")
.max(20,"Número de documento demasiado largo"),


userPassword : z
.string()
.min(8, "Contraseña debe tener minimo 8 caracteres")
.regex(/[A-Z]/ , "Debe contener al menos una mayúscula")
.regex(/[a-z]/ , "Debe contener al menos una minúscula")
.regex(/[0-9]/ , "Debe contener al menos un numero")
.regex(/[^A-Za-z0-9]/ , "Debe contener al menos un caracter especial")

})