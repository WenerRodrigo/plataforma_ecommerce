import styled from "styled-components";

export const PartnerContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  margin-top: auto;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 320px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 100%;
  }

  @media (max-width: 375px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 80%;
  }

  @media (max-width: 425px) {
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 80%;
  }
`;

export const PartnerTitle = styled.h1`
  font-size: 35px;
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
  gap: 15px;

  @media (max-width: 320px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 12px;
    width: 100%;
  }

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 100%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    width: 100%;
  }
`;

export const BenefitItem = styled.div`
  flex: 1;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);

  @media (min-width: 320px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    margin-right: 18px;
    padding: 10px;
    flex-direction: column;
  }

  @media (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
  }

  @media (min-width: 425px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
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
