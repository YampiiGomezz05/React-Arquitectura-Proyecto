import {CreateUserPage} from "@/features/users/"

export default function App(){
    return(
    <div className="min-h text-center grid grid-cols-1 gap-4 mt-5">

    <h1 className="text-white text-4xl font-bold bg-green-800  p-6">
    Con Yampi se siente Ricoprogramar...
    </h1>
    
    <CreateUserPage />


</div>

    )
}