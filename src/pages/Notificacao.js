// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'

const Notificacao = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>
        <span>Notificação</span>
        <Navegacao></Navegacao>
    </Container>
  );
};

export default Notificacao;
