import "./global.css"
import mandog from "./imagenes/mando_g.png"
import lupa from "./imagenes/lupa.png"
import icono from "./imagenes/icono_persona.png"
import carrito from "./imagenes/carrito_compras.png"

const OtraBarraPrincipal = () =>{
    return <div className="container-fluid" >
    
                <nav className="navbar navbar-expand-lg navbar-dark bg-#383c4c">
                    <div className="container-fluid">
                        <div>
                            <div className="row">
                                <a href="#"> <img className="mandog" src={mandog} alt="Logo"></img> </a>
                            </div>
                            <div className="row">
                                <h1 id='text1'>Build your PC!</h1>
                                <h4 id='text1'>Just for what you need</h4>
                            </div>
                        </div>
                        
                        
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#MenuNavega">
                            <span className="navbar-toggler-icon navbar-dark"></span>
                        </button>
                        <div id="MenuNavega" className="collapse navbar-collapse" >
                            <ul class="navbar-nav ms-3" id="barraelemnt_g">
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
                        <div id="icono_g">
                                <img src={lupa} hspace="9" alt="Buscar" />
                                <img src={icono} hspace="10" alt="Usuario" />
                                <img src={carrito} hspace="12" alt="Compras" />
                            
                            </div>
                    </div>
                </nav>
                <div id="botones">
                    <button type="button" className="btn btn-light" id='mbuton'><h9 id='mboton5'>Build for begginers</h9></button>
                    <button type="button" className="btn btn-light" id='mbuton'><h9 id='mboton5'>Advanced building</h9></button>
                </div>
        
    </div>
}

export default OtraBarraPrincipal