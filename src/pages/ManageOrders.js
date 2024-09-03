import React, { useState } from 'react';
import styled from 'styled-components';

const ManageOrdersContainer = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #FFF3E0; /* Light Blue background */
  color: #1A237E; /* Navy Blue text */
`;

const OrdersList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const OrderItem = styled.li`
  margin: 10px 0;
  padding: 15px;
  background-color: #FFFFFF; /* White background for orders */
  border: 1px solid #1A237E;
  border-radius: 5px;
`;

const OrderActions = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #795548; /* Sky Blue background */
  color: #FFFFFF; /* White text */
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #ff4757; /* Slightly darker blue on hover */
  }
`;

function ManageOrders() {
  const [orders, setOrders] = useState([
    { id: 1, name: 'Madhilesh Babu', item: 'Eggs', quantity: 5, status: 'Pending' },
    { id: 2, name: 'Mathusri', item: 'Mango', quantity: 10, status: 'Pending' },
    { id: 3, name: 'Maurya', item: 'Peanut Butter', quantity: 7, status: 'Pending' },
  ]);

  const markAsShipped = (id) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: 'Shipped' } : order
    ));
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <ManageOrdersContainer>
      <h2>Manage Orders</h2>
      <p>View and manage current orders.</p>
      <OrdersList>
        {orders.map(order => (
          <OrderItem key={order.id}>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Item:</strong> {order.item}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Status:</strong> {order.status}</p>
            <OrderActions>
              <Button onClick={() => markAsShipped(order.id)}>Mark as Shipped</Button>
              <Button onClick={() => deleteOrder(order.id)}>Delete Order</Button>
            </OrderActions>
          </OrderItem>
        ))}
      </OrdersList>
    </ManageOrdersContainer>
  );
}

export default ManageOrders;
