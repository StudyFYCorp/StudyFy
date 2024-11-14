import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
import fotousuario from '../assets/fotousuario.png';
import pontos from '../assets/pontos.png';
import configuracao from '../assets/configuracoes.png';
import calendario from '../assets/calendario.png';
import medalhaDeOuro from '../assets/medalhaDeOuro.png';
import BronzeDois from '../assets/Bronze II.png';
import GrandEwe from '../assets/grande.png';
import TomHolland from '../assets/tomholland.png';
import correto from '../assets/correto.png';
import { useMediaQuery } from '@mui/material';

const Perfil = () => {
  const [user, setUser] = useState(null); // Estado para armazenar os dados do usuário
  const [rankAlunos, setRank] = useState([]); // Estado para armazenar os dados do rank
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userResponse = await fetch('http://localhost:8080/v1/studyFy/aluno/1');
        const userData = await userResponse.json();
        const aluno = userData.aluno[0]; // Pegando o primeiro aluno da lista
        setUser({
          nome: aluno.nome,
          serie: aluno.serie,
          materias: aluno.materias.map(materia => materia.materia), // Pega os nomes das matérias
          pontos: aluno.pontos,
          rank: aluno.id_rank
        });

        // Buscando os dados do rank
        const rankResponse = await fetch(`http://localhost:8080/v1/studyfy/rank/aluno/${aluno.id}`);
        const rankData = await rankResponse.json();

        console.log(rankData.sala);
        const alunoRank = rankData.sala[0]; // Pegando o primeiro item da lista de ranks
        console.log(alunoRank.posicao);

        setRank(rankData.sala)

        // setRank({
        //   rankPosicao: alunoRank.posicao,
        //   rankId: alunoRank.id_rank,
        //   rankImagem: alunoRank.caminho_imagem,
        //   rankNome: alunoRank.nome_imagem
        // });
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchUserData(); // Chama a função para buscar os dados ao carregar o componente
  }, []);

  if (!user) {
    return <div>Carregando...</div>; // Exibe uma mensagem enquanto os dados estão sendo carregados
  }

  return (
    <>
      {isDesktop ? (
        <Container style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'row', height: '100vh' }}>
          <Navegacao />
          <img
            src={configuracao}
            alt="Configurações"
            style={{
              position: 'absolute',
              alignSelf: 'end',
              height: '3vh',
              width: '3vh',
              cursor: 'pointer',
            }}
            onClick={() => navigate('')}
          />

          <TituloTela style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', height: '10%', width: '62%', textAlign: 'end' }}>Perfil</TituloTela>

          <div style={{ width: '100%', height: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', height: '30%', width: '100%', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
              <div style={{ display: 'flex', width: '90%', height: '230px', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', bottom: '5%', alignItems: 'center' }}>
                <img src={fotousuario} alt="Foto do Usuário" style={{ height: '15vh', width: '15vh', zIndex: '3', position: 'absolute', top: '0vh', placeSelf: 'center' }} />
                <div style={{ display: 'flex', width: '50%', height: '80%', backgroundColor: '#FEE101', borderRadius: '8px', justifyContent: 'center', alignItems: 'end', paddingBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '24px' }}>{user.nome}</h1> {/* Nome do usuário */}
                    <h2 style={{ fontSize: '14px', fontWeight: 'lighter' }}>Entrou em 2024</h2> {/* Data de entrada */}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: '1px', height: '3%' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <div style={{ display: 'flex', height: '20vh', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '20vh', width: '50%' }}>
                  <div><h2 style={{ fontSize: '18px' }}>Estudando</h2><p>{user.materias.join(', ')}</p></div> {/* Materia */}
                  <div><h2 style={{ fontSize: '18px' }}>Série</h2><p>{user.serie}</p></div> {/* Série */}
                  <div><h2 style={{ fontSize: '18px' }}>Assunto no momento</h2><p>Segunda Guerra Mundial</p></div>
                </div>
                <div style={{ display: 'flex', width: '50%', flexDirection: 'column', alignItems: 'end' }}>
                  <h2 style={{ fontSize: '18px' }}>Aluno</h2>
                </div>
              </div>


              <div style={{ width: '100%', marginTop: '15%' }}>
                <h1 style={{ marginTop: '5%', fontSize: '28px', textAlign: 'left', color: 'black' }}>Desempenho</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '12px', border: '1px solid #E0E0E0', overflow: 'hidden', marginTop: '10px' }}>

                  {[{ img: medalhaDeOuro, alt: "Medalha de Ouro", title: "Rank Recorde", subtitle: user.rank },
                  { img: pontos, alt: "Pontos", title: "Pontos", subtitle: user.pontos },

                  // ATIVIDADES FEITAS E SEM PARAR NÃO ESTÃO VINDO DO BANCO, PUXAR DEPOIS
                  { img: calendario, alt: "Sem Parar", title: "Sem parar!", subtitle: "14 dias" },
                  { img: correto, alt: "Atividades Feitas", title: "Atividades feitas", subtitle: "20" }].map((item, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '15px', borderBottom: index < 2 ? '1px solid #E0E0E0' : '', borderRight: index % 2 === 0 ? '1px solid #E0E0E0' : '', textAlign: 'center' }}>
                      <img src={item.img} alt={item.alt} style={{ width: '30px', height: '30px', marginBottom: '5px' }} />
                      <h2 style={{ fontSize: '14px', fontWeight: 'bold' }}>{item.title}</h2>
                      <p style={{ fontSize: '12px', color: '#666' }}>{item.subtitle}</p>
                    </div>
                  ))}
                </div>
              </div>








              <h1 style={{ fontSize: '28px', marginTop: '15%' }}>Rank - Alunos</h1>
              <div style={{ display: 'flex', flexDirection: 'column', height: '30vh', width: '100%', marginTop: '5%' }}>
                <div style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                  {/* Seção do Rank do Usuário Atual */}
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* {rank && (
                      <>
                        <img src={rank.rankImagem} alt={rank.rankNome} style={{ width: '15vh', height: '20vh' }} />
                        <h2 style={{ fontSize: '24px', color: '#A96224', marginTop: '10px' }}>{rank.rankNome}</h2>
                      </>
                    )} */}
                  </div>


                  {/* 
                  <div style={{ width: '30vh', height: '19.5vh', marginLeft: '25vh', border: '1px solid #E0E0E0', overflow: 'hidden' }}>

                    {[{ rank: rank.rankPosicao, name: user.nome, points: user.rank, image: GrandEwe },
                    { rank: rank.rankPosicao, name: user.nome, points: user.rank, image: fotousuario },
                    { rank: rank.rankPosicao, name: user.nome, points: user.rank, image: TomHolland }].map((user, index) => (

                      <div key={index} style={{ display: 'flex', alignItems: 'center', height: '6.5vh', backgroundColor: index % 2 === 0 ? '#F9F9F9' : '#D9D9D9' }}>

                        <span style={{ width: '20%', textAlign: 'center', fontWeight: 'bold', color: '#333', }}>#{user.rank}</span>
                        <img src={user.image} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        <span style={{ flex: 1, fontSize: '12px', color: '#333' }}>{user.name}</span>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', marginRight: '1vh' }}>{user.points}</span>
                      </div>
                    ))}
                  </div> */}


                  <div style={{ width: '30vh', height: '19.5vh', marginLeft: '25vh', border: '1px solid #E0E0E0', overflow: 'hidden' }}>

                    {rankAlunos.map((dados, index) => (

                      <div key={index} style={{ display: 'flex', alignItems: 'center', height: '6.5vh', backgroundColor: index % 2 === 0 ? '#F9F9F9' : '#D9D9D9' }}>

                        <span style={{ width: '20%', textAlign: 'center', fontWeight: 'bold', color: '#333', }}>#{dados.posicao}</span>
                        <img src={dados.caminho_imagem} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        <span style={{ flex: 1, fontSize: '12px', color: '#333' }}>{dados.nome_aluno}</span>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', marginRight: '1vh' }}>{dados.pontos_aluno}Pts</span>
                      </div>
                    ))}
                  </div>



                </div>
              </div>




            </div>
          </div>
        </Container>
      ) : (
        <Container style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', height: '100vh' }}>
          <img
            src={configuracao}
            alt="Configurações"
            style={{
              position: 'absolute',
              alignSelf: 'end',
              height: '3vh',
              width: '3vh',
              cursor: 'pointer',
            }}
            onClick={() => navigate('')}
          />
          <TituloTela style={{ marginBottom: '0', textAlign: 'center' }}>Perfil</TituloTela>
          <div style={{ width: '100%', height: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', height: '30%', width: '100%', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
              <div style={{ display: 'flex', width: '90%', height: '230px', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', bottom: '5%', alignItems: 'center' }}>
                <img src={fotousuario} alt="Foto do Usuário" style={{ height: '15vh', width: '15vh', zIndex: '3', position: 'absolute', top: '0vh', placeSelf: 'center' }} />
                <div style={{ display: 'flex', width: '50%', height: '80%', backgroundColor: '#FEE101', borderRadius: '8px', justifyContent: 'center', alignItems: 'end', paddingBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '24px' }}>{user.nome}</h1> {/* Nome do usuário */}
                    <h2 style={{ fontSize: '14px', fontWeight: 'lighter' }}>Entrou em 2024</h2> {/* Data de entrada */}
                  </div>
                </div>
              </div>
            </div>







          </div>
        </Container>
      )}
    </>
  );
};

export default Perfil;
