import styled from "styled-components";
import NavBar from "../../Components/Navs/NavBar";
import Subnav from "../../Components/Navs/Subnav";
import BackButton from "../../Components/Carting/BackButton";
import FuncionarioSelect from "../../Components/Carting/FuncionarioSelect";
import ActionButtons from "../../Components/Carting/ActionButtons";

const Cart = () => {
    return (
        <Wrapper>
            <NavBar/>
            <Content>
                <Header>
                    <BackButton />
                    <h1>Carrinho</h1>
                </Header>
                <FuncionarioSelect />
                <ActionButtons />
            </Content>
            <Subnav/>
        </Wrapper>
    );
};

export default Cart;

const Wrapper = styled.div`
    background-color: #1a1a1a;
`

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
