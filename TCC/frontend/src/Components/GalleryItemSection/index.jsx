import styled from "styled-components";
import CardItem from "../Cards/CardItem";
import Search from "../Search";
import { useProdutos } from "../../Hooks/useProdutos";

const GalleryItenSection = () => {
    const { produtos, loading, erro } = useProdutos();

    if (erro) alert(`Erro: ${erro}`);

    return (
        <Wrapper>
            <p>Bem-vindo à tela de estoque. Nesta seção, é possível visualizar a quantidade atual de cada produto disponível na empresa. Este espaço foi desenvolvido para facilitar o acompanhamento dos itens armazenados e permitir o controle das saídas de produtos de forma prática e organizada. Mantenha-se sempre atualizado com as quantidades em tempo real e garanta uma gestão eficiente dos recursos.</p>
            <WrapperSearch>
                <Search />
            </WrapperSearch>
            <WrapperInside>
                {produtos.map((produto) => (
                    <CardItem 
                    key={produto.itemId}
                    imgURL={produto.imagem}
                    tittle={produto.nomeItem}
                    description={produto.descricao}
                    />
                ))}
                
            </WrapperInside>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 77px 150px 0px 150px;
    background-color: black;
    color: wheat;
    padding: 30px;
    height: 91.55vh;
`

const WrapperInside = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 20px 40px 40px 40px;
    background-color: #1a1a1a;
    border-radius: 15px;
    padding: 20px;
`

const WrapperSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: left;
`

export default GalleryItenSection;