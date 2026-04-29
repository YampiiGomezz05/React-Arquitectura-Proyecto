import { Outlet } from "react-router-dom";
import heroBg from "@/assets/images/bg-1.jpg"
import { ArrowBigLeft} from "lucide-react";
import { Link } from "react-router-dom";
import { IconButton } from "../components/IconButton";




export default function MainLayout (){
    return (
        <div className="relative min-h-screen text-text-primary">
            
            <div 
            className="absolute inset-0 -z-10 bg-cover bg-center"
            style={{backgroundImage: `url(${heroBg})`}}
            />

            <Link to ='/auth'>
            <IconButton>

            <ArrowBigLeft/>

            </IconButton>



            </Link>
            </div>
            
    )
}