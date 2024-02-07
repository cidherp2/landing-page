import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

const ContactMenuContainer = styled.div /*style*/`
  position: fixed;
  color:white;
  gap: 1.5rem;
  filter: drop-shadow(-1px 5px 10px #000000);
  top: 1.5rem;
  right: 1rem;
  padding: 10px;
  width: 100%;
  justify-content:center;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 999;
  @media (min-width: 360px) and (max-width: 900px) {
   width:100%;
   height:5%;
   top: 0;
  right: 0;
   
   flex-direction:row;
   background-color:rgb(37,37,88);
  
  
  }
`;

const ContactButton = styled.a /*style*/`
  text-decoration: none;
  opacity: 0.5;
  border-radius: 10px;
  border: 1px solid white;
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
   border:none;
   color:white;

   &.telefono {
   
   color: white;
 }

 &.wa {
   
   color: white;
 }

 &.mail {
   
   color: white;
 }

 &.web {
  
   color: white;
 }
   
  
  
  }
`;

const GoToBackButton = styled.button /*style*/`
 background-color:rgb(159,32,38);
 border: 1px solid gray;
  color: white;
  padding: 10px;
  cursor: pointer;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999;
  font-size: 20px;
`;

const ContactosArriba = ({ appearContact, esVisibleBack,setEsVisibleBack,setLeftSideVisible} ) => {


  return (
    <>
      <ContactMenuContainer>
        <ContactButton className="telefono" href="tel:4772287565">
          <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
          477-228-7565
        </ContactButton>
        <ContactButton className="web" href="https://www.insectsout.com.mx/" target="_blank">
          <FontAwesomeIcon icon={faGlobe} style={{ marginRight: '5px' }} />
          Visita nuestra Web
        </ContactButton>
      </ContactMenuContainer>
      {esVisibleBack && (
      <GoToBackButton onClick={() =>{ appearContact(),setEsVisibleBack(false),setLeftSideVisible(true)}}>
        <h1 style={{fontSize:"1rem"}}> Regresar </h1>
        
      </GoToBackButton>
      )}
    </>
  );
};

export default ContactosArriba;
