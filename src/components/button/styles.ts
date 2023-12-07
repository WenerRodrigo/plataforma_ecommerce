import { Link } from "react-router-dom";
import styled from "styled-components";


export const ButtonContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    background-color: #444;
    height: 65px;

    @media (max-width: 320px) {
        justify-content: center;
        width: 100%;
        padding: 10px;
    }

    @media (max-width: 375px) {
        justify-content: center;
        width: 100%;
        padding: 10px;
    }

    @media (max-width: 425px) {
        justify-content: center;
        width: 100%;
        padding: 10px;
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    background-color: transparent;
    color: #fff;
    width: 100%;
    border: none;
    cursor: pointer;
`

export const NavLink = styled(Link)`
    text-decoration: none;
`

export const TitleDescription = styled.span`
    display: flex;
    align-items: center;
    padding: 30px;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-left: 10px;
`

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    padding: 30px;
`

