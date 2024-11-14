// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import GrupoMentoria from './pages/GrupoMentoria';
import ChatIA from './pages/chatIA'
import ChatPrivado from './pages/ChatPrivado'
import Atividades from './pages/Atividades';
import Ajuda from './pages/Ajuda';
import CadernoVirtual from './pages/CadernoVirtual';
import Notificacao from './pages/Notificacao';
import Rank from './pages/Rank';
import Perfil  from './pages/PerfilAlunoMentor';
import PerfilAluno from './pages/PerfilAluno';
import EsqueceuSenha from './pages/EsqueceuSenha';
import MudarSenha from './pages/MudarSenha'
import Emblemas from './pages/Emblemas';

import * as C from './styles/app';

function App() {

  return (
    <C.Container>
      <Router>
        <Routes>
          <Route exact path='/' element= {<PerfilAluno/>} />
          <Route path='/PerfilAluno' element={<Perfil/>} />
          <Route exact path='/' element= {<GrupoMentoria/>} />
          <Route path='/Perfil' element={<Perfil/>}></Route>
          <Route path='/atividades' element= {<Atividades/>} />
          <Route path='/caderno-virtual' element= {<CadernoVirtual/>} />
          <Route path='/rank' element= {<Rank/>} />
          <Route path='/ajuda' element= {<Ajuda/>} />
          <Route path='/notificacao' element= {<Notificacao/>} />
          <Route path='/chat-privado' element= {<ChatPrivado/>} />
          <Route path='/chatIA' element= {<ChatIA/>} />
          <Route path='/login' element= {<Login/>} />
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/grupo-mentoria' element={<GrupoMentoria />}/>
          <Route path='/esqueceu-senha' element={<EsqueceuSenha />}/>
          <Route path='/mudar-senha' element={<MudarSenha />}/>
          <Route path='/emblemas' element={<Emblemas />}/>
        </Routes>
      </Router>
    </C.Container>
  );
}

export default App;
