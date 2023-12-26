import styled from "styled-components"

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
    font-size: 15px;
    outline: none;

    @media (max-width: 320px) {
        width: 80%;
    }

    @media (max-width: 375px) {
        width: 80%;
    }

    @media (max-width: 425px) {
        width: 80%;
    }

`

export const ContentCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin: 8px;
    width: 100%;
    margin-bottom: 10px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    margin: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    width: 250px;
    height: 400px;

    &:hover {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
`

export const ProductTitle = styled.h4`
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 8px;
    margin-top: auto;
`

export const ImageCard = styled.img`
    width: 40%;
    max-width: 100%;
    height: auto;
    margin-top: auto;
`

export const Price = styled.p`
    font-size: 14px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-top: auto;
`

export const OriginalPrice = styled.p`
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    text-decoration: line-through;
    color: #999;
    margin-top: auto;
`

export const SaleBadge = styled.span`
     display: block;
     text-align: center;
     font-size: 14px;
     color: #e44d36;
 `

export const Installments = styled.p`
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #12a006;
    margin-top: auto;
`

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: auto;
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%; 
    height: 35px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    margin: 0 10px;
`

export const ButtonComprar = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 35px;
    border-radius: 4px;
    background-color: #0b7904;
    color: #FFF;
    border: none;
    cursor: pointer;
    margin-top: auto;
`

export const ButtonAddCart = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 35px;
    border-radius: 4px;
    background-color: #298fb7;
    color: #FFF;
    border: none;
    cursor: pointer;
    margin-top: auto;

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


