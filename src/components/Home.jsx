import React from 'react';
import styled from 'styled-components';
import Greeting from './Greeting';
import WorkoutOfTheDay from './WorkoutOfTheDay';

const Div = styled.div`
    width: 99vw;
`;

function Home() {
   return (
      <Div>
         <Greeting />
         <WorkoutOfTheDay />
      </Div>
   );
}

export default Home;