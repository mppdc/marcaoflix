import React from 'react';
import { Link } from 'react-router-dom';
import PaginaPadrao from '../../padrao';

function PaginaCadastroCategoria () {
    return (
        <PaginaPadrao>

            <h1> Cadastro de categoria</h1>
            <Link to="/">Voltar
            </Link>
        </PaginaPadrao>
    );
}

export default PaginaCadastroCategoria;