import React from "react";
import * as S from './styles';

const logo = require('../../assets/convertize_logo.png');


export const Button = () => {
    return (
        <S.ButtonContent>
            <S.NavLink to="/">
                <S.Button><span className="material-symbols-outlined">
                    arrow_back_ios
                </span></S.Button>
            </S.NavLink>
            <S.Logo src={logo} alt="Logo Empresa" />
            <S.TitleDescription>Convertize E-commerce</S.TitleDescription>
        </S.ButtonContent>
    )
}