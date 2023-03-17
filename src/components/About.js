import React from "react";
import styled from "styled-components";

function About(){
    return(
        <Wrapper>
            <h3>About</h3>
            <p>I am from Brazil, a self-taught software developer who loves to learn and to overcome challenges.</p>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 16px;
    flex:2;
`;

export default About;