import * as C from './style';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import EsqueceuSenha from '../../styles/campoDados';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid'; // Importando a biblioteca
import mascote from '../../assets/mascote.png'
import { useMediaQuery } from '@mui/material';

const CampoEsqueceuSenha = () => {
  const [email, setEmail] = useState("");
  const [mensagemErro, setMensagemErro] = useState('');
  const isDesktop = useMediaQuery('(min-width: 768px)');


  const gerarToken = () => {
    return uuidv4(); // Gera um UUID
  };

  const enviarVerificacaoEmail = (id) => {

    const token = gerarToken()
    const linkRedefinicao = `http://localhost:3000/mudar-senha?email=${encodeURIComponent(email)}&id=${encodeURIComponent(id)}&token=${encodeURIComponent(token)}`;
    
    console.log(token);
    console.log(id);
    console.log(email);
    console.log(linkRedefinicao);
    
      const parametrosTemplate = {
        to_email: email,
        link: linkRedefinicao,
      };

      emailjs
        .send(
          "service_lttcion",   // Coloque seu Service ID
          "template_czl4rra",   // Coloque seu Template ID
          parametrosTemplate,
          "1a0BB8VKM4yjxjhEG"        // Coloque seu User ID
        )
        .then(
          (result) => {
            setMensagemErro('Email enviado');
            console.log("Email enviado com sucesso", result.text);
          },
          (error) => {
            console.log("Erro ao enviar email", error.text);
          }
        );
  };

  const atualizarEmail = (evento) => {
    setEmail(evento.target.value);
  };

  const verificarEmail = async (email) => {

    if(email === '') {
      setMensagemErro('O email não pode ficar vazio');
    } else if (email.length > 256) {
      setMensagemErro('Este email passou do limite máximo de caracteres');
    } else {
      setMensagemErro('');

      const emailJSON = { email };

      console.log(emailJSON);
      
      try {
        const response = await axios.post('http://localhost:8080/v1/studyFy/login-email', emailJSON);
        console.log('email encontrado');
        console.log(response);
        enviarVerificacaoEmail(response.data.usuario_id);
  
      } catch (error) {
        console.error('Erro ao encontrar email:', error);
        setMensagemErro('Este email não possui registro na aplicação');
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita o comportamento padrão do formulário
    verificarEmail(email); // Chama verificarEmail com o email atual
  };

  return (
    <EsqueceuSenha>
      {isDesktop ? (
        <div style={{ display: 'flex', flexDirection: 'column', height: '20%', alignItems: 'start', gap: '10px'}}>
          <div style={{ display: 'flex', width: '100%', height: '70%', alignItems: 'center', gap: '3%'}}>
            <img src={mascote} alt="mascote" style={{ width: '15%', minHeight: '100%' }} />
            <span style={{ fontSize: '2.3vw' }}>Esqueceu a senha?</span>
          </div>
          <C.Descricao>Informe seu email para que possa redefini-la</C.Descricao>
        </div>
      ) : (
        <C.Descricao>Informe seu email para que possa redefini-la</C.Descricao>
      )}
      <C.CampoPreencher>
        <C.CampoEmail>
          <FontAwesomeIcon icon={faEnvelope} style={{ height: '50%', width: '10%', marginRight: '0', color: '#FEE101' }} />
          <C.EntradaInfo>
            <C.Input 
              type="email" 
              id="email" 
              name="email" 
              onChange={atualizarEmail} 
              required 
              maxLength={90}
            />
            <C.Label htmlFor="email">Email</C.Label>
          </C.EntradaInfo>
        </C.CampoEmail>
        <C.MensagemErro>{mensagemErro}</C.MensagemErro>
      </C.CampoPreencher>
      <C.CampoEnvioFormulario>
        <C.BotaoEmail onClick={handleSubmit}>Enviar email</C.BotaoEmail>
      </C.CampoEnvioFormulario>
    </EsqueceuSenha>
  );
};

export default CampoEsqueceuSenha;
