import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactMenuContainer = styled.div /*style*/`
margin-top:3rem;
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

  @media (min-width: 360px) and (max-width: 900px) {
    justify-content: flex-end;
    bottom: 3.5rem;

}
`;

const H1 = styled.h1 /*style*/`
margin:0;

 @media (min-width: 360px) and (max-width: 900px) {
  
    font-size:2rem;
 
  }
`

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
    transform:scale(1.05)
  }

  &.telefono{
  background-color:rgb(37,37,88);
  color:white;
  }
  &.wa {
  background-color:rgb(60,106,30);
  color:white;
  }
  &.mail {
  background-color:rgb(159,32,38);
  color:white;
  }
`;

const ContactMenu = ({appearList,appearRegresarButton,setLeftSideVisible,setLogoVisible,telefono,wati,etiqueta,conversion_event}) => {
  const phoneNumber = telefono; // Replace with your phone number
  const whatsappNumber = `+52${wati ? wati : telefono}`; // Replace with your WhatsApp number
  const email = 'example@example.com'; // Replace with your email address

  const abrirWhatsApp = () => {
    
    const mensaje = encodeURIComponent("Hola, requiero ayuda para un servicio de fumigación");
    window.open(`https://wa.me/${whatsappNumber}?text=${mensaje}`, '_blank', 'noopener,noreferrer');
    

  }
  const abrirWhatsAppGoogleAds = () => {
    const mensaje = encodeURIComponent("Hola, requiero ayuda para un servicio de fumigación");
    const url = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
    
    // Abrir WhatsApp inmediatamente (lo más importante para el usuario)
    window.open(url, '_blank', 'noopener,noreferrer');
  
    // Enviar el evento de conversión sin depender de callback
    gtag('event', 'conversion', {
      send_to: 'AW-16970665561/a3yYCOittLkaENmcn5w_'
    });
  
    return false;
  };
  const abrirWhatsAppGoogleAdsReutilizablelEO = (etiquta,conversion_event ) => {
    const mensaje = encodeURIComponent("Hola, requiero ayuda para un servicio de fumigación");
    const url = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
    
    // Abrir WhatsApp inmediatamente (lo más importante para el usuario)
    window.open(url, '_blank', 'noopener,noreferrer');
  
    // Enviar el evento de conversión sin depender de callback
    gtag('event', 'conversion', {
      send_to: `${etiquta}/${conversion_event}`
    });
  
    return false;
  };
  const abrirWhatsAppGoogleAdsReutilizableSLP = (etiquta,conversion_event ) => {
    const mensaje = encodeURIComponent("Hola, requiero ayuda para un servicio de fumigación");
    const url = `https://wa.me/${whatsappNumber}?text=${mensaje}`;
    
    // Abrir WhatsApp inmediatamente (lo más importante para el usuario)
    window.open(url, '_blank', 'noopener,noreferrer');
  
    // Enviar el evento de conversión sin depender de callback
    gtag('event', 'conversion', {
      send_to: `${etiquta}/${conversion_event}`
    });
  
    return false;
  };

 
  return (
    <ContactMenuContainer>
      <H1 style={{fontWeight:"bold" , color:"black"}}>¡Contáctanos Para Agendar Tu Servicio!</H1>
      <ContactButton  className="telefono" href={`tel:${phoneNumber}`}>
        <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
        Llamar Directo
      </ContactButton>
      {window.location.pathname === `/qro` && (
      <ContactButton className="wa" onClick={abrirWhatsAppGoogleAds}>
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
        WhatsApp
      </ContactButton>
      )}
      {window.location.pathname === `/` && (
      <ContactButton className="wa" onClick={()=>{abrirWhatsAppGoogleAdsReutilizablelEO("AW-803120940","XBV7CKmX_LkaEKzO-v4C")}}>
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
        WhatsApp
      </ContactButton>
      )}
      {(window.location.pathname === '/slp' || window.location.pathname === '/SLP' ) &&(
      <ContactButton className="wa" onClick={()=>{abrirWhatsAppGoogleAdsReutilizableSLP('AW-16466862533','wYhyCKOB9LkaEMXDgaw9')}}>
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '5px' }} />
        WhatsApp
      </ContactButton>
      )}
      
      {/* <ContactButton className="mail"
      onClick={() => {appearList(),appearRegresarButton(),setLeftSideVisible(false),setLogoVisible(false)}}
      >
        <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
        Enviar Email
      </ContactButton> */}
    </ContactMenuContainer>
  );
};

export default ContactMenu;
