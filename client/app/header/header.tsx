'use client'
import './header.css';
import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header: React.FC = () => {

    function handleClickMenuMobile() {
        const menuMobile = document.querySelector('.header_div_mobile_menu') as HTMLElement;
        const headerBorder = document.querySelector('.header_border') as HTMLElement;
        const menuA = document.querySelector('.div_a_header_mobile') as HTMLElement;

        headerBorder.style.display = headerBorder.style.display === 'none' ? 'block' : 'none';
        menuMobile.style.display = menuMobile.style.display === 'flex' ? 'none' : 'flex';

        if(menuMobile.style.display === 'flex')
        {
            menuA.classList.remove('header_div_a_transform_disable');
            menuA.classList.add('header_div_a_transform_enable');
        }
        else 
        {
            menuA.classList.remove('header_div_a_transform_enable');
            menuA.classList.add('header_div_a_transform_disable');
        }
    }


    function handleClickServiceMenu() {
        const menuServices = document.querySelectorAll('.bouton_services_mobile');
        const menuHeader = document.querySelectorAll('.bouton_header_mobile');

        menuServices.forEach((menuService: Element) => {
            const menuServiceElement = menuService as HTMLElement;
            menuServiceElement.style.display = menuServiceElement.style.display === 'block' ? 'none' : 'block';
        });

        menuHeader.forEach((menuHead: Element) => {
            const menuHeadElement = menuHead as HTMLElement;
            menuHeadElement.style.display = menuHeadElement.style.display === 'none' ? 'block' : 'none';
        });
    }

    return (
        <><header>
            <div className='header_div'>
                <div className='div_h1_header'>
                    <h1 className='h1_header'>
                        <a href="/" className="dis">DIS</a>
                        <a href="/" className="sua">SUA</a>
                        <a href="/" className="sio">SIO</a>
                    </h1>
                </div>
                <div className='div_a_header_mobile'>
                    <i className="bi bi-list menu_mobile" onClick={handleClickMenuMobile}></i>
                </div>
                <div className='div_a_header_pc'>
                    <div>
                        <a className="bouton_header" href="/">Accueil</a>
                    </div>
                    <div>
                        <a className="bouton_header" href='/'>Services</a>
                    </div>
                    <div className='bouton_connexion_header'>
                        <a className="login" href="/https://noted-halibut-60.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Flogin">Connexion</a>
                    </div>
                </div>
            </div>
            <div className='header_div_mobile_menu'>
                <div>
                    <a className="bouton_header_mobile" href="/">Accueil</a>
                    <a className="bouton_services_mobile" href="/actualites">Actu</a>
                </div>
                <p>|</p>
                <div>
                    <a className="bouton_header_mobile" onClick={handleClickServiceMenu}>Services</a>
                    <a className="bouton_services_mobile" onClick={handleClickServiceMenu}>Retour</a>
                </div>
                <p>|</p>
                <div>
                    <a className="bouton_header_mobile" href="/https://noted-halibut-60.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Flogin">Connexion</a>
                    <a className="bouton_services_mobile" href="/unites">Carte</a>
                </div>
            </div>
            <div className='header_border'></div>
        </header>
        </>
    );
};

export default Header;