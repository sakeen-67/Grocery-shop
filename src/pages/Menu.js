import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const MenuItem = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
`;

function Menu() {
  const menuItems = [
    { name: 'Egg', price: '₹6.50' },
    { name: 'Nuts', price: '₹200' },
    { name: 'Mango', price: '₹60' },
    { name: 'Mayo', price: '₹180' },
    { name: 'Peanut Butter', price: '₹230' },
    { name: 'Soap', price: '₹40' },
    { name: 'Flour', price: '₹34' }
  ];

  return (
    <MenuContainer>
      <h2>Groceries</h2>
      {menuItems.map((item, index) => (
        <MenuItem key={index}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
        </MenuItem>
      ))}
    </MenuContainer>
  );
}

export default Menu;
