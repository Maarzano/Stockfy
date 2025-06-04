import styled from "styled-components";
import CardHistory from "../../../Components/Cards/CardHistory";
import HeaderHistory from "../../../Components/Headers/HeaderHistory";
import Search from "../../../Components/Search";

const History = () => {
    return (
        <Wrapper>
            <HeaderHistory/>
            <WrapperSearch>
                <Search/>
            </WrapperSearch>
            <AreaCardHistory>
                <CardHistory/>
            </AreaCardHistory>
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
    padding-top: 90px;
`

const WrapperSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: left;
    margin-bottom: 20px;
`

const AreaCardHistory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 80%;
    margin: auto;
`

export default History;