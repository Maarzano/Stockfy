import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SettingIcon } from "../../../Assets/SVGs/Icons/icon-setting-purple.svg";
import ToolTipTab from '../../ToolTipTab';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Subnav = () => {
  const location = useLocation();
  return (
    <StyledWrapper>
      <div className="navigation-card">
        <ToolTipTab label={"Galeria"}>
            <Link className={`tab ${location.pathname === '/Gallery' ? 'active' : ''}`} to="/Gallery">
              <svg className="svgIcon" viewBox="0 0 104 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100.5 40.75V96.5H66V68.5V65H62.5H43H39.5V68.5V96.5H3.5V40.75L52 4.375L100.5 40.75Z" stroke="currentColor" strokeWidth={7} />
              </svg>
            </Link>
        </ToolTipTab>

        <ToolTipTab label={"Configurações"}>
          <Link to="/Config" className={`tab ${location.pathname === '/Config' ? 'active' : ''}`}>
            <SettingIcon className="svgIcon" fill='currentColor'/>
          </Link>
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
    position: fixed;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
  }
  .tab {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    overflow: hidden;
    background-color: #252525;
    padding: 1rem;
    border-radius: 50%;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s;
    color: #623bda;
  }
  .tab:hover {
    box-shadow: 0 0 10px #623bda;
  }

  .tab.active {
    background-color: #623bda;
    box-shadow: 0 0 10px #623bda;

    .svgIcon {
      color: black;
    }
  }

`

export default Subnav;

//1 #ffffff
//2 #fcfcfc
