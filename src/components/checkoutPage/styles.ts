import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  margin: 0 auto;
`;

export const ContentButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const ButtonFinalizar = styled.button`
  width: 100%;
  height: 40px;
  background-color: #021e29;
  color: #fff;
  border: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  border-radius: 5px;
  margin-top: auto;
  margin-bottom: 30px;
`;

export const ButtonVoltar = styled.button`
  width: 100%;
  height: 40px;
  background-color: #fff;
  color: #021e29;
  border: none;
  cursor: pointer;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #021e29;
  border-radius: 5px;
  margin-top: auto;
  margin-bottom: 30px;
`;

export const PaymentOption = styled.div`
  padding: 10px;
  margin: 10px 0;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const PaymentOptionRadio = styled.div`
  margin-bottom: 10px;

  input {
    margin-right: 5px;
  }

  label {
    font-size: 16px;
    cursor: pointer;
  }
`;
