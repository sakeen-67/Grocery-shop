import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #795548;
  padding: 10px;
  text-align: center;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

function Footer() {
  return <FooterContainer>&copy; {new Date().getFullYear()} Supermarket Grocery Supplies Pvt Ltd</FooterContainer>;
}

export default Footer;
