import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';
import { Cart } from '../cart';

const logo = require('../../assets/convertize_logo.png')

export const Header = () => {
    return (
        <S.Content>
            <S.Logo src={logo} alt="Logo" />
            <S.Title>Convertize E-commerce</S.Title>

            <S.SubTitle>
                <S.NavLink to="/">Pagina Inicial</S.NavLink>
                <S.NavLink to="/products">Produtos</S.NavLink>
                <S.NavLink to="/about">Quem Somos</S.NavLink>
                <S.NavLink to="/partner">Seja um Parceiro</S.NavLink>
            </S.SubTitle>
            <Cart />
        </S.Content>
    )
}