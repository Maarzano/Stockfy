import { useState } from "react";
import styled from "styled-components";

const CardHistory = ({ data }) => {
    const [expanded, setExpanded] = useState(false);

    const visibleItems = expanded ? data.items : data.items.slice(0, 3);
    const showExpand = data.items.length > 3;

    return (
        <Row>
            <Cell width="7%">{data.id}</Cell>

            <Cell width="20%" flex>
                <UserImage src={data.image} alt={data.name} />
                <UserName>{data.name}</UserName>
            </Cell>

            <Cell width="20%">
                <ActionType>{data.actionType}</ActionType>
            </Cell>

            <Cell width="40%">
                <InlineItemList>
                    {visibleItems.map((item, index) => (
                    <span key={index}>
                        {item.name} (x{item.quantity}){index < visibleItems.length - 1 ? ', ' : ''}
                    </span>
                    ))}

                    {showExpand && !expanded && (
                        <>
                            ...{" "}
                            <ExpandButton onClick={() => setExpanded(true)}>ver mais</ExpandButton>
                        </>
                    )}
                    {expanded && (
                        <ExpandButton onClick={() => setExpanded(false)}>ver menos</ExpandButton>
                    )}
                </InlineItemList>
            </Cell>

            <Cell width="10%">
                <DateTime>{data.dateTime}</DateTime>
            </Cell>
        </Row>
    );
};

const Row = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    padding: 15px;
    border-bottom: 1px solid #444;
    background-color: #2c2c2c;
    margin: auto;
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

const ActionType = styled.span`
    font-weight: bold;
    color: ${({ children }) =>
        children === "Retirada" ? "#4caf50" :
        children === "Devolução" ? "#2196f3" : "#fff"};
`;

const InlineItemList = styled.div`
    font-size: 0.9rem;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ExpandButton = styled.button`
    background: none;
    border: none;
    color: #1e90ff;
    cursor: pointer;
    font-size: 0.85rem;
    margin-left: 5px;

    &:hover {
        text-decoration: underline;
    }
`;

const DateTime = styled.span`
    font-size: 0.85rem;
`;

export default CardHistory;
