import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: 0;
    background: var(--color-beige);
    color: var(--color-blue-dark);
`;


function NavigationBarButton() {
    const navigationBarButtons = ['Home', 'Browse', 'Profile'];

    return (
        navigationBarButtons.map((button) => 
            <StyledButton type="button">{button}</StyledButton>
            /*
            <div>
                <img src="images/home.svg" alt=""/>
                <p>{button}</p>
            </div>
            */
        )
    );
}

export default NavigationBarButton;