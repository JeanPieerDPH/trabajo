import './global.css'
import tacho from "./imagenes/tacho.png"


const LcCompra = () =>{
    return <div className="row" id="componenteLista">
        <div className="col-3">
            <img src='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/1083/1083236cv11d.jpg' id='imagenLista'/>
        </div>
        <div className="col-5" id='ccaja5'>
            Keyboard & mouse bundle
        </div>
        <div className="col-1" id='ccaja6'>
            $39
        </div>
        <div className="col-1" style={{marginLeft:"10%"}}>
            <img src={tacho} alt="tacho" id='imagenLista' />
        </div>


    </div>


}

export default LcCompra