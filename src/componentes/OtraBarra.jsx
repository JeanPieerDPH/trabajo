import "./global.css"
import mando from "./imagenes/mando.png"
import lupa from "./imagenes/lupa.png"
import icono from "./imagenes/icono_persona.png"
import carrito from "./imagenes/carrito_compras.png"

const OtraBarra = () =>{
    return <div  className="container-fluid">
        
            
                
            
                <nav className="navbar navbar-expand-lg navbar-dark bg-#383c4c">
                    <div className="container-fluid">
                        <a href="#"> <img src={mando} alt="Logo"></img> </a>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavega">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                        <div id="MenuNavega" className="collapse navbar-collapse" >
                            <ul class="navbar-nav ms-3" id="barraelemnt">
                                            <li class="nav-item">
                                                <a class="nav-link" aria-current="page" href="#" id="textos">Home</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos">About</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos">Support</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos">Reviews</a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="nav-link" href="#" id="textos">Ranking</a>
                                            </li>
                            </ul>
                        </div>
                        <div>
                                <img src={lupa} hspace="9" alt="Buscar" />
                                <img src={icono} hspace="10" alt="Usuario" />
                                <img src={carrito} hspace="12" alt="Compras" />
                            
                            </div>
                    </div>
                </nav>
            
        
    </div>
}

export default OtraBarra