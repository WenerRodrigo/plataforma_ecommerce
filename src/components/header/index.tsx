import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

const logo = require('../../assets/convertize_logo.png')

export const Header = () => {
    return (
        <S.Content>
            <S.Logo src={logo} alt="Logo" />
            <S.Title>Convertize E-commerce</S.Title>

            <S.SubTitle>
                <S.NavLink to="">Pagina Inicial</S.NavLink>
                <S.NavLink to="">Produtos</S.NavLink>
                <S.NavLink to="">Quem Somos</S.NavLink>
                <S.NavLink to="">Seja um Parceiro</S.NavLink>
            </S.SubTitle>
        </S.Content>
    )
}