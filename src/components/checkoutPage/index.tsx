import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./styles";
import { CartContext } from "../context";
import { CartItem } from "../cartItem";

// type Product = {
//   thumbnail: string;
//   title: string;
//   price: string;
// };

export const CheckoutPage = () => {
  const { cartItems } = useContext(CartContext);
  const [selectedPaymentOption, setSelectedPaymentOption] =
    useState<string>("");
  const [installments, setInstallments] = useState<number>(1);

  const calculateTotal = (): number => {
    let total: number = 0;

    Object.keys(cartItems).forEach((itemId) => {
      const { product, quantity } = cartItems[itemId];
      total += parseFloat(product.price) * quantity;
    });

    if (selectedPaymentOption === "debito") {
    } else if (selectedPaymentOption === "credito") {
      total *= 1.017;
    }

    return total;
  };

  const handlePaymentOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentOption(event.target.value);
    setInstallments(1);
  };

  const handleInstallmentsChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInstallments(Number(event.target.value));
  };

  const renderPaymentDescription = (): React.ReactNode => {
    if (selectedPaymentOption === "credito") {
      const total = calculateTotal();

      return (
        <>
          <p>Parcelamento em até 12 vezes:</p>
          <select value={installments} onChange={handleInstallmentsChange}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value) => {
              let interestRate = 1.017;
              if (value > 5) {
                interestRate = 1.08;
              }

              const installmentValue = (total / value) * interestRate;
              return (
                <option key={value} value={value}>
                  {value}x de R$ {installmentValue.toFixed(2)}
                </option>
              );
            })}
          </select>
        </>
      );
    }

    return null;
  };

  const total = calculateTotal();

  return (
    <S.Container>
      <h2>Finalizar Compra</h2>

      {Object.keys(cartItems).map((itemId) => (
        <CartItem
          key={itemId}
          product={cartItems[itemId].product}
          quantity={cartItems[itemId].quantity}
        />
      ))}

      <h3>Total: R$ {total.toFixed(2)}</h3>

      <div>
        <h3>Opções de Pagamento</h3>
        <S.PaymentOptionRadio>
          <input
            type="radio"
            id="pix"
            name="paymentOption"
            value="pix"
            checked={selectedPaymentOption === "pix"}
            onChange={handlePaymentOptionChange}
          />
          <label htmlFor="pix">Pix</label>
        </S.PaymentOptionRadio>

        <S.PaymentOptionRadio>
          <input
            type="radio"
            id="credito"
            name="paymentOption"
            value="credito"
            checked={selectedPaymentOption === "credito"}
            onChange={handlePaymentOptionChange}
          />
          <label htmlFor="credito">Cartão de Crédito</label>
          {renderPaymentDescription()}
        </S.PaymentOptionRadio>

        <S.PaymentOptionRadio>
          <input
            type="radio"
            id="debito"
            name="paymentOption"
            value="debito"
            checked={selectedPaymentOption === "debito"}
            onChange={handlePaymentOptionChange}
          />
          <label htmlFor="debito">Cartão de Débito</label>
        </S.PaymentOptionRadio>
      </div>

      <S.ContentButton>
        <Link to="/">
          <S.ButtonVoltar>Continuar comprando</S.ButtonVoltar>
        </Link>
        <Link to="/checkout/success">
          <S.ButtonFinalizar>Finalizar Compra</S.ButtonFinalizar>
        </Link>
      </S.ContentButton>
    </S.Container>
  );
};
