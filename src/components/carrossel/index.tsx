import React, { useState, useEffect } from "react";
import * as S from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images = [
  require("../../assets/img.webp"),
  require("../../assets/logo_1.webp"),
  require("../../assets/logo_2.webp"),
  require("../../assets/logo_3.webp"),
];

export const Carrossel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <S.Container>
      <S.Content>
        <S.Arrowleft onClick={prevImage}>
          <IoIosArrowForward />
        </S.Arrowleft>
        <S.Logo
          src={images[currentImageIndex]}
          alt="Imagem Oferta"
        />
        <S.Arrowright onClick={nextImage}>
          <IoIosArrowBack />
        </S.Arrowright>
      </S.Content>
    </S.Container >
  );
};
