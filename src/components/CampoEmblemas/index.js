import React, { useEffect } from 'react';
import * as C from './style';
import medalha from '../../assets/medalha.png';
import livrosDegraus from '../../assets/livro_degraus.png';
import mascote from '../../assets/mascote.png';

const CampoEmblemas = () => {
    const atividadesConcluidas = 3;
    const metaAtividades = 5;

    // Calcula a porcentagem de progresso
    const progresso = ((atividadesConcluidas / metaAtividades) * 100).toFixed(2);
    const progressoPorcentagem = `${progresso}%`;

    useEffect(() => {
        // Seleciona a barra e o texto após o componente ser montado
        const barraProgresso = document.getElementById("barraProgresso");
        if (barraProgresso) {
            // Atualiza a largura da barra
            barraProgresso.style.width = progresso + "%";
        }
    }, [progresso]); // Dependência para re-executar se progresso mudar

    return (
        <C.CampoEmblemas>
        <C.EmblemasAluno>
            <C.Titulo>Emblemas aluno</C.Titulo>
            {/* Mapeando os emblemas, se necessário, para evitar repetição */}
            {["medalha", "livrosDegraus", "mascote"].map((icone, index) => (
                <C.Emblema key={index}>
                    <C.AreaIcone cor={index === 0 ? "#71DDF5" : index === 1 ? "#56EE9C" : "#fee101"}>
                        <C.Icone src={icone === "medalha" ? medalha : icone === "livrosDegraus" ? livrosDegraus : mascote}></C.Icone>
                        <C.Nivel>Nível 1</C.Nivel>
                    </C.AreaIcone>
                    <C.AreaInfo>
                        <C.AreaDescricao>
                            <C.TituloEmblema>Engatinhando</C.TituloEmblema>
                            <C.Descricao>Realizou a primeira atividade da aplicação</C.Descricao>
                        </C.AreaDescricao>
                        <C.AreaProgresso>
                            <C.Andamento>{progressoPorcentagem}</C.Andamento>
                            <C.Progresso id='barraProgresso'></C.Progresso>
                        </C.AreaProgresso>
                    </C.AreaInfo>
                </C.Emblema>
            ))}
        </C.EmblemasAluno>
                <C.EmblemasProfessor>
                <C.Titulo>Emblemas mentor</C.Titulo>
                {/* Mapeando os emblemas, se necessário, para evitar repetição */}
                {["medalha", "livrosDegraus", "mascote"].map((icone, index) => (
                    <C.Emblema key={index}>
                        <C.AreaIcone cor={index === 0 ? "#71DDF5" : index === 1 ? "#56EE9C" : "#fee101"}>
                            <C.Icone src={icone === "medalha" ? medalha : icone === "livrosDegraus" ? livrosDegraus : mascote}></C.Icone>
                            <C.Nivel>Nível 1</C.Nivel>
                        </C.AreaIcone>
                        <C.AreaInfo>
                            <C.AreaDescricao>
                                <C.TituloEmblema>Engatinhando</C.TituloEmblema>
                                <C.Descricao>Realizou a primeira atividade da aplicação</C.Descricao>
                            </C.AreaDescricao>
                            <C.AreaProgresso>
                                <C.Andamento>{progressoPorcentagem}</C.Andamento>
                                <C.Progresso id='barraProgresso'></C.Progresso>
                            </C.AreaProgresso>
                        </C.AreaInfo>
                    </C.Emblema>
                ))}
            </C.EmblemasProfessor>
        </C.CampoEmblemas>
    );
};

export default CampoEmblemas;
