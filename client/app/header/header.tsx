import './header.css';
import React from 'react';
import { UserButton } from "@clerk/nextjs";

const Header: React.FC = () => {
    return (
        <header>
            <div className='header_div'>
                <div className='div_h1_header'>
                    <h1 className='h1_header'>
                        <a href="/" className="dis">DIS</a>
                        <a href="/" className="sua">SUA</a>
                        <a href="/" className="sio">SIO</a>
                    </h1>  
                </div>
                <div className='div_a_header'>
                    <div>
                        <a className="bouton_header" href="/">Accueil</a>
                    </div>
                    <div>
                        <a className="bouton_header" href="/unites">Services</a>
                    </div>
                    <div className='bouton_connexion_header'>
                        <a className="login" href="/login">Connexion</a>
                        <a className="register" href="/register">Inscription</a>
                    </div>
                </div>
            </div>

            <UserButton />
        </header>
    );
};

export default Header;