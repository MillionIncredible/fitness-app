import React from "react";
import styled from "styled-components";
import Greeting from "./Greeting";
import WorkoutOfTheDay from "./WorkoutOfTheDay";

const Div = styled.div`
  width: 99vw;
`;

const Home = () =>{
  const user = {
    id: 1,
    name: "Maximilian",
  };

  return (
    <Div>
      <Greeting name={user.name} />
      <WorkoutOfTheDay />
    </Div>
  );
}

export default Home;
