import "./header.css";
import {Link} from "react-router-dom";
export default function Header (){
    return(
        <section className="sectionMain">
            <div>
                <ul className= "ulNav">
                    <li className="linav-envios"><Link to= "/Envios"> Envios </Link></li> 
                    <li className="linav-redes"><Link to= "/Redes"> Redes Sociales </Link></li> 
                </ul>
            </div>
            <h1 className="h1title"><Link to= "/"> WE ARE <br/> BROTHERS </Link></h1>
            <div>
                <div>
                    <ul className="ulNav">
                        <li className="linav-sesion"><Link to= "/Login"> Iniciar Sesion </Link></li> 
                        <li className="linav-carrito"><Link to= "/cart"> Carrito </Link></li> 
                    </ul>
                </div>
            </div>    
        </section>   
    )
}






