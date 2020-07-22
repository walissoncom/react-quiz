import styled, { createGlobalStyle } from 'styled-components';
//@ts-ignore
import BGImage from './images/olav-ahrens-rotne-jvBXiynINGE-unsplash.jpg';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Montserrat';
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 75vh;
    max-height: 90vh;
    width: 900px;
    overflow-y: scroll;
    margin: 50px 0 25px;
    padding: 10px 25px;
    background-color: rgba(255, 255, 255, .9);
    border-radius: 3px;
    box-shadow:
		0 2.8px 2.2px rgba(0, 0, 0, 0.034),
		0 6.7px 5.3px rgba(0, 0, 0, 0.048),
		0 12.5px 10px rgba(0, 0, 0, 0.06),
		0 22.3px 17.9px rgba(0, 0, 0, 0.072),
		0 41.8px 33.4px rgba(0, 0, 0, 0.086),
		0 100px 80px rgba(0, 0, 0, 0.12);

    > p {
        color #444;
    }

    .score {
        margin: 15px 0;
        color: #444;
        font-size: 1rem;
        text-transform: uppercase;

        span {
            margin-left: 5px;
            font-size: 2rem;
            font-weight: bold;
        }
    }

    h1 {
        margin: 20px;
        color: #26384A;
        font-family: 'Montserrat';
        font-size: 70px;
        font-weight: 500;
        text-align: center;
        
        i {
            color: #D4AF37;
        }
    }

    .start, .next {
        cursor: pointer;
        width: 300px;
        padding: 15px 40px 15px 50px;
        background: #1E65A5;
        color: #FFF;
        font-size: 1.2rem;
        border-color: transparent;
        border-radius: 3px;
        text-transform: uppercase;

        i {
            margin-left: 7px;
        }
    }
`;