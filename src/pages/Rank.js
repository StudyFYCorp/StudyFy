// src/pages/Entrada.js
import React from 'react';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao'
import DuvidaAba from '../assets/duvida.png'
import ApresentacaoAba from '../styles/apresentacaoAba';
import InfoRank from '../components/InfoRank'
import TelaPadding from '../styles/TelaPadding';
import RankAlunos from '../components/RankAlunos';
import Titulo from '../styles/titulo';
import FaixaAmarela from '../styles/faixaAmarela';
import RankMaisAjudados from '../components/RankMaisAjudados';

const Rank = () => {

  return (
    <Container style={{backgroundColor: 'white', alignItems: 'center', paddingTop: '1vh'}}>
        <TelaPadding>
            <ApresentacaoAba>
                <span>Rank</span>
                <img src={DuvidaAba}></img>
            </ApresentacaoAba>
            <Titulo>
                <span style={{fontWeight: 'bold', fontSize: '7vw'}}>Seu Rank</span>
                <FaixaAmarela/>
            </Titulo>
            <InfoRank/>
            <RankAlunos/>
            <Titulo>
                <span style={{fontWeight: 'bold', fontSize: '7vw'}}>Rank de mentores</span>
                <FaixaAmarela/>
            </Titulo>
            <RankMaisAjudados/>
        </TelaPadding>
        <Navegacao></Navegacao>
    </Container>
  );
};

export default Rank;
