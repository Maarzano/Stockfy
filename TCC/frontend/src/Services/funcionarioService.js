import api from './api';

export const getFuncionarios = async () => {
  try {
    const response = await api.get('Funcionarios');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar funcionários:', error);
    throw error;
  }
};