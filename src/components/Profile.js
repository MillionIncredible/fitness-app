import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';

const StyledDiv = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--color-white);
    text-align:center;
`;

function Profile() {
   return (
      <StyledDiv>
        <h2>Profile</h2>
        <NavigationBar />
      </StyledDiv>
   );
}

export default Profile;