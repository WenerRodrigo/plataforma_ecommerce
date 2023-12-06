import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin: 8px;
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 28px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
`

export const SearchInput = styled.input`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-bottom: 16px;
    width: 50%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
`

export const ContentCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin: 8px;
    width: 100%;
    margin-bottom: 16px;
`

export const Card = styled.div`
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 16px;
    margin: 8px;
    width: 200px;
`

export const ProductTitle = styled.h4`
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export const ImageCard = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;
    width: 80%;
    max-width: 100%;
    height: auto;
`

export const Price = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    height: 50px;
`

export const Button = styled.button`
    width: 25%;
    height: 35px;
    border-radius: 4px;
    margin: 10px 20px;
    border: none;
    cursor: pointer;
`

export const ButtonAddCart = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 35px;
    border-radius: 4px;
    background-color: #298fb7;
    color: #FFF;
    border: none;
    cursor: pointer;

    &:hover {
        background-color: #1c6a8c;
    }
`

export const Loanding = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    width: 100%;
`