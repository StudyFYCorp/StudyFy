import React from 'react';
import * as C from './style';

const CampoChat = ({titulo}) => {

  return (
    <>
    <C.Campo>
        <span style={{textAlign: 'center', width: '70%', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold'}}>{titulo}</span>
    </C.Campo>
    </>
  );
};

export default CampoChat;
