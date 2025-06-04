import styled from "styled-components";
import CardHistory from "../../../Components/Cards/CardHistory";

const History = () => {
    return (
        <Wrapper>
            <CardHistory/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 1650px;
    margin: auto;
    background-color: black;
    color: white;
    height: 100%;
    min-height: 100vh;
    padding: 40px;
    padding-top: 100px;
`

export default History;