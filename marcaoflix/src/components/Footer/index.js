import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.blogdainformatica.com.br/">
        Teste de rodapé
      </a>
      <p>
        Orgulhosamente criado por 
        {' '}
        <a href="https://www.mcexpert.com.br/">
          Marcos Carvalho
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
