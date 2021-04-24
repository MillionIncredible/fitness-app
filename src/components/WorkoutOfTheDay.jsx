import React from 'react';
import styled from 'styled-components';
import WorkoutProgramm from "../assets/WorkoutProgramm.svg";

const Div = styled.div`
    display:flex;
    flex-flow: column;
    align-items: center;
    width: 375px;
    margin-left: 17px;
    margin-top: 53px;

    & .headingContainer {
        display:flex;
        align-items: center;
        width:375px;
        height: 29px;
        margin-bottom: 10px;
    }

    & .workoutplanP {
        align-self: center;
        margin-left: auto;
    }

    & img {
        width: 375px;
        height: 214px;
        border-radius: 5px;
    }

    & .titles {
        display: flex;
        flex-flow: column;
        align-items: flex-start;
        align-self: flex-start;
        width: 275px;
        height: 56px;
        margin-top: 11px;
    }
`;

function WorkoutOfTheDay() {
    return (
        <Div>
            <div className="headingContainer">
                <h2>Dein Workout heute</h2>
                <p className="workoutplanP">Trainingsplan</p>
            </div>
            <img src={WorkoutProgramm} alt="WorkoutProgramm"/>
            <div className="titles">
                <h3>Titel des Workouts</h3>
                <h4>Titel des Programms</h4>
                <p>XXX kcal - 26 Min. - Beweglichkeit</p>
            </div>
        </Div>
    );
}

export default WorkoutOfTheDay;