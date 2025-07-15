import styled from "styled-components";
import { placeholder } from "../../../Utils/verificandoImagem";

const CardItem = ({imgURL, tittle, description, quantity, onClick}) => {

    return (
        <Wrapper onClick={onClick}>
            <ImgDiv>
                <Img src= {placeholder(imgURL)} draggable={false}/>
            </ImgDiv>
            <Text>
                <Tittle title={tittle}>{tittle === undefined ? "Sem título" : tittle}</Tittle>
                <Descrição>{description === undefined ? "Sem descrição" : description}</Descrição>
                <Quantidade>
                  {quantity !== undefined ? `Qtd: ${quantity}` : ""}
                </Quantidade>
            </Text>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    width: 347.5px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #494949;
    margin: 10px;
    border-radius: 10px;
    padding: 15px;
    padding-bottom: 5px;
    transition: 0.5s all ease;

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
    }
`

const ImgDiv = styled.div`
    width: 100%;
    height: 70%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`

const Img = styled.img`
    object-fit: cover;
`

const Text = styled.div`
    width: 100%;
    height: 30%;
    overflow: hidden;
    line-height: 1;
    position: relative;
`

const Tittle = styled.h1`
    font-size: 34px;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Descrição = styled.p`
    margin-top: 5px;
    font-size: 15px;
`

const Quantidade = styled.div`
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 15px;
    color: wheat;
    font-weight: bold;
`


export default CardItem;