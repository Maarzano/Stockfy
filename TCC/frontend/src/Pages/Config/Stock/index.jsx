import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Arrow from "../../../Assets/SVGs/Icons/Arrow.svg";
import { useProdutos } from '../../../Hooks/Produtos/useProdutos';
import SearchLoader from '../../../Components/Loaders/SearchLoader';
import SaveCancelBTN from '../../../Components/Buttons/SaveCancelBTN';
import Search2 from '../../../Components/Searchs/Search2';
// TODO transformar esse componente de item em reutilizável
const Stock = () => {
  const { produtos, loading, erro } = useProdutos([]);
  const [expandedItemId, setExpandedItemId] = useState(null); // isso tem que estar dentro do CardStockEmployeeCart
  const [busca, setBusca] = useState("");

  const produtosFiltrados = useMemo(() => {
    const termo = busca.toLowerCase();
    return produtos.filter((item) =>
      item.nomeItem.toLowerCase().includes(termo) ||
      item.descricao?.toLowerCase().includes(termo)
    );
  }, [busca, produtos]);

  const toggleExpand = (itemId) => {
    setExpandedItemId(prev => (prev === itemId ? null : itemId)); // dentro do componente
  };

  return (
    <Wrapper>
      <h2>Itens do estoque</h2>

      <WrapperSearch>
        <Search2
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar no estoque..."
        />
      </WrapperSearch>

      {loading && (
        <>
          <p>Carregando itens...</p>
          <SearchLoader />
        </>
      )}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}

      <div className="item-list"> {/* essa lógica provavelmente vai ter que mudar, porque o expand vai ser controlado por ele mesmo */}
        {produtosFiltrados.map((item) => {
          const isExpanded = expandedItemId === item.itemId;

          return (
            <div // isso provavelmente é o início do componente 
              key={item.itemId}
              className={`item-card ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleExpand(item.itemId)}
            >
              <div className="item-top">
                <div className="item-left">
                  <img
                    src={item.imagem === "string"
                      ? "https://cdn-icons-png.flaticon.com/512/8136/8136031.png"
                      : item.imagem}
                    alt={item.nomeItem}
                    className="item-image"
                  />
                  <div className="item-info">
                    <span className="item-name">{item.nomeItem}</span>
                    <span className="item-description">{item.descricao}</span>
                  </div>
                </div>
                <div className="item-right">
                  <span>Quantidade: {item.quantidade}</span>
                  <img
                    className={`img-Arrow ${isExpanded ? 'rotated' : ''}`}
                    src={Arrow}
                    alt="Expandir"
                  />
                </div>
              </div>

              <div className={`extra-content-wrapper ${isExpanded ? 'expanded' : ''}`}>
                <div className="extra-content">
                  <SaveCancelBTN type='edit' />
                  <SaveCancelBTN type='delete' />
                </div>
              </div>
            </div> // fim do componente provavel 
          );
        })}
        {!loading && produtosFiltrados.length === 0 && (
          <p style={{ color: 'red', textAlign: 'center' }}>Nenhum produto encontrado</p>
        )}
      </div>
    </Wrapper>
  );
};


const WrapperSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    width: 100%;
`

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

  .search-box {
    position: relative;
    margin-bottom: 20px;
  }

  .search-input {
    width: 500px;
    padding: 10px 15px 10px 50px;
    border: 1px solid wheat;
    border-radius: 9999px;
    outline: none;
    color: wheat;
  }

  .search-icon {
    position: absolute;
    width: 35px;
    top: 50%;
    left: 10px;
    transform: translateY(-50%);
  }

  .item-list {
    margin-bottom: 60px;
    color: wheat;
    text-transform: capitalize;
    font-size: 20px;
  }

  .item-card {
    background-color: #1a1a1a;
    border-radius: 20px;
    padding: 15px 20px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    overflow: hidden;
    cursor: default;

    &:hover {
      transform: scale(1.015);
    }
  }

  .item-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item-left {
    display: flex;
    align-items: center;
    gap: 15px;
  }

  .item-info {
    display: flex;
    flex-direction: column;
  }

  .item-name {
    font-weight: bold;
    font-size: 25px;
  }

  .item-description {
    font-size: 14px;
    color: wheat;
    margin-top: 4px;
  }

  .item-image {
    width: 60px;
    height: 60px;
    border-radius: 8px;
    object-fit: cover;
  }

  .item-right {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .img-Arrow {
    width: 20px;
    transition: transform 0.3s ease;
  }

  .img-Arrow.rotated {
    transform: rotate(180deg);
  }

  .extra-content-wrapper {
    overflow: hidden;
    max-height: 0;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.4s ease;
  }

  .extra-content-wrapper.expanded {
    max-height: 150px;
    opacity: 1;
  }

  .extra-content {
    padding-top: 15px;
    border-top: 1px solid #444;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
`;

export default Stock;
