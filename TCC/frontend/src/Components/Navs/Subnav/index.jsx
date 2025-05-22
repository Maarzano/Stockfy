import React from 'react';
import styled from 'styled-components';
import SettingIcon from "../../../Assets/SVGs/Icons/icon-setting-purple.svg";
import ToolTipTab from '../../ToolTipTab';

const Subnav = () => {
  return (
    <StyledWrapper>
      <div className="navigation-card">
        <ToolTipTab label={"Galeria"}>
            <a href="#" className="tab">
            <svg className="svgIcon" viewBox="0 0 104 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100.5 40.75V96.5H66V68.5V65H62.5H43H39.5V68.5V96.5H3.5V40.75L52 4.375L100.5 40.75Z" stroke="#623bda" strokeWidth={7} />
            </svg>
            </a>
        </ToolTipTab>

        <ToolTipTab label={"Perfil"}>
            <a href="#" className="tab">
            <svg width={104} height={100} viewBox="0 0 104 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="21.5" y="3.5" width={60} height={60} rx={30} stroke="#623bda" strokeWidth={7} />
                <g clipPath="url(#clip0_41_27)">
                <mask id="mask0_41_27" style={{maskType: 'luminance'}} maskUnits="userSpaceOnUse" x={0} y={61} width={104} height={52}>
                    <path d="M0 113C0 84.2812 23.4071 61 52.1259 61C80.706 61 104 84.4199 104 113H0Z" fill="#623bda" />
                </mask>
                <g mask="url(#mask0_41_27)">
                    <path d="M-7 113C-7 80.4152 19.4152 54 52 54H52.2512C84.6973 54 111 80.3027 111 112.749H97C97 88.0347 76.9653 68 52.2512 68H52C27.1472 68 7 88.1472 7 113H-7ZM-7 113C-7 80.4152 19.4152 54 52 54V68C27.1472 68 7 88.1472 7 113H-7ZM52.2512 54C84.6973 54 111 80.3027 111 112.749V113H97V112.749C97 88.0347 76.9653 68 52.2512 68V54Z" fill="#623bda" />
                </g>
                </g>
                <defs>
                <clipPath id="clip0_41_27">
                    <rect width={104} height={39} fill="white" transform="translate(0 61)" />
                </clipPath>
                </defs>
            </svg>
            </a>
        </ToolTipTab>

        <ToolTipTab label={"Configurações"}>
            <a href="#" className="tab">
                <img src={SettingIcon} alt=""/>
            </a>
        </ToolTipTab>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .navigation-card {
    width: fit-content;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    background-color: #000000;
    padding: 15px 20px;
    border-radius: 50px;
  }
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55px;
    height: 55px;
    overflow: hidden;
    background-color: #252525;
    padding: 15px;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s;
  }
  .tab:hover {
    background-color: rgb(227, 223, 223);
  }`;

export default Subnav;

//1 #ffffff
//2 #fcfcfc
