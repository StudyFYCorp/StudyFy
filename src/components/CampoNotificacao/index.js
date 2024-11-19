// src/pages/Entrada.js
import * as C from './style'; // Certifique-se de que as estilizações estão corretas.
import IconePerfil from '../../assets/Ellipse (1).png'; // Verifique o caminho para o ícone.
import React, { useRef } from 'react';
import BotoesConfiguracao from '../../styles/botoesconfiguracao';
import ToggleButton from '../BotaoToggleConfiguracao';
import bronzeIImage from '../../assets/Bronze II.png'
import bronzeIIImage from '../../assets/Bronze III.png'

import ouro from '../../assets/Prata I.png';


const CampoNotificacao = () => {
    return (
        <C.CampoNotificacao>
            <div style={{ backgroundColor: 'white', height: '85%', width: '67%', marginLeft: '16%', marginTop: '5%', borderRadius: '3%' }}>
                <h2 style={{ display: 'flex', justifyContent: 'center', fontSize: '3vh', position: 'relative', top: '10%' }}>Suas Notificações</h2>
                <p style={{ display: 'flex', justifyContent: 'center', marginTop: '7%', fontSize: '1vw', color: 'gray' }}>Acompanhe suas conquistas, atualizações e progresso na plataforma</p>
                
                {/* Card 1 */}
                <div style={{ margin: '20px auto', padding: '0', width: '90%', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFEB3B', padding: '8px 16px', borderRadius: '8px 8px 0 0' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>Você subiu de rank!</p>
                        <span style={{ color: 'red', fontSize: '1.2rem' }}>•</span>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: '#fff', borderRadius: '0 0 8px 8px', border: '1px solid #FFEB3B' }}>
                        <p style={{ fontSize: '1rem', marginBottom: '8px' }}>
                            Você terminou a temporada com <strong>420pts</strong>.
                            <br />
                            Terminou em <strong>#1 lugar</strong>
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '8px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={bronzeIImage} alt="Bronze III" style={{ width: '18px', height: '18px', borderRadius: '50%' }} />
                                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Bronze III</span>
                            </div>
                            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>➔</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src={bronzeIIImage} alt="Bronze II" style={{ width: '18px', height: '18px', borderRadius: '50%' }} />
                                <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>Bronze II</span>
                            </div>
                        </div>
                        <p style={{ marginTop: '10px', fontSize: '0.8rem', color: 'gray', textAlign: 'right' }}>22/08/2024</p>
                    </div>
                </div>

                <div style={{ margin: '20px auto', padding: '0', width: '90%', borderRadius: '8px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFEB3B', padding: '8px 16px', borderRadius: '8px 8px 0 0' }}>
                        <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>Você subiu de rank!</p>
                        <span style={{ color: 'red', fontSize: '1.2rem' }}>•</span>
                    </div>
                    <div style={{ padding: '12px', backgroundColor: '#fff', borderRadius: '0 0 8px 8px', border: '1px solid #FFEB3B' }}>
    <p style={{ fontSize: '1rem', marginBottom: '8px' }}>
        Você completou 10 atividades seguidas sem erros
    </p>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '10px', gap: '8px', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <img src={ouro} alt="B" style={{ width: '18px', height: '18px', borderRadius: '50%' }} />
            <span style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>conquista Persistente</span>
        </div>
    </div>
    <p style={{ marginTop: '10px', fontSize: '0.8rem', color: 'gray', textAlign: 'right' }}>21/08/2024</p>
</div>
</div>
            </div>
        </C.CampoNotificacao>
    );
};

export default CampoNotificacao;
