
import "./global.css"
import OtraBarra from "./OtraBarra"

const CrearCuenta = () => {
    return <div>
        <OtraBarra></OtraBarra>
        
        <div className="container-fluid">
            <div className="row justify-content-center" style={{marginTop:`8%`}}>
                <div className="col-5" style={{backgroundColor:`#3f2d68`}}>
                    <h1 id='primerh1' ><i>CREATE ACCOUNT</i></h1>
                    <input className="form-control" type="text" placeholder="First Name" id='caja0' />
                    <input className="form-control" type="text" placeholder="Last Name" id='campos'/>
                    <input className="form-control" type="email" placeholder="Email" id='campos'/> 
                    <input className="form-control" type="password" placeholder="Password" id='campos'/>
                    <button type="button" class="btn btn-light" id='registrarse'>CREATE</button>
                </div>
            </div>

        </div>
        




        
    </div>
}

export default CrearCuenta