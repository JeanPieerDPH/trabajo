
import carrito2 from "./imagenes/carrito_compras2.png"
import LcCompra from "./LcCompra"

import CrearUsuario from "./Main"
import OtraBarra from "./OtraBarra"



const ListaCompra = () =>{
    return<div>
        <OtraBarra></OtraBarra>
        <div className="row" id="filaCompra">
            <div className="row">
                <div className="col-6"><h4>Shopping car items</h4></div>
                <div className="col-6">
                    <button type="button" className="btn btn" id='carritoCompra' ><img src={carrito2} alt="carrito"/>Checkout</button>
                </div>
            </div>
            
            <LcCompra/>
            <LcCompra/>
        
        </div>
        



    </div>


}

export default ListaCompra