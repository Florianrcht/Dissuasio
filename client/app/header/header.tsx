import './header.css';
import React from 'react';
import { UserButton } from "@clerk/nextjs";

const Header: React.FC = () => {
    return (
        <header>
            <div className='header_div'>
                <a href="/">ACCUEIL</a>
                <a href="/unites">PROPOS</a>
                <a href="/unites">UNITÉS</a>
                <h1>
                    <a href="/" className="dis">DIS</a>
                    <a href="/" className="sua">SUA</a>
                    <a href="/" className="sio">SIO</a>
                </h1>                
                <a href="/actu">ACTU</a>
                <a href="/opex">OPEX</a>
                <a href="/unites">CONNEXION</a>
            </div>
            <div className='header_border'>
            </div>
            <UserButton />
        </header>
    );
};

export default Header;