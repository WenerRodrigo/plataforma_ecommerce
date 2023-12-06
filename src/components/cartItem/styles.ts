import styled from "styled-components";


export const CartItem = styled.div`
    display: flex;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    padding: 10px;
    background-color: #f5f5f5;

    &.in-cart {
        background-color: #fff;
    }
`

export const CartItemImg = styled.img`
    max-width: 50px;
    max-height: 50px;
    margin-right: 15px;
`

export const CartItemInfo = styled.div`
    flex-grow: 1;
`

export const CartItemTitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    margin: 0;
`

export const CartItemQuantity = styled.p`
    margin: 5px 0;
`

export const CartItemPrice = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    margin: 0;
`

export const ButtonCart = styled.button`
    background-color: #eee;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #ddd;
    }
`

export const ButtonRemove = styled.button`
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 6px 10px;
    margin: 0 10px;
    cursor: pointer;
`