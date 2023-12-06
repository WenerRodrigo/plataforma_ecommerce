import styled from "styled-components";

export const PartnerContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  margin-top: 40px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

export const PartnerTitle = styled.h1`
  font-size: 40px;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #333;
  margin-bottom: 20px;
`;

export const PartnerDescription = styled.p`
  font-size: 1.2em;
  color: #666;
  margin-bottom: 30px;
`;

export const PartnerBenefits = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
`;

export const BenefitItem = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 4px;
    border: none;
    background-color: #298fb7;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    `;
