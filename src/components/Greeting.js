import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 275px;
    height: 132px;
    padding-top: 71px;
    margin-left: 17px;

    & h1 {

        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 44px;
        display: flex;
        align-items: center;
        text-align: left;
    }
`;

const name = "Maximilian";

function Greeting() {
   return (
      <StyledDiv>
        <h1>Guten<br/>Morgen,<br/>{name}</h1>
      </StyledDiv>
   );
}

export default Greeting;










        