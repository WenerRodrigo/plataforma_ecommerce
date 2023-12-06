import { Link } from "react-router-dom";
import styled from "styled-components";


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #444;


    @media (max-width: 320px) {
        flex-direction: column;
        padding: 12px;
        text-align: center;
    }

    @media (max-width: 375px) {
        flex-direction: column;
        padding: 12px;
        text-align: center;
    }

    @media (max-width: 425px) {
        flex-direction: column;
        padding: 12px;
        text-align: center;
    }
`

export const Logo = styled.img`
    display: flex;
    align-items: center;
    width: 80px;
    height: 80px;
    margin: 10px;
`

export const Title = styled.h1`
    color: #fff;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`

export const SubTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    @media (max-width: 320px) {
        margin-top: 10px;
        flex-direction: column;
    }

    @media (max-width: 375px) {
        margin-top: 10px;
        flex-direction: column;
    }

    @media (max-width: 425px) {
        margin-top: 10px;
        flex-direction: column;
    }
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    &:hover {
        color: #ccc;
    }
`