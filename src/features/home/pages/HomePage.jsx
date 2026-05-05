import { Card } from "@/shared";
import { products } from "../../../../data/products/Products";


export default function HomePage (){

    return (
        <div className="mt-4 max-w-7xl mx-auto">
            {/* Hero */}
            {/* Carrusel*/}
            {/*Titulo de Cards*/}
            <h2 className="text-h2 place-self-center mb-12">

            PRODUCTOS
            </h2>
            {/* Cards*/}
            <div className="
            grid
            gap-4
            sm:grid-cols-2
            sm:mx-12
            lg:grid-cols-3
            xl:grid-cols-4
            justify-items-center
            ">
                {
                products.map((product) => (
                <Card key={product.id} product={product} />
                ))}
                
            
            </div>
        </div>
    )
}