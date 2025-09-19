import React from 'react';
import styled from 'styled-components';

const Mainb = () => {
  function open(){
    window.location.href= "http://localhost:5173/search";
  }
  return (
    <StyledWrapper>
      <button style={{marginLeft: "45%", marginTop: "3%"}} onClick={open}>Get Started</button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 17px 40px;
    border-radius: 50px;
    cursor: pointer;
    border: 0;
    background-color: white;
    box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    font-size: 15px;
    transition: all 0.5s ease;
    color: black
  }

  button:hover {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 7px 29px 0px;
  }

  button:active {
    letter-spacing: 3px;
    background-color: hsl(261deg 80% 48%);
    color: hsl(0, 0%, 100%);
    box-shadow: rgb(93 24 220) 0px 0px 0px 0px;
    transform: translateY(10px);
    transition: 100ms;
  }`;

export default Mainb;
