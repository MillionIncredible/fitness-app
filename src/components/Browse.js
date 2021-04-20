import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';

const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    text-align:center;

    & h2 {
       
    }
`;

function Browse() {
   return (
      <StyledDiv>
        <h2>Browse</h2>
        <NavigationBar />
      </StyledDiv>
   );
}

export default Browse;