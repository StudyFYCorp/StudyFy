import React from 'react';
import * as C from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SeuComponente = () => {
  return (
    <C.Campo>
      <C.InputContainer>
        <C.Input placeholder="Digite sua mensagem" />
        <FontAwesomeIcon icon={faArrowRight} style={{ cursor: 'pointer', height: '50%', width: '15%'}} />
      </C.InputContainer>
    </C.Campo>
  );
};

export default SeuComponente;
