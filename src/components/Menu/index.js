import React from 'react';
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="PBFlix logo"/>
            </a> 
            <Button className="ButtonLink" href="/" alt="Botão para cadastrar novo vídeo">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;