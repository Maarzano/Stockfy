import styled from "styled-components";
import CardItem from "../Cards/CardItem";
import { useProdutos } from "../../Hooks/Produtos/useProdutos";
import SearchLoader from "../Loaders/SearchLoader";
import Search2 from "../Searchs/Search2";

const GalleryItenSection = () => {
    const { produtos, loading, erro } = useProdutos();

    return (
        <Wrapper>
            <p>Bem-vindo à tela de estoque. Nesta seção, é possível visualizar a quantidade atual de cada produto disponível na empresa. Este espaço foi desenvolvido para facilitar o acompanhamento dos itens armazenados e permitir o controle das saídas de produtos de forma prática e organizada. Mantenha-se sempre atualizado com as quantidades em tempo real e garanta uma gestão eficiente dos recursos.</p>
            <WrapperSearch>
                <Search2 />
            </WrapperSearch>
            <WrapperInside>
            { loading && (<SearchLoader/>) }
            { erro && (<ErrorMessage> Erro ao buscar itens</ErrorMessage>)}
                { produtos.map((produto) => (
                    <CardItem 
                    key={produto.itemId}
                    imgURL={produto.imagem}
                    tittle={produto.nomeItem}
                    description={produto.descricao}
                    />
                )) }
                
            </WrapperInside>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 1650px;
    background-color: black;
    color: wheat;
    padding: 100px 30px 30px 30px;
    min-height: 100vh;
`

const WrapperInside = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 0px 40px 40px 40px;
    background-color: #1a1a1a;
    border-radius: 15px;
    min-height: 65vh;
    padding: 20px;
`

const WrapperSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    width: 100%;
`

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
    width: 100%;
`

export default GalleryItenSection;