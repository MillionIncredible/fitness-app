import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap');
    * {
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
        font-family: Montserrat;
        --color-blue-dark: #1D2A73;
        --color-white: #FFFFFF;

    }

    body {
        background: var(--color-white);
        color: var(--color-blue-dark);
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
`;
 
export default GlobalStyle;