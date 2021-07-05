import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 250px;
    animation: fadeIn 2.5s;

    p {

    }

    input {
        width: 300px;
        height: 45px;
        padding: 12px 25px;
        margin-top: 72px;
        border: 1px solid #1D2A73;
        box-sizing: border-box;
        border-radius: 5px;
    }

    .continueLink {
            line-height: 45px;
            display: block;
            text-align: center;
            width: 101px;
            border-radius: 50px;
            border-style: none;
            color: var(--color-white);
            background-color: var(--color-blue-dark);
            margin-top: 36px;
            font-size: 16px;

            &:hover {
                cursor: pointer;
            }
    } 

    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }
`;


const RegistrationStepOne = () => (
        <Div>
            <p>Wunderbarer Name, verrätst du <br/> uns noch dein Geschlecht?</p>
            <Link className="continueLink" to="/registrationstepthree">weiblich</Link>
            <Link className="continueLink" to="/registrationstepthree">männlich</Link>
        </Div>
    );

export default RegistrationStepOne;