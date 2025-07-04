import React, { useState } from 'react';
import Modal from '../index';
import ConfirmActionModal from '../ConfirmActionModal';
import styled from 'styled-components';
import { criarFuncionario } from '../../../Services/funcionarioService';

const AddEmployee = ({ isOpen, onClose, onSuccess }) => {
  const [form, setForm] = useState({
    nomeFuncionario: '',
    emailFuncionario: '',
    cpfFuncionario: '',
    celularFuncionario: '',
    dataNascimentoFuncionario: '',
    descricaoFuncionario: '',
    image: ''
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
    console.log('handleSubmit chamado');
    setErro('');
    if (
      !form.nomeFuncionario.trim() ||
      !form.emailFuncionario.trim() ||
      !form.cpfFuncionario.trim() ||
      !form.celularFuncionario.trim()
    ) {
      setErro('Nome, email, CPF e celular são obrigatórios.');
      return;
    }
    setShowConfirm(true);
  };

  const handleConfirm = async () => {
    setLoading(true);
    setErro('');
    console.log('handleConfirm chamado', form);
    try {
      await criarFuncionario({
        nomeFuncionario: form.nomeFuncionario,
        emailFuncionario: form.emailFuncionario,
        cpfFuncionario: form.cpfFuncionario,
        ativo: true,
        celularFuncionario: form.celularFuncionario,
        dataNascimentoFuncionario: form.dataNascimentoFuncionario || undefined,
        descricaoFuncionario: form.descricaoFuncionario || undefined,
        image: form.image || undefined
      });
      console.log('Requisição enviada com sucesso');
      setForm({
        nomeFuncionario: '',
        emailFuncionario: '',
        cpfFuncionario: '',
        celularFuncionario: '',
        dataNascimentoFuncionario: '',
        descricaoFuncionario: '',
        image: ''
      });
      setShowConfirm(false);
      if (onSuccess) onSuccess();
      onClose();
    } catch (e) {
      console.error('Erro ao cadastrar funcionário:', e);
      setErro('Erro ao cadastrar funcionário.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <FormWrapper onSubmit={handleSubmit}>
          <h2>Cadastrar novo funcionário</h2>
          <label>
            Nome*
            <input
              name="nomeFuncionario"
              value={form.nomeFuncionario}
              onChange={handleChange}
              required
              disabled={loading}
              autoFocus
            />
          </label>
          <label>
            Email*
            <input
              name="emailFuncionario"
              value={form.emailFuncionario}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            CPF*
            <input
              name="cpfFuncionario"
              value={form.cpfFuncionario}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Celular*
            <input
              name="celularFuncionario"
              value={form.celularFuncionario}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </label>
          <label>
            Data de Nascimento
            <input
              name="dataNascimentoFuncionario"
              value={form.dataNascimentoFuncionario}
              onChange={handleChange}
              type="datetime-local"
              disabled={loading}
            />
          </label>
          <label>
            Descrição
            <textarea
              name="descricaoFuncionario"
              value={form.descricaoFuncionario}
              onChange={handleChange}
              disabled={loading}
              rows={3}
            />
          </label>
          <label>
            Imagem (URL)
            <input
              name="image"
              value={form.image}
              onChange={handleChange}
              disabled={loading}
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
        data={{
          nomeFuncionario: form.nomeFuncionario,
          emailFuncionario: form.emailFuncionario,
          cpfFuncionario: form.cpfFuncionario,
          celularFuncionario: form.celularFuncionario,
          dataNascimentoFuncionario: form.dataNascimentoFuncionario,
          descricaoFuncionario: form.descricaoFuncionario,
          image: form.image
        }}
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


export default AddEmployee;
