import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '..';
import { placeholder } from '../../../Utils/verificandoImagem';

const AddToCartModal = ({ isOpen, onClose, item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const maxQuantity = item?.quantidadeDisponivel || 0;
  const retiarada = item?.quantidadeRetirada;
  const isMaxReached = quantity >= maxQuantity && quantity >= retiarada;
  const notInsertOnCart = retiarada === 0 && maxQuantity === 0;

  const handleIncrement = () => {
    if (!isMaxReached) {
      setQuantity((prevQuantity) => prevQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handleAddToCart = () => {
    onAddToCart(item, quantity);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Container>
        <Image src={ placeholder(item.imagem)} alt={item.nomeItem} draggable={false}/>
        <h2>{item.nomeItem}</h2>
        <p>{item.descricao}</p>
        <StockInfo>Quantidade em estoque: {maxQuantity}</StockInfo>
        <StockInfo>Quantidade retirada: {retiarada}</StockInfo>
        <QuantityContainer>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button 
            onClick={handleIncrement}
            disabled={isMaxReached}
            className={isMaxReached ? 'disabled' : ''}
          >
            +
          </button>
        </QuantityContainer>
        <ButtonRow>
          <button onClick={handleAddToCart} disabled={notInsertOnCart} className={notInsertOnCart ? "disabled" : ""}>Adicionar ao Carrinho</button>
        </ButtonRow>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  background: #10101f;
  padding: 24px;
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.6);
  color: #f1f1f1;
  font-family: 'Segoe UI', sans-serif;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const StockInfo = styled.div`
  font-size: 14px;
  color: #a084ff;
  margin-bottom: 16px;
  font-weight: 500;
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;

  button {
    padding: 10px 14px;
    border: none;
    border-radius: 8px;
    background-color: #2c2c3e;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover:not(.disabled) {
      background-color: #3a3a4d;
    }

    &.disabled {
      background-color: #1a1a2e;
      color: #666;
      cursor: not-allowed;
      opacity: 0.5;
    }
  }

  span {
    font-size: 24px;
    font-weight: bold;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 12px;
  margin-top: 16px;

  button {
    padding: 12px 22px;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    transition: background-color 0.3s;
    color: #fff;

    &:first-child {
      background-color: #3a3a4d;
    }

    &:last-child {
      background-color: #6c47ff;
    }

    &.disabled {
      background-color: #1a1a2e;
      color: #666;
      cursor: not-allowed;
      opacity: 0.5;
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

export default AddToCartModal;
