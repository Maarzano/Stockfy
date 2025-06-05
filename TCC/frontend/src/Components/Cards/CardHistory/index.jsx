import styled from "styled-components";

const CardHistory = ({ data }) => {
    return (
        <Row>
            <Cell width="5%">{data.id}</Cell>
            <Cell width="20%" flex>
                <UserImage src={data.image} />
                <UserName>{data.name}</UserName>
            </Cell>
            <Cell width="10%">{data.payment}</Cell>
            <Cell width="10%">{data.timeRemaining}</Cell>
            <Cell width="10%">{data.type}</Cell>
            <Cell width="15%">
                <Status status={data.status}>{data.status}</Status>
            </Cell>
            <Cell width="10%">{data.total}</Cell>
            <Cell width="10%">
            </Cell>
        </Row>
    );
};

const Row = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px;
    border-bottom: 1px solid #444;
    background-color: #2c2c2c;
`;

const Cell = styled.div`
    width: ${({ width }) => width || 'auto'};
    display: ${({ flex }) => (flex ? 'flex' : 'block')};
    align-items: center;
    gap: 10px;
`;

const UserImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
`;

const UserName = styled.span`
    font-weight: 500;
`;

const Status = styled.span`
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 0.85rem;
    color: ${({ status }) =>
        status === "Delivered" ? "#ffc107" :
        status === "Cancelled" ? "#f44336" :
        "#ccc"};
    background-color: ${({ status }) =>
        status === "Delivered" ? "#fff3cd" :
        status === "Cancelled" ? "#fdecea" :
        "#444"};
`;

const ActionButton = styled.button`
    background: none;
    border: none;
    color: white;
    cursor: pointer;
`;

export default CardHistory;
