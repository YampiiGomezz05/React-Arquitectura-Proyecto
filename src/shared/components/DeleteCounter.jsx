import { useState } from "react";

export default function DeleteCounter(){
    const [count,setCount] = useState(0)
    return(
        <div>
            <p>
                Contador: {count} 
                <button onClick={() => setCount(count + 1)} className="border p-3">
                    incrementar
                </button>
            </p>
        </div>
    );

}
// Hacer la actividad anterior con una función


// export default function DeleteCounter (){
//     let count = 0;

//     const incrementar = () => {
//         count = count + 1;
//         console.log("Nuevo Valor" , count)
//     }

//     return (
//         <div>
//                 <p>
//                     Contador : {count}
//                     <button onClick={incrementar} className="border p-3">Incrementar</button>
//                 </p>
//         </div>
//     )
// }