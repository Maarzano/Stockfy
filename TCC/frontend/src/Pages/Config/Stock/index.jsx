import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from "../../../Assets/SVGs/Icons/Arrow.svg";
import Lupa from "../../../Assets/SVGs/Icons/lupa.svg";
import { useProdutos } from '../../../Hooks/Produtos/useProdutos';
import SearchLoader from '../../../Components/Loaders/SearchLoader';
import SaveCancelBTN from '../../../Components/Buttons/SaveCancelBTN';

const Stock = () => {
  const { produtos, loading, erro } = useProdutos([]);
  const [showForm, setShowForm] = useState(false);
  const [expandedItemId, setExpandedItemId] = useState(null);

  const toggleExpand = (itemId) => {
    setExpandedItemId(prev => (prev === itemId ? null : itemId));
  };

  return (
    <Wrapper>
      <h2>Itens do estoque</h2>

      <div className="search-box">
        <img className="search-icon" src={Lupa} alt="Pesquisar Item" />
        <input type="text" placeholder="Nome Item" className="search-input" />
      </div>

      {loading && (
        <>
          <p>Carregando itens...</p>
          <SearchLoader />
        </>
      )}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <div className="item-list">
        {produtos.map((item) => {
          const isExpanded = expandedItemId === item.itemId;

          return (
            <div
              key={item.itemId}
              className={`item-card ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleExpand(item.itemId)}
            >
              <div className="item-top">
                <div className="item-left">
                  <img src={item.imagem} alt={item.nomeItem} className="item-image" />
                  <div className="item-info">
                    <span className="item-name">{item.nomeItem}</span>
                    <span className="item-description">{item.descricao}</span>
                  </div>
                </div>
                <div className="item-right">
                  <span>Quantidade: {item.quantidade}</span>
                  <img
                    className={`img-Arrow ${isExpanded ? 'rotated' : ''}`}
                    src={Arrow}
                    alt="Expandir"
                  />
                </div>
              </div>

              <div className={`extra-content-wrapper ${isExpanded ? 'expanded' : ''}`}>
                <div className="extra-content">
                  <SaveCancelBTN type='delete'
                    onClick={(e) => {
                      e.stopPropagation(); // evita recolher o card
                      // ação de excluir
                    }}
                  >
                
                  </SaveCancelBTN >
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
            <h3>Adicionar Novo Item</h3>
            <input type="text" placeholder="Nome do item" className="modal-input" />
            <input type="number" placeholder="Quantidade" className="modal-input" />
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

  .search-box {
    position: relative;
    margin-bottom: 20px;
  }

  .search-input {
    width: 500px;
    padding: 10px 15px 10px 50px;
    border: 1px solid wheat;
    border-radius: 9999px;
    outline: none;
    color: wheat;
  }

  .search-icon {
    position: absolute;
    width: 35px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
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

  .item-description {
    font-size: 14px;
    color: wheat;
    margin-top: 4px;
  }

  .item-image {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
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
    justify-content: flex-end;
  }

  .delete-btn {
    background-color: #8b0000;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
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

export default Stock;
