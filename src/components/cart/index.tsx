import React, { useState } from 'react';
import * as S from './styles';
import { useCart } from '../context';
import { CartMenu } from '../cartMenu';

const logo = require('../../assets/logo.png');

export const Cart = () => {
    const { cartItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toogleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    return (
        <S.ContentCart onClick={toogleMenu}>
            <img src={logo} alt="Logo Carrinho de compras"/>
            <span>{Object.keys(cartItems).length}</span>
            {isMenuOpen && <CartMenu onClose={closeMenu} />}
        </S.ContentCart>
    )
}