import styled from "styled-components";


export const ContentFooter = styled.footer`
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #444;

    @media (min-width: 320px) {
        width: 100%;
        justify-content: flex;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 375px) {
        width: 100%;
        justify-content: flex;
        align-items: center;
        text-align: center;
    }

    @media (min-width: 425px) {
        width: 100%;
        justify-content: flex;
        align-items: center;
        text-align: center;
    }
`

export const DescriptionFooter = styled.p`
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`