export default function Nav() {
    return (
        <div>
            <nav className="navbar justify-content-center">
                <a className="navbar-brand  text-white " href="#">Aprovecha nuestras ofertas de 30% Off</a>
            </nav>
            <nav className="nav nav-light justify-content-xl-between">
                <img src="src/assets/logo.png" className="img-fluid" alt="image"></img>
                <p className="d-flex align-items-baseline">E-Commers</p>
                <div className="nav nav-light d-flex flex-row">
                    <p> Hola, Usuario XX</p>
                    <div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Buscar</span>
                        </div>
                        <input type="text" className="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                    </div>
                </div>
            </nav>
        </div>
    )
}