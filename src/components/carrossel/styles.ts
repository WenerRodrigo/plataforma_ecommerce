import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;

  @media (max-width: 320px) {
    width: 100%;
    height: 25vh;
  }

  @media (max-width: 375px) {
    width: 100%;
    height: 25vh;
  }

  @media (max-width: 425px) {
    width: 100%;
    height: 25vh;
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Arrowright = styled.div`
  position: absolute;
  left: 0;
  width: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
  font-size: 40px;

  @media (max-width: 320px) {
    width: 10%;
  }

  @media (max-width: 375px) {
    width: 10%;
  }

  @media (max-width: 425px) {
    width: 10%;
  }

  @media (max-width: 768px) {
    width: 10%;
  }
`;

export const Arrowleft = styled.div`
  position: absolute;
  right: 0;
  width: 3%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #000;
  font-size: 40px;

  @media (max-width: 320px) {
    width: 10%;
  }

  @media (max-width: 375px) {
    width: 10%;
  }

  @media (max-width: 425px) {
    width: 10%;
  }

  @media (max-width: 768px) {
    width: 10%;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
