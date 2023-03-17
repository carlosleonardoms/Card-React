import React from "react";
import styled from "styled-components";



function Footer(){
    return(
        <Wrapper>
            <Icons>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
                <p>icon</p>
            </Icons>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: hsl(184, 72%, 50%);
    padding: 16px;
`;

const Icons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export default Footer;