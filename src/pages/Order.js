import React, { useState } from 'react';
import styled from 'styled-components';

const OrderContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  margin: 5px;
  width: 200px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #795548;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff4757;
  }
`;

function Order() {
  const [order, setOrder] = useState({ name: '', item: '', quantity: '' });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Placed: ${order.quantity} x ${order.item} for ${order.name}`);
    setOrder({ name: '', item: '', quantity: '' });
  };

  return (
    <OrderContainer>
      <h2>Place an Order</h2>
      <OrderForm onSubmit={handleSubmit}>
        <Input name="name" value={order.name} onChange={handleChange} placeholder="Your Name" required />
        <Input name="item" value={order.item} onChange={handleChange} placeholder="Menu Item" required />
        <Input
          type="number"
          name="quantity"
          value={order.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <Button type="submit">Place Order</Button>
      </OrderForm>
    </OrderContainer>
  );
}

export default Order;
