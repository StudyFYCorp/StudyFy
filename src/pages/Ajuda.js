// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'

const Ajuda = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>
        <span>Ajuda</span>
        <Navegacao></Navegacao>
    </Container>
  );
};

export default Ajuda;
