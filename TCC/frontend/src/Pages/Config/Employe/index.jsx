import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from "../../../Assets/SVGs/Icons/Arrow.svg";
import { useFuncionarios } from '../../../Hooks/Funcionarios/useFuncionarios';
import SearchLoader from '../../../Components/Loaders/SearchLoader';
import SaveCancelBTN from '../../../Components/Buttons/SaveCancelBTN';
import Search2 from '../../../Components/Searchs/Search2';

const Funcionarios = () => {
  const { funcionarios, loading, erro } = useFuncionarios();
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
                    <SaveCancelBTN type='edit' data={funcionario}/>
                    <SaveCancelBTN type='delete' data={funcionario}/>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
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
`;

export default Funcionarios;
