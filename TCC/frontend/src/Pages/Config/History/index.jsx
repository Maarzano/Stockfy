import styled from "styled-components";
import CardHistory from "../../../Components/Cards/CardHistory";
import HeaderHistory from "../../../Components/Headers/HeaderHistory";
import Search from "../../../Components/Searchs/Search";
import ExcelBTN from "../../../Components/Buttons/ExcelBTN";
import { useMovimentacao } from "../../../Hooks/Movimentacao/useMovimentacao";
import SearchLoader from "../../../Components/Loaders/SearchLoader";


const History = () => {

  const { loading, erro, data } = useMovimentacao();

    console.log(data);
    return (
        <Wrapper>
            <HeaderHistory />
            <WrapperSearch>
                <Search />
                <ExcelBTN data={data}/>
            </WrapperSearch>
            <Table>
                <HeaderRow>
                    <HeaderCell width="7%">ID</HeaderCell>
                    <HeaderCell width="20%">Nome</HeaderCell>
                    <HeaderCell width="20%">Ação</HeaderCell>
                    <HeaderCell width="40%">Itens</HeaderCell>
                    <HeaderCell width="10%">Data e hora</HeaderCell>
                </HeaderRow>


                {Array.isArray(data) && 
                
                data.map((item, index) => (
                  <CardHistory key={item.idMovimentacao || index} data={item} />
                ))}


                {loading && <SearchLoader/>}
                {erro && <p>{erro.message}</p>}
            </Table>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 1650px;
    margin: auto;
    background-color: black;
    color: white;
    height: 100%;
    min-height: 100vh;
    padding: 40px;
    padding-top: 90px;
`;

const WrapperSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Table = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
`;

const HeaderRow = styled.div`
    display: flex;
    background-color: #3a3a3a;
    padding: 10px 15px;
    font-weight: bold;
    width: 80%;
    margin: auto;
`;

const HeaderCell = styled.div`
    width: ${({ width }) => width || 'auto'};
`;

export default History;
