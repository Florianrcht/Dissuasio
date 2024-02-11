import './header.css';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <div className='header_div'>
                <a href="/">ACCUEIL</a>
                <a href="/carte">CARTE</a>
                <h1>
                    <span className="dis">DIS</span>
                    <span className="sua">SUA</span>
                    <span className="sio">SIO</span>
                </h1>                
                <a href="/actu">ACTU</a>
                <a href="/opex">OPEX</a>
            </div>
            <div className='header_border'>
            </div>
        </header>
    );
};

export default Header;