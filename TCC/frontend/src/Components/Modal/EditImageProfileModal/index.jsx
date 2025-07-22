import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const EditImageProfileModal = ({ isOpen, onClose, onSave, currentImage }) => {
    const [newImage, setNewImage] = useState("");

    useEffect(() => {
        setNewImage(""); // Limpa o input ao abrir
    }, [isOpen]);

    if (!isOpen) return null;
    return (
        <ModalOverlay>
            <ModalContent>
                <h3>Alterar Imagem de Perfil</h3>
                <img src={newImage || currentImage} alt="Nova Imagem" style={{ maxWidth: 150, borderRadius: '5rem', marginBottom: 16, marginTop: 16 }} />
                <Input
                    type="text"
                    placeholder="Cole o link da nova imagem"
                    value={newImage}
                    onChange={e => setNewImage(e.target.value)}
                    style={{ marginBottom: 16 }}
                />
                <ButtonRow>
                    <CancelButton onClick={onClose}>Cancelar</CancelButton>
                    <SaveButton onClick={() => { onSave(newImage); onClose(); }}>Salvar</SaveButton>
                </ButtonRow>
            </ModalContent>
        </ModalOverlay>
    );
};

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

const ModalContent = styled.div`
    background: #222;
    color: #623bda;
    padding: 32px 24px 24px 24px;
    border-radius: 16px;
    min-width: 320px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Input = styled.input`
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    outline: 0;
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;
    color: white;
`;

const ButtonRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 8px;
`;

const BaseButton = styled.button`
    padding: 8px 16px;
    color: #fff;
    font-size: 1.17em; /* h3 size */
    border-radius: 15px;
    border: none;
    font-weight: bold;
    cursor: pointer;
`;

const CancelButton = styled(BaseButton)`
    background:rgb(22, 22, 22);
`;

const SaveButton = styled(BaseButton)`
    background: #623bda;
`;

export default EditImageProfileModal; 