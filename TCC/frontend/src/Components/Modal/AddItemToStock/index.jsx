import React, { useState } from 'react';
import Modal from '../index';
import ConfirmActionModal from '../ConfirmActionModal';
import styled from 'styled-components';
import { criarProduto } from '../../../Services/prudutoService';

const AddItemToStockModal = ({ isOpen, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    nomeItem: '',
    quantidade: '',
    imagem: '',
    descricao: ''
  });
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErro('');
    if (!form.nomeItem.trim() || !form.quantidade) {
      setErro('Nome e quantidade são obrigatórios.');
      return;
    }
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    setLoading(true);
    setErro('');
    try {
      await criarProduto({
        nomeItem: form.nomeItem,
        quantidade: Number(form.quantidade),
        imagem: form.imagem || undefined,
        descricao: form.descricao || undefined
      });
      setForm({ nomeItem: '', quantidade: '', imagem: '', descricao: '' });
      setShowConfirm(false);
      if (onSuccess) onSuccess();
      onClose();
    } catch (e) {
      setErro('Erro ao criar produto.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <FormWrapper onSubmit={handleSubmit}>
          <h2>Criar novo produto</h2>
          <label>
            Nome do item*
            <input
              name="nomeItem"
              value={form.nomeItem}
              onChange={handleChange}
              required
              disabled={loading}
              autoFocus
            />
          </label>
          <QuantityLabel>
              Quantidade*
              <QuantityWrapper>
                <input
                  name="quantidade"
                  type="number"
                  min="0"
                  value={form.quantidade}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
                <button type="button" onClick={() =>
                  setForm(prev => ({
                    ...prev,
                    quantidade: Math.max(Number(prev.quantidade) - 1, 0)
                  }))
                } disabled={loading}>-</button>

                <button type="button" onClick={() =>
                  setForm(prev => ({
                    ...prev,
                    quantidade: Number(prev.quantidade) + 1
                  }))
                } disabled={loading}>+</button>
              </QuantityWrapper>
            </QuantityLabel>
          <label>
            Imagem (URL)
            <input
              name="imagem"
              value={form.imagem}
              onChange={handleChange}
              disabled={loading}
            />
          </label>
          <label>
            Descrição
            <textarea
              name="descricao"
              value={form.descricao}
              onChange={handleChange}
              disabled={loading}
              rows={3}
            />
          </label>
          {erro && <ErrorMsg>{erro}</ErrorMsg>}
          <ButtonRow>
            <button type="button" onClick={onClose} disabled={loading}>Cancelar</button>
            <button type="submit" disabled={loading}>{loading ? 'Salvando...' : 'Salvar'}</button>
          </ButtonRow>
        </FormWrapper>
      </Modal>
      <ConfirmActionModal
        isOpen={showConfirm}
        onClose={() => setShowConfirm(false)}
        onConfirm={handleConfirm}
        type="save"
        data={{ nomeItem: form.nomeItem }}
      />
    </>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
  min-width: 350px;
  padding: 30px 20px 20px 20px;
  background: #1e1e1e;
  border-radius: 12px;
  h2 {
    margin-bottom: 10px;
    color: #623bda;
    text-align: center;
    font-size: 26px;
  }
  label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    color: #333;
    gap: 4px;
    color: #fff;
  }
  input, textarea {
    border: 0.5px solid rgba(255, 255, 255, 0.09);
    border-radius: 8px;
    padding: 8px;
    font-size: 1rem;
    background: #1e1e1e;
    color: #fff;
    resize: none;
  }
  input:disabled, textarea:disabled {
    background: #eee;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  button {
    padding: 8px 18px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    background: #623bda;
    color: #fff;
    transition: background 0.2s;
    &:hover:not(:disabled) {
      background: #4b2bb3;
    }
    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
    &:first-child {
      background: #333;
      color: white;
      &:hover:not(:disabled) {
        background:rgba(51, 51, 51, 0.84);
      }
    }
  }
`;

const ErrorMsg = styled.div`
  color: #b31414;
  font-weight: bold;
  text-align: center;
`;

const QuantityLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-weight: 600;
  gap: 4px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 75%;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }

  button {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 6px;
    font-size: 18px;
    font-weight: bold;
    background: #623bda;
    color: white;
    cursor: pointer;
    transition: background 0.2s;

    &:hover:not(:disabled) {
      background: #4b2bb3;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;


export default AddItemToStockModal;
