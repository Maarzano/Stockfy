import { useState } from "react";
import styled from "styled-components";
import NavBar from "../../Components/Navs/NavBar";
import Subnav from "../../Components/Navs/Subnav";
import BackButton from "../../Components/Carting/BackButton";
import ActionButtons from "../../Components/Carting/ActionButtons";
import CartItemList from "../../Components/Carting/CartItemList";
import Search2 from "../../Components/Searchs/Search2/index.jsx";

const Wrapper = styled.div`
    background-color: #1a1a1a;
`;

const Content = styled.div`
    margin: 77px 150px 0px 150px;
    padding: 30px;
    color: wheat;
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

const Status = styled.p`
    margin-top: 20px;
    font-size: 16px;
    color: #a5a5a5;
`;

const Cart = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [ultimaAcao, setUltimaAcao] = useState(null);
    const handleAcaoConfirmada = (tipoAcao, responsavel) => {
        setUltimaAcao({ tipo: tipoAcao, responsavel });
        alert(`Ação confirmada na tela principal: ${tipoAcao} por ${responsavel}`);
    };
    return (
        <Wrapper>
            <NavBar />
            <Content>
                <Header>
                    <BackButton />
                    <h1>Carrinho</h1>
                </Header>
                <Search2
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Pesquisar item no carrinho..."
                />
                <CartItemList searchTerm={searchTerm} />
                <ActionButtons onActionConfirmed={handleAcaoConfirmada} />
                {ultimaAcao && (
                    <Status>
                        Última ação: <strong>{ultimaAcao.tipo}</strong> por <strong>{ultimaAcao.responsavel}</strong>
                    </Status>
                )}
            </Content>
            <Subnav />
        </Wrapper>
    );
};

export default Cart;