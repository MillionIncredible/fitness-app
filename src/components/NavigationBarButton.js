import React from 'react';

function NavigationBarButton() {
    const navigationBarButtons = ['Home', 'Browse', 'Profile'];

    return (
        navigationBarButtons.map((button) => 

            <button type="button">{button}</button>
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