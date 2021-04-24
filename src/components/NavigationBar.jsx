import React from 'react';
import styled from 'styled-components';
import NavigationBarLink from './NavigationBarLink';

const Div = styled.div`
   display: flex;
   justify-content: space-around;
   position: fixed;
   width: 100vw;
   height: 5.0rem;
   background-color: var(--color-beige);
   left: 0;
   bottom: 0;
   line-height: 5.0rem;
   overflow: hidden;
`;

function NavigationBar() {
   return (
      <Div>
         <NavigationBarLink />
      </Div>
   );
}

export default NavigationBar;