import styled from "styled-components";


export const ContentCartMenu = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 350px;
    height: 100%;
    background-color: #1576c1;
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;

    @media (max-width: 320px) {
        width: 100%;
    }

    @media (max-width: 375px) {
        width: 100%;
    }

    @media (max-width: 425px) {
        width: 100%;
    }
`

export const IconButton = styled.button`
    font-size: 16px;
    background-color: transparent;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TotalCart = styled.p`
    color: #fff;
    font-size: 18px;
    margin-bottom: 10px;
`

export const ButtonFinalizar = styled.button`
    width: 100%;
    height: 40px;
    background-color: #021e29;
    color: #fff;
    border: none;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 600;
    border-radius: 5px;
    margin-top: auto;
    margin-bottom: 30px;
`