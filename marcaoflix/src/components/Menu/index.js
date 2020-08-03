import React from 'react';
import Logo from '../../assets/img/logomarcaoflix.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
    return  (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="Bem vindo ao MarcãoFlix"></img>
            </a>
            <Button as="a" href="/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>

    );
}

export default Menu;
