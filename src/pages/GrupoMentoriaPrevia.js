import React from 'react';
import { useParams } from 'react-router-dom'; // Para pegar o parâmetro da URL
import Container from '../styles/telaCheia';
import InfoGrupoMentoria from '../components/InfoGrupoMentoria';
import Navegacao from '../components/Navegacao'
import { useMediaQuery } from '@mui/material';

const GrupoMentoriaPrevia = () => {
  const { id } = useParams(); // Pega o id da URL
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      {isDesktop ? (
        <Container style={{backgroundColor: 'white', alignItems: 'center'}}>
          <Navegacao />
          <div style={{height: '100%', width: '100%', flexDirection: 'column'}}>
            <InfoGrupoMentoria id={id} status={'visitante'} /> {/* Passa o id para o componente */}
          </div>
        </Container>
      ) : (
        <Container style={{ backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh' }}>
          <span>Grupo de mentoria</span>
          <InfoGrupoMentoria id={id} status={'visitante'} /> {/* Passa o id para o componente */}
          <Navegacao></Navegacao>
        </Container>
      )}
    </>
  );
};

export default GrupoMentoriaPrevia;
