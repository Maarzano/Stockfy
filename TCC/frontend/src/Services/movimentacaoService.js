import api from "./api"

export const buscarMovimentacao = async () => {
    try {
        const response = await api.get("movimentacoes");
        return response;
    }catch (e){
        console.error("Ocorreu um erro:", e);
        throw e;
    }
}

export const CriarMovimentacao = async (data) => {
    try {
        const response = await api.post("movimentacoes", data);
        return response.status;
    } catch (e){
        console.error("Erro ao tentar criar uma movitentação: ", e);
    }
}