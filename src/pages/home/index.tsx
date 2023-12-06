import React, { useEffect, useState } from "react";
import { api } from "../../services/api";


export const Home = () => {
    const [data, setData] = useState<any>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchApi = () => {
        setIsLoading(true);
        api.get('/sites/MLB/search' , {
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

    if(isLoading) {
        return <h3>Carregando...</h3>
    }

    return (
        <div>
            <h1>Conheça nossos Produtos</h1>

            <input type="text"
                placeholder="Digite o nome do produto"
            />

            <div>
                {data.map((item: any) => (
                    <div key={item.id}>
                        <h4>{item.title}</h4>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>R$: {item.price}</p>
                        <button>+</button>
                        <button>-</button>
                    </div>
                ))}
            </div>
        </div>
    )
}