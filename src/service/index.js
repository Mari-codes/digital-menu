import {produtos} from "../data/data_produtos";


export const searchProducts = (text) => {
    return produtos.filter(
        (produto) =>
            produto.nome.toLowerCase().includes(text.toLowerCase()) ||
            produto.descricao.toLowerCase().includes(text.toLowerCase())
    );
};

export const filterByCategory = (category) => {
    return produtos.filter((produto) => produto.categoria === category);
};