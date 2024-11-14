// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import CampoEmblemas from '../components/CampoEmblemas';
import TituloTela from '../styles/tituloTela';
import { useMediaQuery } from '@mui/material';

const Emblemas = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)'); // Corrigir a sintaxe do useMediaQuery

  return (
    <>
      {isDesktop ? (
        // Este bloco será renderizado em telas desktop (>= 768px)
        <Container style={{ backgroundColor: 'white', alignItems: 'center'}}>
          <Navegacao />
          <CampoEmblemas/>
        </Container>
      ) : (
        // Este bloco será renderizado em telas menores (móveis/tablets < 768px)
        <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
          <TituloTela>Emblemas</TituloTela>
          <CampoEmblemas />
          <Navegacao />
        </Container>
      )}
    </>
  );
};

export default Emblemas;
