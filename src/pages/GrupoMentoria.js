// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import InfoGrupoMentoria from '../components/InfoGrupoMentoria';
import AbasGrupoMentoria from '../components/AbasGrupoMentoria'
import Navegacao from '../components/Navegacao'
import { useMediaQuery } from '@mui/material';

const GrupoMentoria = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
    {isDesktop ? (
      // Este bloco será renderizado em telas desktop (>= 768px)
      <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
        <Navegacao />
        <div style={{height: '100%', width: '100%', flexDirection: 'column'}}>
          <InfoGrupoMentoria />
          <AbasGrupoMentoria />
        </div>
      </Container>
    ) : (
      // Este bloco será renderizado em telas menores (móveis/tablets < 768px)
      <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
        <span>Grupo de mentoria</span>
        <InfoGrupoMentoria />
        <AbasGrupoMentoria />
        <Navegacao></Navegacao>
      </Container>
    )}
  </>
  );
};

export default GrupoMentoria;
