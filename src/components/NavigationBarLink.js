/* eslint-disable no-nested-ternary */

import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import HomeLogo from "../assets/svg/Home.svg";
import BrowseLogo from "../assets/svg/Browse.svg";
import ProfileLogo from "../assets/svg/Profile.svg";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 9px;
    margin-bottom: 1px;
    height: 40px;

    & p {
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12.19px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        margin-top: 3.88px;
    }
`;

function NavigationBarLink() {
    const NavigationBarLinks = ['Home', 'Browse', 'Profile'];

    return (
        NavigationBarLinks.map((link) => 
            <Link to={link === 'Home' ? '/' : link === 'Browse' ? 'Browse' : 'Profile'}>
                <StyledDiv>
                    <img 
                        src={link === 'Home' ? HomeLogo : link === 'Browse' ? BrowseLogo : link === 'Profile' ? ProfileLogo : '#'} 
                        alt={link === 'Home' ? HomeLogo : link === 'Browse' ? BrowseLogo : link === 'Profile' ? ProfileLogo : 'No picture included'} 
                    />
                    <p>{link}</p>
                </StyledDiv>
            </Link>
        )
    );
}

export default NavigationBarLink;