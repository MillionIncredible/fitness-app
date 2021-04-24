import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width: 275px;
    height: 132px;
    padding-top: 71px;
    margin-left: 17px;

    & h1 {
      align-items: center;
      text-align: left;
    }
`;

const name = "Maximilian";

function Greeting() {
   return (
      <Div>
        <h1>Guten<br/>Morgen,<br/>{name}</h1>
      </Div>
   );
}

export default Greeting;