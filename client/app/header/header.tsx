import './header.css';
import React from 'react';

const Header: React.FC = () => {
    return (
        <header>
            <div className='header_div'>
                <a href="#">ACCUEIL</a>
                <a href="#">NOS BASES</a>
                <h1>Dissuasio</h1>
                <a href="#">ACTU</a>
                <a href="#">OPEX</a>
            </div>
            <div className='header_border'>
            </div>
        </header>
    );
};

export default Header;