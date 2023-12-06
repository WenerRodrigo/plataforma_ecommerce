import React, { useState } from 'react';
import * as S from './styles';
import { useCart } from '../context';

type Product = {
    thumbnail: string;
    title: string;
    price: string;
};

type CartItemProps = {
    product: Product;
    quantity: number;
};


export const CartItem: React.FC<CartItemProps> = ({ product, quantity }) => {
    const { addToCart } = useCart();
    const [itemQuantity, setItemQuantity] = useState(quantity);

    const handleAddItem = () => {
        setItemQuantity(itemQuantity + 1);
        addToCart(product, 1);
    };

    const handleRemoveItem = () => {
        if (itemQuantity > 1) {
            setItemQuantity(itemQuantity - 1);
            addToCart(product, -1);
        }
    };

    const handleRemoveQuantity = () => {
        setItemQuantity(0);
        addToCart(product, -itemQuantity);
    };

    return (
        <S.CartItem>
            <S.CartItemImg src={product.thumbnail} alt={product.title} />
            <S.CartItemInfo>
                <S.CartItemTitle>{product.title}</S.CartItemTitle>
                <S.CartItemQuantity>{itemQuantity} x</S.CartItemQuantity>
                <S.CartItemPrice>R$ {product.price}</S.CartItemPrice>
                <S.ButtonCart onClick={handleAddItem}>+</S.ButtonCart>
                <S.ButtonCart onClick={handleRemoveItem}>-</S.ButtonCart>
                <S.ButtonRemove onClick={handleRemoveQuantity}>Remover</S.ButtonRemove>
            </S.CartItemInfo>
        </S.CartItem>
    );
};

