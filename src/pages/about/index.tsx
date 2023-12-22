import React from "react";
import * as S from "./styles";
import { Button } from "../../components/button";

export const About = () => {
  return (
    <>
      <Button />
      <S.AboutContainer>
        <S.AboutTitle>Quem Somos</S.AboutTitle>
        <S.AboutContent>
          Bem-vindo à <strong>Market Eletronics</strong>, sua loja online
          dedicada a proporcionar a melhor experiência de compra em eletrônicos.
          Oferecemos uma ampla variedade de produtos de alta qualidade, desde
          gadgets inovadores até equipamentos eletrônicos de última geração.
        </S.AboutContent>
        <S.OurServices>
          <S.ServicesTitle>Nossos Destaques</S.ServicesTitle>
          <S.ServicesList>
            <li>Variedade de Eletrônicos de Qualidade</li>
            <li>Atendimento Personalizado</li>
            <li>Entrega Rápida e Confiável</li>
            <li>Suporte Técnico Especializado</li>
            <li>Ofertas e Promoções Exclusivas</li>
          </S.ServicesList>
        </S.OurServices>
        <S.CompanyValues>
          <S.ValuesTitle>Nossos Compromissos</S.ValuesTitle>
          <S.ValuesList>
            <li>Comprometimento com a Satisfação do Cliente</li>
            <li>Transparência e Confiança</li>
            <li>Inovação em Produtos Selecionados</li>
            <li>Foco em uma Experiência de Compra Memorável</li>
          </S.ValuesList>
        </S.CompanyValues>
      </S.AboutContainer>
    </>
  );
};
