import React, { useState, useEffect, useRef, useContext } from "react";
import * as S from "./styles";
import { CartContext } from "../context";
import { CartItem } from "../cartItem";
import { Link } from "react-router-dom";

type CartMenuProps = {
  onClose: () => void;
};

export const CartMenu: React.FC<CartMenuProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && isVisible) {
        if (!containerRef.current.contains(event.target as Node)) {
          closeMenu();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  const closeMenu = () => {
    setIsVisible(false);
    onClose();
  };

  const handleItemClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const calculateTotal = () => {
    let total = 0;
    Object.keys(cartItems).forEach((itemId) => {
      const { product, quantity } = cartItems[itemId];
      total += parseFloat(product.price) * quantity;
    });
    return total.toFixed(2);
  };

  return isVisible ? (
    <S.ContentCartMenu ref={containerRef} onClick={handleItemClick}>
      <S.IconButton onClick={closeMenu}>
        <span className="material-symbols-outlined">close</span>
      </S.IconButton>
      {Object.keys(cartItems).map((itemId) => (
        <CartItem
          key={itemId}
          product={cartItems[itemId].product}
          quantity={cartItems[itemId].quantity}
        />
      ))}
      <S.TotalCart>Total: R$ {calculateTotal()}</S.TotalCart>
      <Link to="/checkout">
        <S.ButtonFinalizar>Finalizar Compra</S.ButtonFinalizar>
      </Link>
    </S.ContentCartMenu>
  ) : null;
};
