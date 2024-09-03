import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

function Home() {
  return (
    <HomeContainer>
      <h1>Welcome!</h1>
      <p>Select an option from the menu above to get started.</p>
    </HomeContainer>
  );
}

export default Home;
