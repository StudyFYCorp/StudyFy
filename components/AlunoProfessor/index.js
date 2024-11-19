import React from 'react';
import * as C from './style';
import mascote from '../../assets/mascote.png'
import { useMediaQuery } from '@mui/material';

const AlunoProfessor = ({ AvancarEtapa, RetornarDados }) => {

    const AcaoBotao = (usuario) => {
        RetornarDados(usuario)
        AvancarEtapa()
    }

  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <>
      <C.CampoCadastrar>
      {isDesktop ? (
        <div style={{ display: 'flex', flexDirection: 'column', height: '20%', alignItems: 'start', gap: '10px'}}>
          <div style={{ display: 'flex', width: '100%', height: '70%', alignItems: 'center', gap: '3%'}}>
            <img src={mascote} alt="mascote" style={{ width: '15%', minHeight: '100%' }} />
            <span style={{ fontSize: '2.5vw' }}>Cadastre-se</span>
          </div>
          <C.Descricao>Antes de começar seu cadastro, precisamos saber se você é aluno ou professor</C.Descricao>
        </div>
      ) : (
        <C.Descricao>Antes de começar seu cadastro, precisamos saber se você é aluno ou professor</C.Descricao>
      )}

        <C.EnvioFormuario>
          <C.Botao onClick={() => AcaoBotao('aluno')}>Aluno</C.Botao>
          <C.Botao onClick={() => AcaoBotao('professor')}>Professor</C.Botao>
        </C.EnvioFormuario>

      </C.CampoCadastrar>
    </>
  );
};

export default AlunoProfessor;
