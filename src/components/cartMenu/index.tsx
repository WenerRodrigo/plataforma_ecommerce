import React, { useState } from 'react';
import * as S from './styles';

type CartMenuProps = {
    onClose: () => void;
}

export const CartMenu: React.FC<CartMenuProps> = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    const closeMenu = () => {
        setIsVisible(!isVisible);
        onClose();
    }


    return (
        <S.ContentCartMenu>
            <S.IconButton onClick={closeMenu}><span className="material-symbols-outlined">close</span></S.IconButton>
            <S.TotalCart>Total R$: 100,00</S.TotalCart>
            <S.ButtonFinalizar>Finalizar compra</S.ButtonFinalizar>
        </S.ContentCartMenu>
    )
}