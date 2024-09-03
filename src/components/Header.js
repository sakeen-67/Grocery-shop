import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
  background-color: #795548;
  padding: 20px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2em;
  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <h1>Food Frenzy</h1>
      <Nav>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/menu">Product Catalog</NavLink>
        <NavLink to="/order">Shopping Cart</NavLink>
        <NavLink to="/manage-orders">Track Orders</NavLink>
        <NavLink to="/login">Logout</NavLink>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
