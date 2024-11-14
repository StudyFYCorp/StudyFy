import React from 'react';
import Container from '../styles/telaCheia';
import Titulo from '../components/Titulo';
import CampoMudarSenha from '../components/CampoMudarSenha'
import fundoAmarelo from '../assets/fundo-desktop.png'
import Fundo from '../styles/fundoDesktop'
import { useMediaQuery } from '@mui/material';

const EsqueceuSenha = () => {

    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <Container>
        {isDesktop ? (
          <Fundo src={fundoAmarelo}></Fundo>
        ) : (
          <Titulo titulo={'Mudar senha'} />
        )}
        <CampoMudarSenha/> {/* Certifique-se de que CampoLoginAluno está correto */}
      </Container>
    )
}

export default EsqueceuSenha