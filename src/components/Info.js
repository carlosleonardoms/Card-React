import React from "react";
import styled from "styled-components";

function Info(){
    return(
        <Wrapper>
          <ImgWrapper>
            <Image src="/myImage.jpeg" alt="My Image"/>
          </ImgWrapper>
            <Name>Carlos Maior</Name>
            <Job>Software Developer</Job>
            <Buttons>
                <Button>Email</Button>
                <Button>Linkedin</Button>
            </Buttons>
        </Wrapper>
    )
}

const Wrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1ch solid blanchedalmond;
  box-shadow: 100ch skyblue;
  padding:8px;
  gap: 14px;
  flex: 1;
`;

const ImgWrapper = styled.div`
  height: 300px;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 50%;
  border-radius: 10px;
`;

const Name = styled.h1`
  margin: 0px;
`;

const Job = styled.h4`
  margin: 0px;
`;

const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: #ff6384;
  color: #fff;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 24px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease-in-out;
  margin-top: 8px;
  
  &:hover {
    background-color: #f04d6d;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-3px);
  }
  
  &:active {
    background-color: #ff6384;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }
`;


export default Info;