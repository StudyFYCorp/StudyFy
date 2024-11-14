import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '../styles/telaCheia';
import Navegacao from '../components/Navegacao';
import TituloTela from '../styles/tituloTela';
import fotousuario from '../assets/fotousuario.png';
import pontos from '../assets/pontos.png';
import configuracao from '../assets/configuracoes.png';
import calendario from '../assets/calendario.png';
import medalhaDeOuro from '../assets/medalhaDeOuro.png';
import correto from '../assets/correto.png';
import BronzeDois from '../assets/Bronze II.png';
import GrandEwe from '../assets/grande.png'
import TomHolland from '../assets/tomholland.png'
import Pessoas from '../assets/Pessoas.png';
import Estrela from '../assets/estrela.png'
import EstrelaMetade from '../assets/estrelametade.png'
import MedalhaEmblema from '../assets/MedalhaEmblema.png'
import CorujaEmblema from '../assets/mascote.png'
import LivrosEmblema from '../assets/LivrosEmblema.png'
import { useMediaQuery } from '@mui/material';


const Perfil = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');
  const navigate = useNavigate();

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
              cursor: 'pointer'
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
                    <h1 style={{ fontSize: '24px' }}>Silvia Santos</h1>
                    <h2 style={{ fontSize: '14px', fontWeight: 'lighter' }}>Entrou em 2021</h2>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: '1px', height: '3%' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '40%' }}>
              <div style={{ display: 'flex', height: '20vh', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '20vh', width: '50%' }}>
                  <div><h2 style={{ fontSize: '18px' }}>Estudando</h2><p>História</p></div>
                  <div><h2 style={{ fontSize: '18px' }}>Série</h2><p>3º - Fundamental 1</p></div>
                  <div><h2 style={{ fontSize: '18px' }}>Assunto no momento</h2><p>Segunda Guerra Mundial</p></div>
                </div>
                <div style={{ display: 'flex', width: '50%', flexDirection: 'column', alignItems: 'end' }}>
                  <h2 style={{ fontSize: '18px' }}>Aluno/Mentor</h2>
                  <button onClick={() => navigate('/grupo-mentoria')} style={{ backgroundColor: '#FEE101', marginTop: '15%', height: '42px', width: '88px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', justifySelf: 'end', border: '1px solid', borderBottom: '3px solid', textAlign: 'center' }}>
                    Ver grupo de mentoria
                  </button>
                </div>
              </div>

              <div style={{ width: '100%', marginTop: '15%' }}>
                <h1 style={{ marginTop: '5%', fontSize: '28px', textAlign: 'left', color: 'black' }}>Desempenho</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '12px', border: '1px solid #E0E0E0', overflow: 'hidden', marginTop: '10px' }}>
                  {[{ img: medalhaDeOuro, alt: "Medalha de Ouro", title: "Rank Recorde", subtitle: "Ouro III" }, { img: pontos, alt: "Pontos", title: "Pontos", subtitle: "210" }, { img: calendario, alt: "Sem Parar", title: "Sem parar!", subtitle: "14 dias" }, { img: correto, alt: "Atividades Feitas", title: "Atividades feitas", subtitle: "20" }].map((item, index) => (
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
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={BronzeDois} alt="Medalha Bronze II" style={{ width: '15vh', height: '20vh' }} />
                    <h2 style={{ fontSize: '24px', color: '#A96224', marginTop: '10px' }}>Bronze II</h2>
                  </div>

                  <div style={{ width: '30vh', height: '19.5vh', marginLeft: '25vh', border: '1px solid #E0E0E0', overflow: 'hidden' }}>
                    {[{ rank: 9, name: "Grande eweww...", points: "271pts", image: GrandEwe },
                    { rank: 10, name: "Silvia Santos", points: "210pts", image: fotousuario },
                    { rank: 11, name: "Tom Holland", points: "189pts", image: TomHolland }].map((user, index) => (

                      <div key={index} style={{ display: 'flex', alignItems: 'center', height: '6.5vh', backgroundColor: index % 2 === 0 ? '#F9F9F9' : '#D9D9D9' }}>

                        <span style={{ width: '20%', textAlign: 'center', fontWeight: 'bold', color: '#333', }}>#{user.rank}</span>
                        <img src={user.image} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        <span style={{ flex: 1, fontSize: '12px', color: '#333' }}>{user.name}</span>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333', marginRight: '1vh' }}>{user.points}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>



              <div style={{ display: 'flex', flexDirection: 'column', }}>
                <h1 style={{ fontSize: '28px', marginTop: '5%', color: '#333' }}>Rank - Mentor</h1>

                <div style={{ display: 'flex', gap: '2%', marginTop: '20px' }}>

                  {/* Sessão de Avaliações */}
                  <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', alignSelf: 'center', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {/* Estrelas */}
                      {[...Array(4)].map((_, i) => (
                        <img key={i} src={Estrela} alt="Estrela" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                      ))}
                      <img src={EstrelaMetade} alt="Meia Estrela" style={{ width: '10px', height: '20px' }} />
                    </div>
                    <p style={{ fontSize: '14px', color: '#666' }}>(130 avaliações)</p>

                    {/* Gráfico de avaliações */}
                    <div style={{ marginTop: '15px' }}>
                      {[5, 4, 3, 2, 1].map((rating, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '14px', color: '#333', width: '5%' }}>{rating}</span>
                          <div style={{ backgroundColor: '#e0e0e0', width: '60%', height: '8px', margin: '0 10px', borderRadius: '4px' }}>
                            <div style={{ width: '85%', height: '100%', backgroundColor: '#333', borderRadius: '4px' }}></div>
                          </div>
                          <span style={{ fontSize: '14px', color: '#333' }}>85%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sessão de Pessoas Ajudadas e Estrelas */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Pessoas Ajudadas */}
                    <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                      <h2 style={{ fontSize: '16px', color: '#333', textAlign: 'center', marginBottom: '10px' }}>150 pessoas ajudadas</h2>
                      {[{ rank: 9, name: "Grande eweww...", points: "174", },
                      { rank: 10, name: "Silvia Santos", points: "150" },
                      { rank: 11, name: "Tom Holland", points: "132" }].map((user, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e0e0e0' }}>
                          <span style={{ width: '15%', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>#{user.rank}</span>
                          <img src={Pessoas} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                          <span style={{ flex: 1, fontSize: '14px', color: '#333' }}>{user.name}</span>
                          <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{user.points}</span>
                        </div>
                      ))}
                    </div>

                    {/* Estrelas */}
                    <div style={{ backgroundColor: '#fff', borderRadius: '8px', padding: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                      <h2 style={{ fontSize: '16px', color: '#333', textAlign: 'center', marginBottom: '10px' }}>4.5 estrelas</h2>
                      {[{ rank: 9, name: "Grande eweww...", stars: "4.6", reviews: "88" },
                      { rank: 10, name: "Silvia Santos", stars: "4.5", reviews: "130" },
                      { rank: 11, name: "Tom Holland", stars: "4.5", reviews: "114" }].map((user, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e0e0e0' }}>
                          <span style={{ width: '15%', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>#{user.rank}</span>
                          <img src={Pessoas} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                          <span style={{ flex: 1, fontSize: '14px', color: '#333' }}>{user.name}</span>
                          <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{user.stars}</span>
                          <span style={{ fontSize: '12px', color: '#666', marginLeft: '5px' }}>({user.reviews})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ height: '30vh', width: '100%', marginTop: '5vh' }}>
                <h1 style={{ fontSize: '32px' }}>Emblemas</h1>
                {/* implementar aqui a navegação para a tela de emblemas */}
                <p onClick={() => navigate('/emblemas')} style={{ cursor: 'pointer', color: 'black', textDecoration: 'underline' }}>Ver todos</p>
                <div style={{ width: '90%', marginTop: '20px' }}>

                  <div style={{ display: 'inline-flex', alignContent: 'Center', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '10px', overflowX: 'scroll', maxWidth: '100%' }}>
                    {/* Emblema 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#a7dcff', borderRadius: '8px', padding: '10px' }}>
                      <img src={MedalhaEmblema} alt="Medalha" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                    {/* Emblema 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#90f7a7', borderRadius: '8px', padding: '10px' }}>
                      <img src={LivrosEmblema} alt="Livros" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                    {/* Emblema 3 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
                      <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
                      <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
                      <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
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
              cursor: 'pointer'
            }}
            onClick={() => navigate('')}
          />

          <TituloTela style={{ marginBottom: '0', textAlign: 'center' }}>Perfil</TituloTela>


          <div style={{ width: '100%', height: 'calc(100vh - 100px)', overflowY: 'auto', paddingBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ display: 'flex', justifyContent: 'center', height: '30%', width: '100%', flexDirection: 'column', alignItems: 'center', padding: '10px' }}>
              <div style={{ display: 'flex', width: '90%', height: '230px', flexDirection: 'column', justifyContent: 'flex-end', position: 'relative', bottom: '5%', alignItems: 'center' }}>
                <img src={fotousuario} alt="Foto do Usuário" style={{ height: '50%', width: '30%', zIndex: '3', position: 'absolute', top: '20px', placeSelf: 'center' }} />
                <div style={{ display: 'flex', width: '100%', height: '80%', backgroundColor: '#FEE101', borderRadius: '8px', justifyContent: 'center', alignItems: 'end', paddingBottom: '20px' }}>
                  <div style={{ textAlign: 'center' }}>
                    <h1 style={{ fontSize: '24px' }}>Silvia Santos</h1>
                    <h2 style={{ fontSize: '14px', fontWeight: 'lighter' }}>Entrou em 2021</h2>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ width: '1px', height: '3%' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '90%' }}>
              <div style={{ display: 'flex', height: '20vh', width: '100%' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', height: '20vh', width: '50%' }}>
                  <div><h2 style={{ fontSize: '18px' }}>Estudando</h2><p>História</p></div>
                  <div><h2 style={{ fontSize: '18px' }}>Série</h2><p>3º - Fundamental 1</p></div>
                  <div><h2 style={{ fontSize: '18px' }}>Assunto no momento</h2><p>Segunda Guerra Mundial</p></div>
                </div>
                <div style={{ display: 'flex', width: '50%', flexDirection: 'column', alignItems: 'end' }}>
                  <h2 style={{ fontSize: '18px' }}>Aluno/Mentor</h2>
                  <button onClick={() => navigate('/grupo-mentoria')} style={{ backgroundColor: '#FEE101', marginTop: '15%', height: '42px', width: '88px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', justifySelf: 'end', border: '1px solid', borderBottom: '3px solid', textAlign: 'center' }}>
                    Ver grupo de mentoria
                  </button>
                </div>
              </div>

              <div style={{ width: '100%', marginTop: '15%' }}>
                <h1 style={{ marginTop: '5%', fontSize: '28px', textAlign: 'left', color: 'black' }}>Desempenho</h1>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderRadius: '12px', border: '1px solid #E0E0E0', overflow: 'hidden', marginTop: '10px' }}>
                  {[{ img: medalhaDeOuro, alt: "Medalha de Ouro", title: "Rank Recorde", subtitle: "Ouro III" }, { img: pontos, alt: "Pontos", title: "Pontos", subtitle: "210" }, { img: calendario, alt: "Sem Parar", title: "Sem parar!", subtitle: "14 dias" }, { img: correto, alt: "Atividades Feitas", title: "Atividades feitas", subtitle: "20" }].map((item, index) => (
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
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src={BronzeDois} alt="Medalha Bronze II" style={{ width: '15vh', height: '20vh' }} />
                    <h2 style={{ fontSize: '24px', color: '#A96224', marginTop: '10px' }}>Bronze II</h2>
                  </div>

                  <div style={{ width: '25vh', height: '19.5vh', marginLeft: '10%', border: '1px solid #E0E0E0', overflow: 'hidden' }}>
                    {[{ rank: 9, name: "Grande eweww...", points: "271pts", image: GrandEwe },
                    { rank: 10, name: "Silvia Santos", points: "210pts", image: fotousuario },
                    { rank: 11, name: "Tom Holland", points: "189pts", image: TomHolland }].map((user, index) => (

                      <div key={index} style={{ display: 'flex', alignItems: 'center', height: '6.5vh', backgroundColor: index % 2 === 0 ? '#F9F9F9' : '#D9D9D9' }}>

                        <span style={{ width: '20%', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>#{user.rank}</span>
                        <img src={user.image} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        <span style={{ flex: 1, fontSize: '12px', color: '#333' }}>{user.name}</span>
                        <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{user.points}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>



              <div style={{ display: 'flex', flexDirection: 'column', }}>
                <h1 style={{ fontSize: '28px', marginTop: '5%', color: '#333' }}>Rank - Mentor</h1>

                <div style={{ display: 'flex', gap: '2%', marginTop: '20px' }}>

                  {/* Sessão de Avaliações */}
                  <div style={{ flex: 1, backgroundColor: '#fff', padding: '20px', alignSelf: 'center', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {/* Estrelas */}
                      {[...Array(4)].map((_, i) => (
                        <img key={i} src={Estrela} alt="Estrela" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                      ))}
                      <img src={EstrelaMetade} alt="Meia Estrela" style={{ width: '10px', height: '20px' }} />
                    </div>
                    <p style={{ fontSize: '14px', color: '#666' }}>(130 avaliações)</p>

                    {/* Gráfico de avaliações */}
                    <div style={{ marginTop: '15px' }}>
                      {[5, 4, 3, 2, 1].map((rating, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '14px', color: '#333', width: '5%' }}>{rating}</span>
                          <div style={{ backgroundColor: '#e0e0e0', width: '60%', height: '8px', margin: '0 10px', borderRadius: '4px' }}>
                            <div style={{ width: '85%', height: '100%', backgroundColor: '#333', borderRadius: '4px' }}></div>
                          </div>
                          <span style={{ fontSize: '14px', color: '#333' }}>85%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sessão de Pessoas Ajudadas e Estrelas */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>

                    {/* Pessoas Ajudadas */}
                    <div style={{}}>
                      <h2 style={{ fontSize: '16px', color: '#333', textAlign: 'center', marginBottom: '10px' }}>150 pessoas ajudadas</h2>
                      {[{ rank: 9, name: "Grande eweww...", points: "174", },
                      { rank: 10, name: "Silvia Santos", points: "150" },
                      { rank: 11, name: "Tom Holland", points: "132" }].map((user, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e0e0e0' }}>
                          <span style={{ width: '15%', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>#{user.rank}</span>
                          <img src={Pessoas} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                          <span style={{ flex: 1, fontSize: '14px', color: '#333' }}>{user.name}</span>
                          <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{user.points}</span>
                        </div>
                      ))}
                    </div>

                    {/* Estrelas */}
                    <div style={{}}>
                      <h2 style={{ fontSize: '16px', color: '#333', textAlign: 'center', marginBottom: '10px' }}>4.5 estrelas</h2>
                      {[{ rank: 9, name: "Grande eweww...", stars: "4.6", reviews: "88" },
                      { rank: 10, name: "Silvia Santos", stars: "4.5", reviews: "130" },
                      { rank: 11, name: "Tom Holland", stars: "4.5", reviews: "114" }].map((user, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#e0e0e0' }}>
                          <span style={{ width: '15%', textAlign: 'center', fontWeight: 'bold', color: '#333' }}>#{user.rank}</span>
                          <img src={Pessoas} alt={user.name} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} />
                          <span style={{ flex: 1, fontSize: '14px', color: '#333' }}>{user.name}</span>
                          <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>{user.stars}</span>
                          <span style={{ fontSize: '12px', color: '#666', marginLeft: '5px' }}>({user.reviews})</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ height: '30vh', width: '100%', marginTop: '5vh' }}>
                <h1 style={{ fontSize: '32px' }}>Emblemas</h1>
                {/* implementar aqui a navegação para a tela de emblemas */}
                <p onClick={() => navigate('/emblemas')} style={{ cursor: 'pointer', color: 'black', textDecoration: 'underline' }}>Ver todos</p>
                <div style={{ width: '90%', marginTop: '20px' }}>

                  <div style={{ display: 'inline-flex', alignContent: 'Center', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '10px', overflowX: 'scroll', maxWidth: '100%' }}>
                    {/* Emblema 1 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#a7dcff', borderRadius: '8px', padding: '10px' }}>
                      <img src={MedalhaEmblema} alt="Medalha" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                    {/* Emblema 2 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#90f7a7', borderRadius: '8px', padding: '10px' }}>
                      <img src={LivrosEmblema} alt="Livros" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                    {/* Emblema 3 */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
                      <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
                      <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#fef5a7', borderRadius: '8px', padding: '10px', opacity: 0.5 }}>
                      <img src={CorujaEmblema} alt="Coruja" style={{ width: '10vh', height: '10vh' }} />
                      <p style={{ fontSize: '18px', fontWeight: 'Bold', color: '#333', marginTop: '5px' }}>Nível 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Navegacao />
        </Container>
      )}
    </>
  );
}

export default Perfil;
