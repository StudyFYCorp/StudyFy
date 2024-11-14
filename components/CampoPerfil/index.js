// src/pages/Entrada.js
import InfoUsuario from '../InfoUsuario';
import Desempenho from '../Desempenho';
import Emblemas from '../EmblemasPerfil'
import RankAlunos from '../RankAlunosPerfil'
import RankMentor from '../../styles/rankMentores'
import RankMaisAjudados from '../RankMaisAjudados'
import RankMelhorAvaliado from '../RankMelhorAvaliado'

const CampoPerfil = () => {
  return (
    <>
    <InfoUsuario />
    <Desempenho />
    <RankAlunos />
    <RankMentor>
      <RankMaisAjudados />
      <RankMelhorAvaliado />
    </RankMentor>
    <Emblemas />
    </>
  );
};

export default CampoPerfil;
