import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position:relative
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  color: white;
  text-decoration: none;
  font-size: 24px;

  &:hover {
    color: #007bff;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Your Company. All rights reserved.</p>
      <SocialIconsContainer>
        <SocialIcon href="https://www.facebook.com/" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialIcon>
        <SocialIcon href="https://twitter.com/" target="_blank">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialIcon>
        <SocialIcon href="https://www.instagram.com/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </SocialIcon>
      </SocialIconsContainer>
    </FooterContainer>
  );
};

export default Footer;
