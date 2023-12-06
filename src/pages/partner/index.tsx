import React from "react";
import { Button } from "../../components/bottun";
import * as S from './styles';

export const Partner = () => {

    const handleButtonClick = () => {
        alert("Aguarde que em breve entraremos em contato!");
    }

    return (
        <>
        <Button />
            <S.PartnerContainer>
                <S.PartnerTitle>Seja um Parceiro</S.PartnerTitle>
                <S.PartnerDescription>
                    Junte-se a nós e torne-se um parceiro incrível! Tenha acesso a benefícios
                    exclusivos e faça parte da nossa comunidade.
                </S.PartnerDescription>
                <S.PartnerBenefits>
                    <S.BenefitItem>
                        <div>🎉</div>
                        <h3>Bônus Exclusivos</h3>
                        <p>Receba bônus especiais ao atingir metas mensais.</p>
                    </S.BenefitItem>
                    <S.BenefitItem>
                        <div>🚀</div>
                        <h3>Destaque no Site</h3>
                        <p>Apareça em destaque na nossa página principal.</p>
                    </S.BenefitItem>
                    <S.BenefitItem>
                        <div>🤝</div>
                        <h3>Comunidade Exclusiva</h3>
                        <p>Participe de uma comunidade exclusiva de parceiros.</p>
                    </S.BenefitItem>
                </S.PartnerBenefits>
                <S.Button onClick={handleButtonClick}>Quero ser um Parceiro</S.Button>
            </S.PartnerContainer>
        </>
    );
}