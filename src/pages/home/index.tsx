import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from './styles';



export const Home = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [itemQuantities, setItemQuantities] = useState<{ [key: string]: number }>({});


    useEffect(() => {
        const delayTimer = setTimeout(() => {
            if (searchQuery.trim() !== '') {
                fetchApi(searchQuery);
            } else {
                fetchApi('eletronicos');
            }
        }, 1000);

        return () => clearTimeout(delayTimer);
    }, [searchQuery]);

    const fetchApi = (query: string) => {
        setIsLoading(true);
        api.get('/sites/MLB/search', {
            params: {
                q: query,
            }
        }).then(response => {
            const searchData = response.data.results;
            const initialQuantities: { [key: string]: number } = {};
            searchData.forEach((item: any) => {
                initialQuantities[item.id] = 0;
            });
            setItemQuantities(initialQuantities);
            setData(searchData);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    if (isLoading) {
        return <S.Loanding>Carregando...</S.Loanding>
    }

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    const calculateDiscountPercentage = (originalPrice: number, salePrice: number) => {
        if (originalPrice && salePrice) {
            if (originalPrice === salePrice) {
                return 0;
            }

            const discount = Math.min(1, salePrice / originalPrice) * 100;
            return discount.toFixed(0); 
        }
        return 0;
    }

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
                            <S.Price>R$: {item.price}</S.Price>
                            {item.original_price && (
                                <>
                                    <S.OriginalPrice>R$: {item.original_price}</S.OriginalPrice>
                                    <S.SaleBadge>{calculateDiscountPercentage(item.original_price, item.price)}% OFF</S.SaleBadge>
                                </>
                            )}
                            {item.installments && (
                                <S.Installments>em 12x de R$: {item.installments.amount}</S.Installments>
                            )}
                            <S.ButtonContainer>
                                <S.Button>+</S.Button>
                                <span>0</span>
                                <S.Button>-</S.Button>
                            </S.ButtonContainer>
                            {/* <S.ButtonComprar>Comprar</S.ButtonComprar> */}
                            <S.ButtonAddCart>Adicionar ao Carrinho</S.ButtonAddCart>
                        </S.Card>
                    ))}
                </S.ContentCard>
            </S.Content>
        </>
    )
}