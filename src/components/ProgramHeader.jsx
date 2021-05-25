/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    text-align: center;
    width: 100%;
    height: 75vh;
    background: var(--gradient-yellow-rose);

    .headingContainer {
        display: flex;
        justify-content: flex-end;
        width: inherit;
        height: 75%;

        h1 {
            width: 347px;
            margin: 247px auto auto auto;
        }
    }

    
    .programTraits {
        display: flex;
        width: inherit;
        height: 25%;
        padding-bottom: 21px;
        justify-content: space-around;
        align-items: flex-end;

        .circle {
            width: 25px;
            height: 25px;
            box-sizing: border-box;
            border: 2px solid var(--color-beige);
            background-color: var(--color-beige);
            border-radius: 100%;
            margin: auto;
        }

        p {
            font-size: 10px;
            line-height: 12.19px;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            margin-top: 3.88px;
        }
    }
`;

const ProgramHeader = props => {
    const {programTitle} = props;
    const {programFocus} = props;
    const {programDifficulty} = props;
    const {programDuration} = props;

    return (
        <Div>
            <div className="headingContainer">
                <h1>{programTitle}</h1>
            </div>
            <div className="programTraits">
                <div /* className="programFocus" */>
                    <div className="circle"/>
                    <p>{programFocus}</p>
                </div>
                <div /* className="programDifficulty" */>
                    <div className="circle"/>
                    <p>{programDifficulty}</p>
                </div>
                <div /* className="programDuration" */>
                    <div className="circle"/>
                    <p>{programDuration} days</p>
                </div>
            </div>
        </Div>
    );
};

export default ProgramHeader;