import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '..';

const AddToCartModal = ({ isOpen, onClose, item, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
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
        <Image src={item.image} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <QuantityContainer>
          <button onClick={handleDecrement}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </QuantityContainer>
        <ButtonRow>
          <button onClick={onClose}>Cancelar</button>
          <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </ButtonRow>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  background: #fff;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const QuantityContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;

  button {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f5f5f5;
    cursor: pointer;
    font-size: 18px;

    &:hover {
      background-color: #ddd;
    }
  }

  span {
    font-size: 24px;
    font-weight: 600;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;

  button {
    padding: 10px 20px;
    border: none;
    border-radius: 8px;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    color: white;
    transition: background-color 0.3s;

    &:first-child {
      background-color: #888;
    }

    &:last-child {
      background-color: #0074e4;
    }

    &:hover {
      opacity: 0.85;
    }
  }
`;

export default AddToCartModal;
