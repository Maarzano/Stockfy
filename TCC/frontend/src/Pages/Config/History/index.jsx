import styled from "styled-components";
import CardHistory from "../../../Components/Cards/CardHistory";
import HeaderHistory from "../../../Components/Headers/HeaderHistory";
import Search from "../../../Components/Search";

const mockData = [
    {
        id: "#2632",
        image: "https://randomuser.me/api/portraits/women/1.jpg",
        name: "Alice Krejčová",
        payment: "Paid",
        timeRemaining: "49 min",
        type: "Collection",
        status: "Collected",
        total: "£14.00"
    },
    {
        id: "#2632",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        name: "Jurriaan van",
        payment: "Cash",
        timeRemaining: "07 min",
        type: "Delivery",
        status: "Cancelled",
        total: "£18.00"
    },
    // ... adicione mais dados conforme necessário
];

const History = () => {
    return (
        <Wrapper>
            <HeaderHistory />
            <WrapperSearch>
                <Search />
            </WrapperSearch>
            <Table>
                <HeaderRow>
                    <HeaderCell width="5%">Id</HeaderCell>
                    <HeaderCell width="20%">Name</HeaderCell>
                    <HeaderCell width="10%">Payment</HeaderCell>
                    <HeaderCell width="10%">Time Remaining</HeaderCell>
                    <HeaderCell width="10%">Type</HeaderCell>
                    <HeaderCell width="15%">Status</HeaderCell>
                    <HeaderCell width="10%">Total</HeaderCell>
                    <HeaderCell width="10%">Action</HeaderCell>
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
    justify-content: left;
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
`;

const HeaderCell = styled.div`
    width: ${({ width }) => width || 'auto'};
`;

export default History;
