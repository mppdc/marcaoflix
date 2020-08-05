import React from 'react';
import Logo from '../../assets/img/logomarcaoflix.png';
import './menu.css';
//import ButtonLink from './components/ButtonLink';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return  (
        <nav className="Menu">
            <Link to="/">
                <img src={Logo} className="Logo" alt="Bem vindo ao MarcãoFlix"></img>
            </Link>
            <Button as={Link} to="/cadastro/video/" className="ButtonLink">
                Teste Camila
            </Button>
            <Button as={Link} to="/cadastro/video/" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>

    );
}

export default Menu;
