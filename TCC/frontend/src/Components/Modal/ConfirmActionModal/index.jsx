import styled from "styled-components";
import Modal from "..";


const ConfirmActionModal = ({ isOpen, onClose, type}) => {

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
        <Tittle>
            Olá caralho
        </Tittle>
        </Modal>
    )
}


const Tittle = styled.h1`
    font-size: 100px;
`

export default ConfirmActionModal;