import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #021e29;

    @media (max-width: 320px) {
        width: 100%;
    }

    @media (max-width: 375px) {
        width: 100%;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: #fff;
    font-size: 17px;

    @media (max-width: 320px) {
        font-size: 13px;
        text-align: center;
    }

    @media (max-width: 375px) {
        font-size: 13px;
        text-align: center;
    }

    @media (max-width: 425px) {
        font-size: 13px;
        text-align: center;
    }
`;

export const ButtonLink = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background-color: #fff;
    color: #000;
    border: 1px solid #ccc;
    margin-top: 10px;
    margin: 10px;
    cursor: pointer;

    &:hover {
        background-color: #ccc;
    }

    @media (max-width: 320px) {
        width: 30%;
        height: 25px;
        margin: 8px;
    }

    @media (max-width: 375px) {
        width: 28%;
        height: 25px;
        margin: 8px;
    }

    @media (max-width: 425px) {
        width: 20%;
        height: 25px;
        margin: 8px;
    }
`;




