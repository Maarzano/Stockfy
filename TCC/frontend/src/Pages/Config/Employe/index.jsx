import React, { useState } from 'react';
import styled from 'styled-components';
import { useFuncionarios } from '../../../Hooks/Funcionarios/useFuncionarios';
import SearchLoader from '../../../Components/Loaders/SearchLoader';
import Search2 from '../../../Components/Searchs/Search2';
import CardStockEmployeeCart from '../../../Components/Cards/CardStockEmployeeCart';

const Funcionarios = () => {
  const { funcionarios, loading, erro } = useFuncionarios();
  const [searchTerm, setSearchTerm] = useState('');

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
        {funcionarios
          .filter((funcionario) =>
            funcionario.nomeFuncionario.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((funcionario) => {
            console.log(funcionario);
            return (
            <CardStockEmployeeCart
              key={funcionario.funcionarioId}
              type="employee"
              data={{
                nome: funcionario.nomeFuncionario,
                email: funcionario.email,
                imagem: funcionario.image,
                funcionarioId: funcionario.funcionarioId,
            }}
            />
          )})}
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
