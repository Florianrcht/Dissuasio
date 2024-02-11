import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer>
            <div className='header_border'></div>
            <div className='footer_div'>
                <div className='footer_div_left'>
                    <h1>
                        <span className="dis">DIS</span>
                        <span className="sua">SUA</span>
                        <span className="sio">SIO</span>
                    </h1>
                    <p>© 2024 Dissuasio</p>
                </div>
                <div className='footer_div_right'>
                    <ul>
                        <li><a href="/">ACCUEIL</a></li>
                        <li><a href="/carte">CARTE</a></li>
                        <li><a href="/actu">ACTU</a></li>
                        <li><a href="/opex">OPEX</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;