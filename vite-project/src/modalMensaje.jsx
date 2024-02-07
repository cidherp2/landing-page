import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div /*style*/`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div /*style*/`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  color:black;
  width:80%;
`;

const CloseButton = styled.button /*style*/`
  background: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
`;

const Modal = ({ onClose, modaDesactivado}) => {
  return (
    <ModalOverlay>
      <ModalContent>
        <p>Gracias por tu confianza, ¡a la brevedad te contactamos!</p>
        <CloseButton onClick={modaDesactivado}>Cerrar</CloseButton>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;