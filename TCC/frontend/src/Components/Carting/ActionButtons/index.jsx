import { useState } from "react";
import styled from "styled-components";
import ActionModal from "../ActionModal";
import ResumoModal from "../SummaryModal";
import { useFuncionarios } from "../../../Hooks/Funcionarios/useFuncionarios";

const ActionButtons = ({ onActionConfirmed }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [resumoOpen, setResumoOpen] = useState(false);
    const [tipoAcao, setTipoAcao] = useState("");
    const [responsavelSelecionado, setResponsavelSelecionado] = useState("");
    const { funcionarios } = useFuncionarios([]);

    const abrirModal = (tipo) => {
        setTipoAcao(tipo);
        setModalOpen(true);
    };

    const confirmarAcao = (responsavel) => {
        setResponsavelSelecionado(responsavel);
        setModalOpen(false);
        setResumoOpen(true);

        if (onActionConfirmed) {
            onActionConfirmed(tipoAcao, responsavel);
        }
    };

    return (
        <Wrapper>
            <button onClick={() => abrirModal("Devolução")}>Devolução</button>
            <button onClick={() => abrirModal("Retirada")}>Retirada</button>

            <ActionModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                onConfirm={confirmarAcao}
                tipo={tipoAcao}
                funcionarios={funcionarios}
            />

            <ResumoModal
                isOpen={resumoOpen}
                onClose={() => setResumoOpen(false)}
                tipo={tipoAcao}
                responsavel={responsavelSelecionado}
            />
        </Wrapper>
    );
};

export default ActionButtons;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 15px;
        background-color: #6b4eff;
        color: white;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #5a3be0;
    }

    .secondary {
        background-color: #42404db7;
    }

    .secondary:hover {
        background-color: #3c3131;
    }
`;