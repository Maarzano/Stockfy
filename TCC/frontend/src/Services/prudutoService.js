import api from "./api";

export const buscarProdutos = async () => {
    const response = await api.get("/Items");
    return response.data;
}