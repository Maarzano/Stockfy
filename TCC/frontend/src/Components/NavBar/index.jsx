import styled from "styled-components"
import CardPerfil from "../Cards/CardPerfil"
import Cart from "../../Assets/SVGs/Icons/icon-cart-black.svg"

const NavBar = () =>{
    
    
    return (
        <Wrapper>
            <WrapperCart>
                <CartImg src={Cart}/>
            </WrapperCart>
            <SystemName>Stockify</SystemName>
            <CardPerfil/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 4vw;
    background-color: #623bda;
    width: 100%;
`

const WrapperCart = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
`

const CartImg = styled.img`
    width: 55px;
    margin-left: 85px;
    cursor: pointer;
`

const SystemName = styled.h1`
    color: #FFF;
    font-size: 60px;
    padding: 10px;
    height: fit-content;
    cursor: pointer;
`

export default NavBar