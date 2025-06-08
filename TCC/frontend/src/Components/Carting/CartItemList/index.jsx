// Components/Carting/CartItemList/index.jsx
import styled from "styled-components";
import TrashIcon from "../../../Assets/SVGs/Icons/Trash.svg";

const CartItemList = ({ searchTerm }) => {
    const items = [
        { id: 1, nome: "Braçadeira", quantidade: 2 },
        { id: 2, nome: "Martelo", quantidade: 1 },
        { id: 3, nome: "Machado", quantidade: 3 },
        { id: 4, nome: "Roblox", quantidade: 2 },
        { id: 5, nome: "Regua", quantidade: 3 },
        { id: 6, nome: "Vassoura", quantidade: 3 },
        { id: 7, nome: "Acabou criatividade", quantidade: 3 },
    ];

    const filteredItems = items.filter(item =>
        item.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleDelete = (id) => {
        alert(`Remover item com ID: ${id}`);
    };

    return (
        <List>
            {filteredItems.map((item) => (
                <Item key={item.id}>
                    <Image />
                    <Info>
                        <Nome>{item.nome}</Nome>
                        <Quantidade>Quantidade: {item.quantidade}</Quantidade>
                    </Info>
                    <DeleteButton onClick={() => handleDelete(item.id)}>
                        <img src={TrashIcon} alt="Excluir" />
                    </DeleteButton>
                </Item>
            ))}
        </List>
    );
};

export default CartItemList;

const List = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 20px 18px;
    border-radius: 15px;
`;

const Image = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #b0b0b0;
    background-image: linear-gradient(45deg, #aaa 25%, transparent 25%, transparent 50%, #aaa 50%, #aaa 75%, transparent 75%);
    background-size: 20px 20px;
`;

const Info = styled.div`
    flex-grow: 1;
    margin-left: 20px;
`;

const Nome = styled.div`
    font-weight: bold;
    color: rgb(255, 255, 255);
`;

const Quantidade = styled.div`
    color: rgba(255, 255, 255, 0.35);
`;

const DeleteButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }
`;
