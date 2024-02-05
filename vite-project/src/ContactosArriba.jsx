import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactMenuContainer = styled.div /*style*/`
  position: fixed;
  gap: 1.5rem;
  top: 0;
  right: 0;
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
  @media (min-width: 360px) and (max-width: 900px) {
   width:100%;
   width:100%;
   flex-direction:row;
  
  
  }
`;

const ContactButton = styled.a /*style*/`
  text-decoration: none;
  opacity: 0.5;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: background-color 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &.telefono {
   
    color: black;
  }

  &.wa {
    
    color: black;
  }

  &.mail {
    
    color: black;
  }

  &.web {
   
    color: black;
  }

  @media (min-width: 360px) and (max-width: 900px) {
   display:flex;
   width:100%;
   width:100%;
   flex-direction:row;
   background:none;
  
  }
`;

const GoToBackButton = styled.button /*style*/`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  font-size: 20px;
`;

const ContactosArriba = ({ appearContact }) => {
  return (
    <>
      <ContactMenuContainer>
        <ContactButton className="telefono" href="tel:4771373134">
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
          477-1373-134
        </ContactButton>
        <ContactButton className="web" href="https://www.insectsout.com.mx/" target="_blank">
          <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '5px' }} />
          Visita nuestra Web
        </ContactButton>
      </ContactMenuContainer>
      <GoToBackButton onClick={appearContact}>
        <FontAwesomeIcon icon={faArrowAltCircleLeft} />
      </GoToBackButton>
    </>
  );
};

export default ContactosArriba;
