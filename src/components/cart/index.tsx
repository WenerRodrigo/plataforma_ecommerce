import React, { useState } from 'react';
import * as S from './styles';
import { CartMenu } from '../cartMenu';

const logo = require('../../assets/logo.png');

export const Cart = () => {
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
            <span>0</span>
            {isMenuOpen && <CartMenu onClose={closeMenu} />}
        </S.ContentCart>
    )
}