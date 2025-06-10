import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from "../../../Assets/SVGs/Icons/Arrow.svg";
import { useFuncionarios } from '../../../Hooks/Funcionarios/useFuncionarios';
import SearchLoader from '../../../Components/Loaders/SearchLoader';
import SaveCancelBTN from '../../../Components/Buttons/SaveCancelBTN';
import Search2 from '../../../Components/Searchs/Search2';

const Funcionarios = () => {
  const { funcionarios, loading, erro } = useFuncionarios();
  const [showForm, setShowForm] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpand = (id) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

  return (
    <Wrapper>
      <h2>Funcionários</h2>

      {/* 👇 Aqui usamos o SearchBar */}
      <Search2
        placeholder="Nome do Funcionário"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && (
        <>
          <p>Carregando funcionários...</p>
          <SearchLoader />
        </>
      )}

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <div className="item-list">
        {funcionarios
          .filter((funcionario) =>
            funcionario.nomeFuncionario.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((funcionario) => {
            const isExpanded = expandedId === funcionario.funcionarioId;

            return (
              <div
                key={funcionario.funcionarioId}
                className={`item-card ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleExpand(funcionario.funcionarioId)}
              >
                <div className="item-top">
                  <div className="item-left">
                    <div className="item-info">
                      <span className="item-name">{funcionario.nomeFuncionario}</span>
                    </div>
                  </div>
                  <div className="item-right">
                    <span>ID: {funcionario.funcionarioId}</span>
                    <img
                      className={`img-Arrow ${isExpanded ? 'rotated' : ''}`}
                      src={Arrow}
                      alt="Expandir"
                    />
                  </div>
                </div>

                <div className={`extra-content-wrapper ${isExpanded ? 'expanded' : ''}`}>
                  <div className="extra-content">
                    <SaveCancelBTN type='edit' />
                    <SaveCancelBTN type='delete' />
                  </div>
                </div>
              </div>
            );
          })}
      </div>

      <button className="add-btn" onClick={() => setShowForm(true)}>➕</button>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Adicionar Novo Funcionário</h3>
            <input type="text" placeholder="Nome do Funcionário" className="modal-input" />
            <input type="text" placeholder="CPF" className="modal-input" />
            <div className="modal-actions">
              <button onClick={() => setShowForm(false)}>Cancelar</button>
              <button>Salvar</button>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  color: wheat;
  padding: 100px 100px 30px 100px;
  max-width: 1650px;
  margin: auto;
  position: relative;
  min-height: 100vh;

  h2 {
    margin-bottom: 10px;
  }

  .item-list {
    margin-bottom: 60px;
    color: wheat;
    text-transform: capitalize;
    font-size: 20px;
  }

  .item-card {
    background-color: #1a1a1a;
    border-radius: 20px;
    padding: 15px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    overflow: hidden;
    cursor: default;

    &:hover {
      transform: scale(1.015);
    }
  }

  .item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item-left {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
  }

  .item-name {
    font-weight: bold;
    font-size: 25px;
  }

  .item-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .img-Arrow {
    width: 20px;
    transition: transform 0.3s ease;
  }

  .img-Arrow.rotated {
    transform: rotate(180deg);
  }

  .extra-content-wrapper {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.4s ease;
  }

  .extra-content-wrapper.expanded {
    max-height: 150px;
    opacity: 1;
  }

  .extra-content {
    padding-top: 15px;
    border-top: 1px solid #444;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .add-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    font-size: 32px;
    background: none;
    border: none;
    cursor: pointer;
    color: wheat;
  }

  .modal-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: white;
    padding: 20px;
    border-radius: 12px;
    width: 300px;
  }

  .modal-input {
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }

  .modal-actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }
`;

export default Funcionarios;
