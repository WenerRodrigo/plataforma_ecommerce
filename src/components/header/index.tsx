import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { Cart } from "../cart";
import { Home } from "../../pages/home";
import { Carrossel } from "../carrossel";

const logo = require("../../assets/icone.png");

export const Header = () => {
  return (
    <>
      <S.Content>
        <S.Title>
          Market
          <S.Logo src={logo} alt="Logo" />
          Eletronics
        </S.Title>
        <S.SubTitle>
          <S.NavLink to="/">Pagina Inicial</S.NavLink>
          <S.NavLink to="/products">Produtos</S.NavLink>
          <S.NavLink to="/about">Quem Somos</S.NavLink>
          <S.NavLink to="/partner">Seja um Parceiro</S.NavLink>
        </S.SubTitle>
        <Cart />
      </S.Content>
      <Carrossel />
      <Home />
    </>
  );
};
