import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from "./styles";
import { useCart } from "../../components/context";

export const Home = () => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [itemQuantities, setItemQuantities] = useState<{
    [key: string]: number;
  }>({});
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (searchQuery.trim() !== "") {
        fetchApi(searchQuery);
      } else {
        fetchApi("eletronicos");
      }
    }, 1000);

    return () => clearTimeout(delayTimer);
  }, [searchQuery]);

  const fetchApi = async (query: string) => {
    setIsLoading(true);

    api
      .get("/sites/MLB/search", {
        params: {
          q: query,
        },
      })
      .then((response) => {
        const searchData = response.data.results;
        const initialQuantities: { [key: string]: number } = {};
        searchData.forEach((item: any) => {
          initialQuantities[item.id] = 0;
        });
        setItemQuantities(initialQuantities);
        setData(searchData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <S.Loanding>Carregando...</S.Loanding>;
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleQuantityChange = (itemId: string, change: number) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max(0, prevQuantities[itemId] + change),
    }));
  };

  const handleAddToCart = (item: any) => {
    addToCart(item, itemQuantities[item.id]);
    handleQuantityChange(item.id, 0);
  };

  const handleRemoveFromCart = (itemId: string) => {
    handleQuantityChange(itemId, -1);
  };

  const calculateDiscountPercentage = (
    originalPrice: number,
    salePrice: number
  ) => {
    if (originalPrice && salePrice) {
      if (originalPrice === salePrice) {
        return 0;
      }

      const discount = ((originalPrice - salePrice) / originalPrice) * 100;
      return discount.toFixed(0);
    }
    return 0;
  };

  return (
    <>
      <S.Title>Conheça nossos Produtos</S.Title>
      <S.Content>
        <S.SearchInput
          type="text"
          placeholder="Buscar produtos, marcas e muito mais..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <S.ContentCard>
          {data.map((item: any) => (
            <S.Card key={item.id}>
              <S.ProductTitle>{item.title}</S.ProductTitle>
              <S.ImageCard src={item.thumbnail} alt={item.title} />
              <S.Price>
                R$:{" "}
                {item.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </S.Price>
              {item.original_price && (
                <>
                  <S.OriginalPrice>
                    R$:{" "}
                    {item.original_price.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </S.OriginalPrice>
                  <S.SaleBadge>
                    {calculateDiscountPercentage(
                      item.original_price,
                      item.price
                    )}
                    % OFF
                  </S.SaleBadge>
                </>
              )}
              {item.installments && (
                <S.Installments>
                  em 12x de R$:{" "}
                  {item.installments.amount.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </S.Installments>
              )}
              <S.ButtonContainer>
                <S.Button onClick={() => handleQuantityChange(item.id, 1)}>
                  +
                </S.Button>
                <span>{itemQuantities[item.id]}</span>
                <S.Button onClick={() => handleRemoveFromCart(item.id)}>
                  -
                </S.Button>
              </S.ButtonContainer>
              <S.ButtonAddCart onClick={() => handleAddToCart(item)}>
                Adicionar ao Carrinho
              </S.ButtonAddCart>
            </S.Card>
          ))}
        </S.ContentCard>
      </S.Content>
    </>
  );
};
