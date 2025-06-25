import React, { useState, useMemo, useEffect } from 'react';
import styled from 'styled-components';
import SearchLoader from '../../../Components/Loaders/SearchLoader';
import Search2 from '../../../Components/Searchs/Search2';
import CardStockEmployeeCart from '../../../Components/Cards/CardStockEmployeeCart';
import { deletarFuncionarioPorId } from '../../../Services/funcionarioService';
import { useFuncionarios } from '../../../Hooks/Funcionarios/useFuncionarios';

const Funcionarios = () => {
  const { funcionarios: funcionariosOriginais, loading, erro } = useFuncionarios();
  const [searchTerm, setSearchTerm] = useState('');
  const [funcionarios, setFuncionarios] = useState([]);

  useEffect(() => {
    if (funcionariosOriginais.length > 0) {
      setFuncionarios(funcionariosOriginais);
    }
  }, [funcionariosOriginais]);

  const deletarFuncionario = async (id) => {
    try {
      await deletarFuncionarioPorId(id);
      setFuncionarios((prev) => prev.filter((f) => f.funcionarioId !== id));
    } catch (error) {
      console.error('Erro ao deletar funcionário:', error);
      alert('Erro ao deletar funcionário. Verifique se o servidor está ativo.');
    }
  };

  const funcionariosFiltrados = useMemo(() => {
    return funcionarios.filter((funcionario) =>
      funcionario.nomeFuncionario.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, funcionarios]);

  return (
    <Wrapper>
      <h2>Funcionários</h2>
      <Search2
        placeholder="Nome do Funcionário"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading && (
        <>
          <p>Carregando funcionários...</p>
          <SearchLoader />
        </>
      )}

      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <div className="item-list">
        {funcionariosFiltrados.map((funcionario) => (
          <CardStockEmployeeCart
            key={funcionario.funcionarioId}
            type="employee"
            data={{
              nome: funcionario.nomeFuncionario,
              email: funcionario.email,
              imagem: funcionario.image,
              funcionarioId: funcionario.funcionarioId,
            }}
            onDelete={() => deletarFuncionario(funcionario.funcionarioId)}
          />
        ))}

        {!loading && funcionariosFiltrados.length === 0 && (
          <p style={{ color: 'red', textAlign: 'center' }}>
            Nenhum funcionário encontrado
          </p>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: black;
  color: wheat;
  padding: 100px 100px 30px 100px;
  max-width: 1650px;
  margin: auto;
  position: relative;
  min-height: 100vh;

  h2 {
    margin-bottom: 10px;
  }

  .item-list {
    margin-bottom: 60px;
    color: wheat;
    text-transform: capitalize;
    font-size: 20px;
  }
`;

export default Funcionarios;
