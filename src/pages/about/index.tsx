import React from 'react';
import * as S from './styles';
import { Button } from '../../components/button';

export const About = () => {
    return (
        <>
            <Button />
            <S.AboutContainer>
                <S.AboutTitle>Quem Somos</S.AboutTitle>
                <S.AboutContent>
                    Bem-vindo à <strong>Convertize E-commerce</strong>, sua parceira dedicada no desenvolvimento de sites e aplicativos de comércio eletrônico. Nós nos destacamos na criação de soluções completas, abrangendo desde o design até o suporte técnico, para garantir que sua presença online seja bem-sucedida.
                </S.AboutContent>
                <S.OurServices>
                    <S.ServicesTitle>Nossos Serviços</S.ServicesTitle>
                    <S.ServicesList>
                        <li>Desenvolvimento de Sites e Aplicativos</li>
                        <li>Personalização e Design Exclusivo</li>
                        <li>Integração de Pagamentos e Sistemas</li>
                        <li>Assistência Técnica e Suporte Contínuo</li>
                        <li>Estratégias de Marketing Digital</li>
                    </S.ServicesList>
                </S.OurServices>
                <S.CompanyValues>
                    <S.ValuesTitle>Nossos Valores</S.ValuesTitle>
                    <S.ValuesList>
                        <li>Compromisso com a Qualidade</li>
                        <li>Transparência e Comunicação Clara</li>
                        <li>Inovação e Adaptação Constante</li>
                        <li>Foco no Sucesso do Cliente</li>
                    </S.ValuesList>
                </S.CompanyValues>
            </S.AboutContainer>
        </>
    );
};

