import React from 'react';
import { Link } from 'react-router-dom';
import PaginaPadrao from '../../padrao';

function PaginaCadastroVideo () {
    return (
        <PaginaPadrao>

            <h1> Cadastro de vídeo</h1>
            <Link to="/cadastro/categoria/"> + categorias
            </Link>
        </PaginaPadrao>
    );
}

export default PaginaCadastroVideo;