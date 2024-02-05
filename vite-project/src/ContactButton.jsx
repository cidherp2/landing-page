import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactMenuContainer = styled.div /*style*/`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: gray;
  align-self: center;
  justify-content: flex-start;
  position: relative;
  bottom: 8.5rem;
  display: flex;
  flex-direction: column;
`;

const ContactButton = styled.a /*style*/`
  text-decoration: none;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #333;
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const ContactMenu = () => {
  const phoneNumber = '4774499764'; // Replace with your phone number
  const whatsappNumber = '+524774499764'; // Replace with your WhatsApp number
  const email = 'example@example.com'; // Replace with your email address

  const abrirWhatsApp = () => {
    const mensaje = encodeURIComponent("Buenos días, requiero ayuda para un servicio de fumigación");
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, '_blank', 'noopener,noreferrer');

  }

  return (
    <ContactMenuContainer>
      <h1>Contactanos para agendar tu servicio!</h1>
      <ContactButton href={`tel:${phoneNumber}`}>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
        Llamar Directo
      </ContactButton>
      <ContactButton onClick={abrirWhatsApp}>
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
        WhatsApp
      </ContactButton>
      <ContactButton href={`mailto:${email}`}>
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
        Enviar Email
      </ContactButton>
    </ContactMenuContainer>
  );
};

export default ContactMenu;
