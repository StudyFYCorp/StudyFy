// src/pages/Entrada.js
import * as C from './style';
import fotoGrupo from '../../assets/Ellipse (1).png';
import fotoMentor from '../../assets/Ellipse (1).png';
import iconeMentor from '../../assets/mentoria.png';
import estrela from '../../assets/Star rate.png';
import { useMediaQuery } from '@mui/material';

const InfoGrupoMentoria = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <C.InfoGrupo>
      {isDesktop ? (
        <>
        <C.IntroducaoGrupo>
          <C.FotoGrupoDiv>
            <C.IconeGrupo src={fotoGrupo} alt='foto do grupo' />
            <C.Membros>Membros 10/30</C.Membros>
            <C.fundoAmarelo />
          </C.FotoGrupoDiv>
          <C.MentorDiv>
            <C.MentorGrupo>
              <C.IconeMentor alt='icone de mentor' src={iconeMentor} />
              <C.MentorGrupoTitulo>Mentor do grupo</C.MentorGrupoTitulo>
            </C.MentorGrupo>
            <C.CampoInfoMentor>
              <C.DadosMentor>
                <C.FotoMentor alt='foto do mentor' src={fotoMentor} />
                <C.InfoMentor>
                  <C.NomeMentor>Matheus Noronha...</C.NomeMentor>
                  <C.MembrosAjudados>20 membros ajudados</C.MembrosAjudados>
                </C.InfoMentor>
              </C.DadosMentor>
              <C.AvaliacaoMentor>
                <C.AvaliacaoMedia>4.5</C.AvaliacaoMedia>
                <C.Barra />
                <C.Avaliacao>
                  <C.Estrelas>
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                  </C.Estrelas>
                  <C.QuantidadeAvaliacao>(214) avaliações</C.QuantidadeAvaliacao>
                </C.Avaliacao>
              </C.AvaliacaoMentor>
            </C.CampoInfoMentor>
          </C.MentorDiv>
        </C.IntroducaoGrupo>
        <div style={{justifyContent: 'space-between', paddingTop: '6%', width: '30%', height: '100%', display: 'flex', flexDirection: 'column'}}>
          <C.OpcoesGrupo>
            <C.BotaoSair>
              <C.Sair>Sair do grupo</C.Sair>
            </C.BotaoSair>
            <C.BotaoSair>
              <C.Sair>Sair do grupo</C.Sair>
            </C.BotaoSair>
          </C.OpcoesGrupo>
        <C.DescricaoDiv>
          <C.Descricao>Noso grupo é focado e dedicado a garantir um bom ambiente para os estudos</C.Descricao>
        </C.DescricaoDiv>
        </div>
        </>
      ) : (
        <>
          <C.IntroducaoGrupo>
            <C.FotoGrupoDiv>
              <img src={fotoGrupo} alt='foto do grupo' style={{ width: '60%', height: '60%' }} />
              <span style={{ fontWeight: 'bold', fontSize: '3.5vw' }}>membros 10/30</span>
            </C.FotoGrupoDiv>
            <C.DescricaoDiv>
              <C.Descricao>dsds dsd fddgfg dfd fdfdfdf gfgf gfgfg</C.Descricao>
            </C.DescricaoDiv>
          </C.IntroducaoGrupo>
          <C.MentorDiv>
            <C.MentorGrupo>
              <img alt='icone de mentor' style={{ height: '80%', width: '20%' }} src={iconeMentor} />
              <span>Mentor do grupo</span>
            </C.MentorGrupo>
            <C.CampoInfoMentor>
              <C.DadosMentor>
                <img alt='foto do mentor' style={{ height: '80%', width: '22%' }} src={fotoMentor} />
                <C.InfoMentor>
                  <h4 style={{ fontSize: '3.5vw' }}>Matheus Noronha...</h4>
                  <span style={{ fontSize: '2.5vw' }}>20 membros ajudados</span>
                </C.InfoMentor>
              </C.DadosMentor>
              <C.AvaliacaoMentor>
                <span style={{ fontWeight: 'bold' }}>4.5</span>
                <C.Barra />
                <C.Avaliacao>
                  <C.Estrelas>
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                    <C.Estrela alt='estrela' src={estrela} />
                  </C.Estrelas>
                  <span style={{ fontSize: '2vw' }}>(214) avaliações</span>
                </C.Avaliacao>
              </C.AvaliacaoMentor>
            </C.CampoInfoMentor>
          </C.MentorDiv>
        </>
      )}
    </C.InfoGrupo>
  );
};

export default InfoGrupoMentoria;
