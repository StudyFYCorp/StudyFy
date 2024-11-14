// src/pages/Entrada.js
import * as C from './Style';
import mascote from '../../assets/mascote.png';

const Titulo = ({ titulo }) => { // Desestrutura o prop "titulo"
  return (
    <C.Container>
      <img src={mascote} alt="Mascote" style={{ width: '25vw', height: '14vh' }} />
      <C.Titulocadastro>{titulo}</C.Titulocadastro> {/* Exibe o título corretamente */}
    </C.Container>
  );
};

export default Titulo;
