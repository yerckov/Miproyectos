import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer bg-dark text-white p-3">
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
                <div className="footer-logo">
                    <h2>© 2024 MyProject</h2>
                </div>
                <nav className="footer-nav">
                    <ul className="nav-list d-flex flex-column flex-md-row">
                        <li className="nav-item"><a className="nav-link" href="#">Sobre Nosotros</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Contacto</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Política de Privacidad</a></li>
                    </ul>
                </nav>
                <div className="footer-socials d-flex">
                    <a href="https://facebook.com" className="social-link" aria-label="Facebook"><FaFacebook /></a>
                    <a href="https://twitter.com" className="social-link" aria-label="Twitter"><FaTwitter /></a>
                    <a href="https://instagram.com" className="social-link" aria-label="Instagram"><FaInstagram /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
