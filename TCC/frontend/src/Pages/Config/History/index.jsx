import styled from "styled-components";
import CardHistory from "../../../Components/Cards/CardHistory";
import HeaderHistory from "../../../Components/Headers/HeaderHistory";
import Search from "../../../Components/Search";
import ExcelBTN from "../../../Components/Buttons/ExcelBTN";

const mockData = [
  {
    id: "#001",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Alice Krejčová",
    actionType: "Retirada",
    items: [
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Fonte ATX", quantity: 1 },
      { name: "Teclado", quantity: 1 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
    ],
    dateTime: "2025-06-05 14:32"
  },
  {
    id: "#002",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Jurriaan van",
    actionType: "Devolução",
    items: [
      { name: 'Monitor 24"', quantity: 1 },
      { name: "Mouse Logitech", quantity: 2 }
    ],
    dateTime: "2025-06-05 10:47"
  }
];



const History = () => {
    return (
        <Wrapper>
            <HeaderHistory />
            <WrapperSearch>
                <Search />
                <ExcelBTN/>
            </WrapperSearch>
            <Table>
                <HeaderRow>
                    <HeaderCell width="7%">ID</HeaderCell>
                    <HeaderCell width="20%">Nome</HeaderCell>
                    <HeaderCell width="20%">Ação</HeaderCell>
                    <HeaderCell width="40%">Itens</HeaderCell>
                    <HeaderCell width="10%">Data e hora</HeaderCell>
                </HeaderRow>
                {mockData.map((item, index) => (
                    <CardHistory key={index} data={item} />
                ))}
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
