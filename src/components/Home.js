import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import Greeting from './Greeting';

const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    text-align:center;
`;

function Home() {
   return (
      <StyledDiv>
         <Greeting />
         <NavigationBar />
      </StyledDiv>
   );
}

export default Home;