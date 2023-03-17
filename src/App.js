import React from 'react';
import styled from 'styled-components';
import Card from './components/Card'

function App() {
  return (
    <Wrapper>
      <Card/>
    </Wrapper>
  );
}

const Wrapper = styled.ul `
  background-color: hsl(184, 47%, 74%);
  margin: 0px;
  padding: 3%;
  display: grid;
  justify-content: center;
`;

export default App;
