import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as SettingIcon } from "../../../Assets/SVGs/Icons/icon-setting-purple.svg";
import { ReactComponent as BoxIcon } from "../../../Assets/SVGs/Icons/icon-box.svg";
import { ReactComponent as HistoryIcon } from "../../../Assets/SVGs/Icons/icon-history.svg";
import { ReactComponent as ProfileIcon } from "../../../Assets/SVGs/Icons/icon-profile-black.svg";
import { ReactComponent as EmployeIcon } from "../../../Assets/SVGs/Icons/icon-employes.svg";
import ToolTipTab from '../../ToolTipTab';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Subnav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState(location.pathname.startsWith('/Config'));

  React.useEffect(() => {
    if (!location.pathname.startsWith('/Config')) setExpanded(false);
    else setExpanded(true);
  }, [location.pathname]);

  const handleConfigClick = (e) => {
    e.preventDefault();
    if (!expanded) {
      setExpanded(true);
      navigate('/Config/Stock');
    }
  };

  const isStock = location.pathname === '/Config/Stock';

  return (
    <StyledWrapper>
      <div className={`navigation-card${expanded ? ' expanded' : ''}`}>
        <ToolTipTab label={"Galeria"}>
          <Link
            className={`tab ${location.pathname === '/Gallery' ? 'active' : ''}`}
            to="/Gallery"
            onClick={() => setExpanded(false)}
          >
            <svg className="svgIcon" viewBox="0 0 104 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100.5 40.75V96.5H66V68.5V65H62.5H43H39.5V68.5V96.5H3.5V40.75L52 4.375L100.5 40.75Z" stroke="currentColor" strokeWidth={7} />
            </svg>
          </Link>
        </ToolTipTab>

        {expanded ? (
          <ToolTipTab label="Estoque">
            <Link
              className={`tab${isStock ? ' active' : ''}`}
              to="/Config/Stock"
            >
              <BoxIcon className="svgIcon" />
            </Link>
          </ToolTipTab>
        ) : (
          <ToolTipTab label="Configurações">
            <Link
              className={`tab`}
              href="#"
              onClick={handleConfigClick}
            >
              <SettingIcon className="svgIcon" fill='currentColor' />
            </Link>
          </ToolTipTab>
        )}

        {expanded && (
          <div className="config-menu">
            <ToolTipTab label="Funcionários">
              <Link
                className={`tab ${location.pathname === '/Config/Employe' ? 'active' : ''}`}
                to="/Config/Employe"
              >
                <EmployeIcon className="svgIcon" fill='currentColor' />
              </Link>
            </ToolTipTab>
            <ToolTipTab label="Histórico">
              <Link
                className={`tab ${location.pathname === '/Config/History' ? 'active' : ''}`}
                to="/Config/History"
              >
                <HistoryIcon className="svgIcon" />
              </Link>
            </ToolTipTab>
            <ToolTipTab label="Perfil">
              <Link
                className={`tab ${location.pathname === '/Config/Profile' ? 'active' : ''}`}
                to="/Config/Profile"
              >
                <ProfileIcon className="svgIcon" />
              </Link>
            </ToolTipTab>
          </div>
        )}
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
    transition: all 0.3s;
  }
  .navigation-card.expanded {
    gap: 20px;
    padding: 15px 35px;
    border-radius: 30px;
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
  .config-menu {
    display: flex;
    align-items: center;
    gap: 20px;
    transition: all 0.3s;
  }
`

export default Subnav;

//1 #ffffff
//2 #fcfcfc
