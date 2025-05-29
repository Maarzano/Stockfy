import styled from "styled-components";

const ActionButtons = () => {
       
    const handleDevolucao = () => {
        alert("Você realizou a devolução");
    };

    const handleRetirada = () => {
        alert("Você realizou a retirada");
    };
    
    return (
        <Wrapper>
            <button onClick={handleDevolucao}>Devolução</button>
            <button onClick={handleRetirada}>Retirada</button>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;

    button {
        padding: 10px 20px;
        border: none;
        border-radius: 15px;
        background-color: #6b4eff;
        color: white;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background-color: #5a3be0;
    }
`;

export default ActionButtons;
