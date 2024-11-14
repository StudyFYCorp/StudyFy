// src/pages/Entrada.js
import * as C from './style';

const Desempenho = () => {
  return (
    <C.CampoInfoRank>
        <C.InfoRank>
            <span style={{fontSize: '5vw', fontWeight: 'bold', color: '#CDA572'}}>Bronze I</span>
            <C.Temporada>
                <span style={{fontSize: '3vw'}}>A temporada encerrará daqui a:</span>
                <C.Duracao>7 Dias</C.Duracao>
            </C.Temporada>
        </C.InfoRank>
    </C.CampoInfoRank>
  );
};

export default Desempenho;
