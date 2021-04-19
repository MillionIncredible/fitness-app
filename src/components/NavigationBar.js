import React from 'react';
import styled from 'styled-components';
import NavigationBarButton from './NavigationBarButton';

const StyledDiv = styled.div`
   position: absolute;
   display: flex;
   width: 100vw;
   height: 5.0rem;
   background-color: var(--color-beige);
   left: 0;
   bottom: 0;
   line-height: 5.0rem;
`;

function NavigationBar() {
   return (
      <StyledDiv>
         <NavigationBarButton />
      </StyledDiv>
   );
}

export default NavigationBar;