import styled from "styled-components";
import CardItem from "../Cards/CardItem";
import Search from "../Search";

const GalleryItenSection = () => {
    return (
        <Wrapper>
            <p>Bem-vindo à tela de estoque. Nesta seção, é possível visualizar a quantidade atual de cada produto disponível na empresa. Este espaço foi desenvolvido para facilitar o acompanhamento dos itens armazenados e permitir o controle das saídas de produtos de forma prática e organizada. Mantenha-se sempre atualizado com as quantidades em tempo real e garanta uma gestão eficiente dos recursos.</p>
            <WrapperSearch>
                <Search />
            </WrapperSearch>
            <WrapperInside>
                
                <CardItem imgURL={"https://www.baip.com.br/image/cache/data/eftr/Img_ftr_rp_320401-580x580.PNG?version=20250514104840"} 
                    tittle="Martelo" description="martelo que usamos para tudo"/>
                <CardItem/>
                <CardItem/>
                <CardItem imgURL={"https://lojatexugo.cdn.magazord.com.br/img/2022/07/produto/2757/lampada-led-filamento-blumenau-4w-bivolt-a60-e27-2200k-luz-amarela.jpg?ims=800x800"} tittle={"Lâmpada"} description={"lampada para trocar se nescessário"}/>
                <CardItem/> {/* ainda vou arrumar isso e acessar via backend */}
                <CardItem/> {/* TODO */}
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