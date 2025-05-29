import styled from "styled-components";
import CardItem from "../Cards/CardItem";
import Search from "../Search";
import { useProdutos } from "../../Hooks/useProdutos";
import SearchLoader from "../Loaders/SearchLoader";

const GalleryItenSection = () => {
    const { produtos, loading, erro } = useProdutos();

    // if (erro) alert(`Não foi possível se conectar com o servidor: ${erro}`);

    return (
        <Wrapper>
            <p>Bem-vindo à tela de estoque. Nesta seção, é possível visualizar a quantidade atual de cada produto disponível na empresa. Este espaço foi desenvolvido para facilitar o acompanhamento dos itens armazenados e permitir o controle das saídas de produtos de forma prática e organizada. Mantenha-se sempre atualizado com as quantidades em tempo real e garanta uma gestão eficiente dos recursos.</p>
            <WrapperSearch>
                <Search />
            </WrapperSearch>
            <WrapperInside>
            { loading && (<SearchLoader/>) }
            { erro && (<ErrorMessage> Erro ao acessar o servidor</ErrorMessage>)}
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
    margin: 0px 150px 0px 150px;
    background-color: black;
    color: wheat;
    padding: 100px 30px 30px 30px;
    height: 100%;
`

const WrapperInside = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 40px 40px 40px;
    background-color: #1a1a1a;
    border-radius: 15px;
    min-height: 67vh;
    padding: 20px;
`

const WrapperSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: left;
`

const ErrorMessage = styled.p`
    color: red;
    text-align: center;
    width: 100%;
`

export default GalleryItenSection;