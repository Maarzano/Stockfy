import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import iconBox from "../../../Assets/SVGs/Icons/icon-box.svg";

const LandingNav = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    navigate("/auth");
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <Nav isScrolled={isScrolled}>
      <NavContainer>
        <Logo>
          <LogoIcon src={iconBox} alt="Logo" />
          <LogoText>Stockfy</LogoText>
        </Logo>

        <DesktopMenu>
          <NavLink onClick={() => scrollToSection("features")}>Funcionalidades</NavLink>
          <NavLink onClick={() => scrollToSection("benefits")}>Benefícios</NavLink>
          <NavLink onClick={() => scrollToSection("contact")}>Contato</NavLink>
          <LoginButton onClick={handleGetStarted}>Entrar</LoginButton>
        </DesktopMenu>

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <MenuIcon isOpen={isMobileMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </MobileMenuButton>

        <MobileMenu isOpen={isMobileMenuOpen}>
          <MobileNavLink onClick={() => scrollToSection("features")}>Funcionalidades</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("benefits")}>Benefícios</MobileNavLink>
          <MobileNavLink onClick={() => scrollToSection("contact")}>Contato</MobileNavLink>
          <MobileLoginButton onClick={handleGetStarted}>Entrar</MobileLoginButton>
        </MobileMenu>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${props => props.isScrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent'};
  backdrop-filter: ${props => props.isScrolled ? 'blur(10px)' : 'none'};
  transition: all 0.3s ease;
  padding: 20px 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoIcon = styled.img`
  width: 32px;
  height: 32px;
`;

const LogoText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(45deg, #7c5cff, #a084ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const DesktopMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #7c5cff;
  }
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #7c5cff;
  background: transparent;
  color: #7c5cff;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7c5cff;
    color: white;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuIcon = styled.div`
  width: 25px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  span {
    width: 100%;
    height: 2px;
    background: white;
    transition: all 0.3s ease;
    transform-origin: center;

    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }

    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(6px, -6px)' : 'none'};
    }
  }
`;

const MobileMenu = styled.div`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-100%)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MobileNavLink = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 0;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #7c5cff;
  }
`;

const MobileLoginButton = styled.button`
  padding: 12px 20px;
  border: 2px solid #7c5cff;
  background: transparent;
  color: #7c5cff;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;

  &:hover {
    background: #7c5cff;
    color: white;
  }
`;

export default LandingNav; 