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
                        <a className="login" href="/https://noted-halibut-60.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Flogin">Connexion</a>
                    </div>
                </div>
            </div>
            <UserButton />
            <div className='header_border'></div>
        </header>
    );
};

export default Header;