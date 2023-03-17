import React from "react";
import styled from "styled-components";

function Interests(){
    return(
        <Wrapper>
            <h3>Interests</h3>
            <p>My main Interests are sports and technololgy. 
                I play all sorts of sports, and I practiced Judo for most of my life, 
                but i have also had tech world surrounding me growing up annd i learned to coding, webb development, annd everything that comes along with it.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div `
  padding: 16px;
  flex: 3;
`;


export default Interests;