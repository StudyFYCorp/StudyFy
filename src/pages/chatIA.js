import React from 'react';
import Container from '../styles/telaCheia';
import CampoChat from '../components/CampoChat'
import Navegacao from '../components/Navegacao'
import CampoInput from '../components/CampoInput'
import { useMediaQuery } from '@mui/material';
import ChatDiv from '../styles/chatDiv';

const ChatIA = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)'); // Corrigir a sintaxe do useMediaQuery

    return (
      <>
      {isDesktop ? (
        // Este bloco será renderizado em telas desktop (>= 768px)
        <Container style={{ backgroundColor: 'white', alignItems: 'center'}}>
          <Navegacao/>
          <ChatDiv>
            <CampoChat titulo = {'Converse com nossa IA para tirar dúvidas superficiais'}></CampoChat>
            <CampoInput></CampoInput>
          </ChatDiv>
        </Container>
      ) : (
        // Este bloco será renderizado em telas menores (móveis/tablets < 768px)
        <Container style= {{backgroundColor: 'white', gap: '2vh', alignItems: 'center', paddingTop: '1vh'}}>
          <span>chat</span>
          <CampoChat titulo = {'Aguardando algum mentor aceitar seu pedido de ajuda'}></CampoChat> 
          <CampoInput></CampoInput>
          <Navegacao></Navegacao>
        </Container>
      )}
    </>
    )
}

export default ChatIA