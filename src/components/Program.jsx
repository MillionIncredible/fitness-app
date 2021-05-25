/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import styled from 'styled-components';
import { useQuery } from "@apollo/client";
import { GET_PROGRAM_BY_SLUG } from "../graphql/queries";
import ProgramHeader from "./ProgramHeader";
import ProgramPieChart from "./ProgramPieChart";


const Div = styled.div`
    width: 100%;
    /* height: 100%; */

    .programDescriptionContainer {
        text-align: justify;
        height: auto;
        padding: 25px;
        background-color: var(--color-beige);
    }
`;

const Program = (props) => {
    const { slug } = props.match.params;
    const { loading, error, data } = useQuery(GET_PROGRAM_BY_SLUG, { variables: { slug } });
    if (loading) return <p>Loading...</p>;
    if (error) return <p>`Error: ${error.message}`</p>;
    if (!data) return <p>No data!</p>;

    const programBySlug = data.allProgram.slice();
    const programTitle = programBySlug[0].title;
    const programFocus = programBySlug[0].focus;
    const programDifficulty = programBySlug[0].difficulty;
    const programDuration = programBySlug[0].duration;
    const programDescription = programBySlug[0].description === null ? 'Leider gibt es für das Programm noch keine Beschreibung, sorry!' : programBySlug[0].description;

    /* Testing 
    const programWorkouts = programBySlug[0].workouts;
    let cardioCount = 0;
    let coordinationCount = 0;
    let mobilityCount = 0;
    let strengthCount = 0;

    const programCategories = [];
    programWorkouts.forEach(programWorkout => {
        programCategories.push(programWorkout.Workout.categories);
    });

    // console.log(programCategories);

    for (let i = 0; i < programCategories[i].length; i += 1) {
        for (let j = 0; j < programCategories[i][j].length; j += 1) {
            if (programCategories[i][j] === 'cardio') {
                cardioCount += 1;
            } else if (programCategories[i][j] === 'coordination') {
                coordinationCount += 1;
            } else if (programCategories[i][j] === 'mobility') {
                mobilityCount += 1;
            } else if (programCategories[i][j] === 'strength') {
                strengthCount += 1;
            }
        }
    }

    console.log(cardioCount);
    console.log(coordinationCount);
    console.log(mobilityCount);
    console.log(strengthCount);
     Testing End */

    return (
        <Div>
            <ProgramHeader
                programTitle={programTitle}
                programFocus={programFocus}
                programDifficulty={programDifficulty}
                programDuration={programDuration}
            />
            <div className="programDescriptionContainer">
                <p>{programDescription}</p>
            </div>
            <ProgramPieChart test={programTitle} />
        </Div>
    );
};

export default Program;

