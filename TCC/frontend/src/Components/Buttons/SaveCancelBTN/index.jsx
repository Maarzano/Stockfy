import React from 'react';
import styled from 'styled-components';
import { ReactComponent as CloudIcon } from "../../../Assets/SVGs/Icons/icon-cloud.svg";
import { ReactComponent as CloseIcon } from "../../../Assets/SVGs/Icons/icon-x-close-black.svg";
import { ReactComponent as EditIcon } from "../../../Assets/SVGs/Icons/edit.svg";
import { ReactComponent as Trash} from "../../../Assets/SVGs/Icons/Trash.svg"

const SaveCancelBTN = ({ type = "save", onClick }) => {
  return (
    <StyledWrapper $type={type}>
      <button onClick={onClick}>
        <div className="svg-wrapper-1">
          <div className="svg-wrapper">
            {type === "save" ? <CloudIcon className='Icon' /> : type === "delete" ? <Trash className='Icon'/> : type ==="edit" ? <EditIcon class ='Icon'/> : <CloseIcon className='Icon'/>}
          </div>
        </div>
        <span>{type === "save" ? "Salvar" :  type === "delete" ? "Excluir" : type === "edit" ? "Editar" : "Cancelar"}</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    font-family: inherit;
    font-size: 20px;
  background: ${props => props.$type === "save" ? "#623bda" : props.$type === "delete" ? "#b31414" : props.$type === "edit" ? "#039dfc" : "#212121"};
    color: white;
    fill: rgb(155, 153, 153);
    padding: 0.7em 1em;
    padding-left: 0.9em;
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    border-radius: 15px;
    font-weight: 1000;
    overflow: hidden;
  }

  .Icon {
    width: 30px;
    height: 30px;
    transition: transform 0.3s ease-in-out, fill 0.3s ease-in-out;
    fill: white;
  }

  .svg-wrapper-1,
  .svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  button:hover {
    background: #000;
  }

  button:hover .svg-wrapper {
    transform: scale(1.25);
    transition: 0.5s linear;
  }

  button:hover .Icon {
    transform: ${props => props.$type === "save" ? "translateX(1.5em)" : props.$type === "delete" ? "translateX(1.60em)" : props.$type === "edit" ? "translateX(1.30em)" : "translateX(2em)"} scale(1.1);
    fill: #fff;
  }

  button:hover span {
    opacity: 0;
    transition: 0.5s linear;
  }

  button:active {
    transform: scale(0.95);
  }
`;

export default SaveCancelBTN;
