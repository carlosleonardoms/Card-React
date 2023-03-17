import React from 'react';
import styled from 'styled-components';

import Info from './Info';
import About from './About';
import Interests from './Interests';
import Footer from './Footer';

function Card() {
  return (
    <Wrapper>
      <Info/>
      <About/>
      <Interests/>
      <Footer/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: hsl(184, 47%, 45%);
    margin: 0px;
    padding: 0%;
    border-radius: 8px;
    max-width: 400px;
`;

export default Card;
