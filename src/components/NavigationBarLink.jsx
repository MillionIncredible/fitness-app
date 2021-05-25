/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import HomeLogo from "../assets/Home.svg";
import BrowseLogo from "../assets/Browse.svg";
import ProfileLogo from "../assets/Profile.svg";

const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-top: 9px;
    margin-bottom: 1px;
    height: 40px;

    & img {
        align-self: center;
    }

    & .logoHome {
        height: 22.752939224243185px;
        width: 22.274538040161154px;
        border-radius: 0px;

    }

    & .logoBrowse {
        height: 17.351436614990234px;
        width: 34.743038177490234px;
        border-radius: 0px;
    }

    & .logoProfile {
        height: 25px;
        width: 25px;
        border-radius: 0px;

    }

    & p {
        font-size: 10px;
        line-height: 12.19px;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        margin-top: 3.88px;
    }
`;

const NavigationBarLink = () => {
    const navigationBarLinks = ['Home', 'Browse', 'Profile'];

    return (
        navigationBarLinks.map((navigationBarLink) => 
            <Link to={navigationBarLink === 'Home' ? '/' : navigationBarLink === 'Browse' ? '/Browse' : '/Profile'}>
                <Div>
                    <img
                        className={navigationBarLink === 'Home' || navigationBarLink === 'Browse' || navigationBarLink === 'Profile' ? `logo${navigationBarLink}` : undefined} 
                        src={navigationBarLink === 'Home' ? HomeLogo : navigationBarLink === 'Browse' ? BrowseLogo : navigationBarLink === 'Profile' ? ProfileLogo : ProfileLogo} 
                        alt={navigationBarLink === 'Home' || navigationBarLink === 'Browse' || navigationBarLink === 'Profile' ? `${navigationBarLink}Logo` : 'No picture included'} 
                    />
                    <p>{navigationBarLink}</p>
                </Div>
            </Link>
        )
    );
}

export default NavigationBarLink;