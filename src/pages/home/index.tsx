import React, { useEffect, useState } from "react";
import { api } from "../../services/api";
import * as S from './styles';


export const Home = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchApi = () => {
        setIsLoading(true);
        api.get('/sites/MLB/search', {
            params: {
                q: 'celular',
            }
        }).then(response => {
            const data = response.data.results;
            setData(data);
        }).catch(error => {
            console.error(error);
        }).finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        fetchApi();
    }, [])

    if (isLoading) {
        return <S.Loanding>Carregando...</S.Loanding>
    }

    return (
        <>
            <S.Title>Conheça nossos Produtos</S.Title>
            <S.Content>
                <S.SearchInput type="text"
                    placeholder="Digite o nome do produto"
                />

                <S.ContentCard>
                    {data.map((item: any) => (
                        <S.Card key={item.id}>
                            <S.ProductTitle>{item.title}</S.ProductTitle>
                            <S.ImageCard src={item.thumbnail} alt={item.title} />
                            <S.Price>R$: {item.price}</S.Price>
                            <S.Button>+</S.Button>
                            <span>0</span>
                            <S.Button>-</S.Button>
                            <S.ButtonAddCart>Adicionar ao Carrinho</S.ButtonAddCart>
                        </S.Card>
                    ))}
                </S.ContentCard>
            </S.Content>
        </>
    )
}