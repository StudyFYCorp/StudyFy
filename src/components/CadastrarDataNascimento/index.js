// src/components/InserirDataNascimentoAluno.js
import React, { useState, useRef, useEffect } from 'react';
import * as C from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import mascote from '../../assets/mascote.png'
import { useMediaQuery } from '@mui/material';

const InserirDataNascimentoAluno = ({ AvancarEtapa, RetornarDados }) => {
  const [menuMesAberto, setMenuMesAberto] = useState(false);
  const [mesSelecionado, setMesSelecionado] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const meses = [
    { nome: 'Janeiro', numero: 1 },
    { nome: 'Fevereiro', numero: 2 },
    { nome: 'Março', numero: 3 },
    { nome: 'Abril', numero: 4 },
    { nome: 'Maio', numero: 5 },
    { nome: 'Junho', numero: 6 },
    { nome: 'Julho', numero: 7 },
    { nome: 'Agosto', numero: 8 },
    { nome: 'Setembro', numero: 9 },
    { nome: 'Outubro', numero: 10 },
    { nome: 'Novembro', numero: 11 },
    { nome: 'Dezembro', numero: 12 }
  ];

  // Mapeia o nome do mês para o número
  const mesParaNumero = (nomeMes) => {
    const mes = meses.find(m => m.nome === nomeMes);
    return mes ? mes.numero : null;
  };

  const referenciaDropdown = useRef(null);
  const diaRef = useRef(null);
  const anoRef = useRef(null);

  useEffect(() => {
    const fecharAoCliqueFora = (evento) => {
      if (referenciaDropdown.current && !referenciaDropdown.current.contains(evento.target)) {
        setMenuMesAberto(false);
      }
    };

    document.addEventListener('mousedown', fecharAoCliqueFora);

    return () => {
      document.removeEventListener('mousedown', fecharAoCliqueFora);
    };
  }, []);

  const alternarMenuMes = () => {
    setMenuMesAberto(!menuMesAberto);
  };

  const selecionarMes = (mes) => {
    setMesSelecionado(mes.nome);
    setMenuMesAberto(false);
  };

  const isDiaValido = (dia, mes, ano) => {
    const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // Verifica se o mês é válido (1-12)
    if (mes < 1 || mes > 12) {
        return false;
    }

    // Verifica se o dia está dentro do intervalo válido para o mês
    return dia > 0 && dia <= diasPorMes[mes - 1];
};

  const AcaoBotao = () => {
    const dia = diaRef.current.value;
    const mesNumero = mesParaNumero(mesSelecionado); // Obtemos o número do mês
    const ano = anoRef.current.value;

    // Formata a data no formato xx-xx-xxxx com zero à esquerda para meses e dias
    if (!isDiaValido(dia, mesNumero, ano)) {

      setMensagemErro('Data inválida');

  } else if (ano < 1900){
    setMensagemErro('O ano não deve ser menor que 1900');
  } else {
          // Formata a data no formato xx-xx-xxxx com zero à esquerda para meses e dias
          const mesFormatado = mesNumero < 10 ? `0${mesNumero}` : mesNumero;
          const diaFormatado = dia < 10 ? `0${dia}` : dia;
      
          const data_nascimento = `${ano}-${mesFormatado}-${diaFormatado}`;
    
          // Passando os dados capturados para o componente pai
          RetornarDados({ data_nascimento });
          AvancarEtapa();
  }
  };

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
          <C.Descricao>Em que ano você nasceu?</C.Descricao>
        </div>
      ) : (
        <C.Descricao>Em que ano você nasceu?</C.Descricao>
      )}
        <C.div>
          <C.Campos>
            <C.Dia>
              <C.NomeEntrada>Dia</C.NomeEntrada>
              <C.EntradaInfo>
                <C.Input type="number" placeholder="DD" ref={diaRef} />
              </C.EntradaInfo>
            </C.Dia>
            <C.Mes>
              <C.NomeEntrada>Mês</C.NomeEntrada>
              <C.EntradaInfo ref={referenciaDropdown}>
                <C.Input
                  type="text"
                  readOnly
                  value={mesSelecionado}
                  placeholder="MM"
                  onClick={alternarMenuMes}
                />
                <FontAwesomeIcon
                  icon={faArrowDown}
                  onClick={alternarMenuMes}
                  style={{ marginRight: '0', color: menuMesAberto ? '#FEE101' : '#D9D9D9' }}
                />
                {menuMesAberto && (
                  <C.Dropdown>
                    {meses.map((mes, index) => (
                      <C.DropdownItem key={index} onClick={() => selecionarMes(mes)}>
                        {mes.nome}
                      </C.DropdownItem>
                    ))}
                  </C.Dropdown>
                )}
              </C.EntradaInfo>
            </C.Mes>
            <C.Ano>
              <C.NomeEntrada>Ano</C.NomeEntrada>
              <C.EntradaInfo>
                <C.Input type="number" placeholder="YYYY" ref={anoRef} />
              </C.EntradaInfo>
            </C.Ano>
          </C.Campos>
        </C.div>
      <C.EnvioFormuario>
        <C.Erro>{mensagemErro}</C.Erro>
        <C.Botao onClick={AcaoBotao}>Próximo Passo</C.Botao>
      </C.EnvioFormuario>
    </C.CampoCadastrar>

    </>
  );
};

export default InserirDataNascimentoAluno;
