import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'

function Footer() {
  return (
    <FooterBase>
      <img className="Logo" src={Logo} alt="PBFlix logo"/>
      <p>
        Desenvolvido por <a href="https://www.linkedin.com/in/douglasparnoff/">Douglas Parnoff</a> durante a 
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
