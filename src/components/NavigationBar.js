import React from 'react';
import styled from 'styled-components';
import NavigationBarLink from './NavigationBarLink';

const StyledDiv = styled.div`
   display: flex;
   justify-content: space-around;
   position: absolute;
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
         <NavigationBarLink />
      </StyledDiv>
   );
}

export default NavigationBar;