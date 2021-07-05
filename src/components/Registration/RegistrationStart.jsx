/* eslint-disable arrow-body-style */
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import RegistrationImage from "../../assets/registrationImage.svg";

const Div = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    animation: fadeIn 2.5s;

    img {
        margin-top: 109px;
    }

    .registrationLink {
        line-height: 45px;
        display: block;
        text-align: center;
        width: 143px;
        border-radius: 50px;
        border-style: none;
        color: var(--color-white);
        background-color: var(--color-blue-dark);
        margin-top: 36px;
        font-size: 16px;
        animation: fromRight 1s linear;

        &:hover {
            cursor: pointer;
        }

        @keyframes fromRight {
            0% {
                transform: translateX(100%);
            }
            25% {
                transform: translateX(75%);
            }
            50% {
                transform: translateX(50%);
            }
            75% {
                transform: translateX(25%);
            }
            100% {
                transform: translateX(0%);
            }
        }
    }

    .loginLink {
        margin-top: 16px;
        font-size: 16px;
        animation: fromLeft 1s linear;

        @keyframes fromLeft {
            0% {
                transform: translateX(-100%);
            }
            25% {
                transform: translateX(-75%);
            }
            50% {
                transform: translateX(-50%);
            }
            75% {
                transform: translateX(-25%);
            }
            100% {
                transform: translateX(0%);
            }
        } 
    }

    @keyframes fadeIn {
        0% {opacity:0;}
        100% {opacity:1;}
    }

`;

const RegistrationStart = () => {

    return (
        <Div>
            <img src={RegistrationImage} alt="WorkoutProgramm"/>
            <Link className="registrationLink" to="/registrationstepone">registrieren</Link>
            <Link className="loginLink" to="/login">oder anmelden</Link>
        </Div>)
    };

export default RegistrationStart;