import React from 'react';
import styled from 'styled-components';


const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  onConfirm,
  confirmText = "Confirmar",
  cancelText = "Cancelar",
  type = "confirm",
  isLoading = false,
  confirmButtonProps = {},
  cancelButtonProps = {},
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const getConfirmButtonVariant = () => {
    switch (type) {
      case 'delete':
        return <DangerButton onClick={onConfirm} disabled={isLoading} {...confirmButtonProps}>
          {isLoading ? 'Processando...' : confirmText}
        </DangerButton>;
      case 'edit':
        return <PrimaryButton onClick={onConfirm} disabled={isLoading} {...confirmButtonProps}>
          {isLoading ? 'Salvando...' : confirmText}
        </PrimaryButton>;
      default:
        return <PrimaryButton onClick={onConfirm} disabled={isLoading} {...confirmButtonProps}>
          {isLoading ? 'Confirmando...' : confirmText}
        </PrimaryButton>;
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        
        <ModalContent>
          {children}
        </ModalContent>
        
        <ModalFooter>
          <SecondaryButton onClick={onClose} disabled={isLoading} {...cancelButtonProps}>
            {cancelText}
          </SecondaryButton>
          {getConfirmButtonVariant()}
        </ModalFooter>
      </ModalContainer>
    </ModalOverlay>
  );
};

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 500px;
  padding: 20px;
  animation: fadeIn 0.3s;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  color: #333;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  
  &:hover {
    color: #333;
  }
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
  color: #555;
  line-height: 1.5;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: #3182ce;
  color: white;

  &:hover:not(:disabled) {
    background-color: #2c5282;
  }
`;

const DangerButton = styled(Button)`
  background-color: #e53e3e;
  color: white;

  &:hover:not(:disabled) {
    background-color: #c53030;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: #e2e8f0;
  color: #4a5568;

  &:hover:not(:disabled) {
    background-color: #cbd5e0;
  }
`;

export default Modal;