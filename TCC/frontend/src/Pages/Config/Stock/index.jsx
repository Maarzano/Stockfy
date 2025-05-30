import React, { useState } from 'react';
import styled from 'styled-components';
import Arrow from "../../../Assets/SVGs/Icons/Arrow.svg"
import { useProdutos } from '../../../Hooks/Produtos/useProdutos';
import SearchLoader from '../../../Components/Loaders/SearchLoader';

const Stock = () => {
  const { produtos, loading, erro} = useProdutos([]);
  const [showForm, setShowForm] = useState("");

  return (
    <Wrapper>
      <h2>Itens do estoque</h2>

      <div className="search-box">
        <img className="search-icon" src="lupa" alt="" />
        <input type="text" placeholder="Nome Item" className="search-input" />
      </div>

      {
        loading &&
        <>
          <p>Carregando itens...</p>
          <SearchLoader/>
        </>
      }
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <div className="item-list">
        {produtos.map((item) => (
          <div key={item.itemId} className="item-card">
            <div className="item-left">
              <img src={item.imagem} alt={item.nomeItem} className="item-image" />
              <div className="item-info">
                <span className="item-name">{item.nomeItem}</span>
                <span className="item-description">{item.descricao}</span>
              </div>
            </div>
            <div className="item-right">
              <span>Quantidade: {item.quantidade}</span>
              <img className="img-Arrow" src={Arrow} alt="Expandir" />
            </div>
          </div>
        ))}
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
  padding: 30px 100px;
  max-width: 1650px;
  margin: auto;
  position: relative;

  h2 {
    margin-bottom: 10px;
  }

  .search-box {
    position: relative;
    margin-bottom: 20px;
  }

  .search-input {
    width: 500px;
    padding: 10px 15px 10px 35px;
    border: 1px solid #ccc;
    border-radius: 9999px;
    outline: none;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
    font-size: 14px;
    color: wheat;
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
    justify-content: space-between;
    align-items: center;
    transition: 0.5s all ease;

    &:hover{
        transform: scale(1.015);
    }
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

  .arrow {
    font-size: 14px;
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

  .img-Arrow{
    width: 20px;
  }
`;

export default Stock;
