import api from "./api";

export const buscarUsuarios = async () => {
    try {
        const response = await api.get("/Usuarios");
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar usuarios:", error);
        throw error;
    }
}

export const criarUsuario = async (info) => {
    try {
        const response = await api.post("/Usuarios", info);
        return response;
    } catch(e){
        console.error("Erro ao criar usuario", e);
        throw e;
    }
}

export const logarUsuario = async (info) => {
    try {
        const response = await api.post("/auth/login", info);
        const { token, usuario } = response.data;
        localStorage.setItem("token", token);
        localStorage.setItem("usuario", JSON.stringify(usuario));
        return token;
    } catch (e) {
        console.error(e);
        throw e;
    }
};

