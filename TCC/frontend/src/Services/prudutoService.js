import api from "./api";

export const buscarProdutos = async () => {
  try {
    const response = await api.get("/Items");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar produtos:", error);
    throw error;
  }
}
