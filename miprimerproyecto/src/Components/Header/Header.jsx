const Header = () => {
    return (
        <header className="bg-dark text-white p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1>MyProject</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item"><a className="nav-link text-white" href="#">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">Producto</a></li>
                        <li className="nav-item"><a className="nav-link text-white" href="#">Soporte</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
