import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    html {
        min-height: 100%;
        position: relative;
        font-size: 62.5%;
        font-family: 'Montserrat', sans-serif;

        /* Colors in Hex */
        --color-white: #FFFFFF;
        --color-blue-dark: #1D2A73;
        --color-blue-medium: #4856DF;
        --color-blue-cyan: #3EC1F3;
        --color-cotton-candy: #FFB7D5;
        --color-red-orange: #CA7358;
        --color-yellow-warm: #FFBE21;
        --color-beige: #F5EBDD;
        --color-brown-light:#EDD4D0;
        --color-brown-med:#DBAFA8;
        --color-brown-med2:#95645D;
        --color-brown-dark:#522F29;
        --color-green-mint:#D2DDD0;
        --color-grey-light:#F3F3F3;
        --color-turquoise:#3EF3E8;
        --color-pink:#EB42C6;
        --color-salmon:#FFB1A0;
        --color-yellow-light:#F5FFA0;

        /* Colors in RGBA
        --color-white: rgba(255,255,255);
        --color-blue-dark: rgb(29, 42, 115);
        --color-blue-medium: rgb(72, 86, 223);
        --color-blue-cyan: rgb(62, 193, 243);
        --color-cotton-candy: rgb(255, 183, 213);
        --color-red-orange: rgb(202, 115, 88);
        --color-yellow-warm: rgb(255, 190, 33);
        --color-beige: rgb(245, 235, 221);
        --color-brown-light:rgb(237, 212, 208);
        --color-brown-med:rgb(219, 175, 168);
        --color-brown-med2:rgb(149, 100, 93);
        --color-brown-dark:rgb(82, 47, 41);
        --color-green-mint:rgb(210, 221, 208);
        --color-grey-light:#rgb(243, 243, 243);
        --color-turquoise:rgb(62, 243, 232);
        --color-pink:rgb(235, 66, 198);
        --color-salmon:rgb(255, 177, 160);
        --color-yellow-light:rgb(245, 255, 160); 
        */

        /* Linear Gradients */
        --gradient-blue:linear-gradient(261.83deg, #3EF3E8 6.65%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #1D2A73, #1D2A73);
        --gradient-yellow-turq:linear-gradient(261.83deg, #3EF3E8 3.86%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #F5FFA0, #F5FFA0);
        --gradient-pink:linear-gradient(261.83deg, #EB42C6 7.62%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #FFB1A0, #FFB1A0);
        --gradient-yellow-pink:linear-gradient(261.83deg, #EB42C6 7.62%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #FFBE21, #FFBE21);
        --gradient-purple-rose:linear-gradient(261.83deg, #FFB7D5 6.65%, rgba(255, 255, 255, 0) 89.06%),linear-gradient(0deg, #1D2A73, #1D2A73);
        --gradient-yellow-rose:linear-gradient(261.83deg, #FFB7D5 22.27%, rgba(255, 255, 255, 0) 89.6%),linear-gradient(0deg, #FFBE21, #FFBE21);
    }

    body {
        color: var(--color-blue-dark);
        margin-bottom: 75px;
    }

    h1 {  
        font-style: normal;
        font-weight: 700;
        font-size: 3.6rem;
        line-height: 4.4rem;
    }

    h2 {
        font-style: normal;
        font-weight: 700;
        font-size: 2.4rem;
        line-height: 2.9rem;
    }

    h3 {
        font-style: normal;
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 2.2rem;
    }

    p {
        font-style: normal;
        font-weight: normal;
        font-size: 1.6rem;
        line-height: 2.1rem;
    }

    a {
        text-decoration: 0;

        &:visited {
            color: var(--color-blue-dark);
        }
    }
`;
 
export default GlobalStyle;