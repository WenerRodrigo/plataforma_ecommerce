import { Link } from "react-router-dom";
import styled from "styled-components";


export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #444;
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