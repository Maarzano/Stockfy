import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import LandingNav from "../../Components/Navs/LandingNav";
import iconBox from "../../Assets/SVGs/Icons/icon-box.svg";
import iconCart from "../../Assets/SVGs/Icons/icon-cart-black.svg";
import iconHistory from "../../Assets/SVGs/Icons/icon-history.svg";
import iconEmployees from "../../Assets/SVGs/Icons/icon-employes.svg";
import iconCloud from "../../Assets/SVGs/Icons/icon-cloud.svg";
import iconGoogle from "../../Assets/SVGs/Icons/icon-google-color.svg";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const pulse = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
`;

const Landing = () => {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      icon: iconBox,
      title: "Gestão de Estoque",
      description: "Controle completo do seu inventário com cadastro, edição e exclusão de produtos de forma intuitiva."
    },
    {
      icon: iconCart,
      title: "Sistema de Carrinho",
      description: "Movimente itens do estoque com facilidade através do carrinho inteligente e persistente."
    },
    {
      icon: iconEmployees,
      title: "Gestão de Funcionários",
      description: "Cadastre e gerencie sua equipe com controle de acesso e permissões personalizadas."
    },
    {
      icon: iconHistory,
      title: "Histórico Completo",
      description: "Acompanhe todas as movimentações com relatórios detalhados e exportação para Excel."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [features.length]);

  const handleGetStarted = () => {
    navigate("/auth");
  };

  return (
    <Wrapper>
      <LandingNav />

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle>
            Sistema Completo de
            <Highlight> Gestão de Estoque</Highlight>
          </HeroTitle>
          <HeroSubtitle>
            Controle total do seu inventário com interface moderna e funcionalidades avançadas. 
            Ideal para empresas que precisam de eficiência na gestão de produtos.
          </HeroSubtitle>
          <CTAButtons>
            <PrimaryButton onClick={handleGetStarted}>
              <GoogleIcon src={iconGoogle} alt="Google" />
              Começar Agora
            </PrimaryButton>
            <SecondaryButton>
              Saiba Mais
            </SecondaryButton>
          </CTAButtons>
        </HeroContent>
        <HeroVisual>
          <FloatingCard>
            <CardIcon src={iconBox} alt="Estoque" />
            <CardTitle>Estoque</CardTitle>
            <CardCount>1,247 itens</CardCount>
          </FloatingCard>
          <FloatingCard delay="0.5s">
            <CardIcon src={iconCart} alt="Carrinho" />
            <CardTitle>Carrinho</CardTitle>
            <CardCount>12 itens</CardCount>
          </FloatingCard>
          <FloatingCard delay="1s">
            <CardIcon src={iconEmployees} alt="Funcionários" />
            <CardTitle>Equipe</CardTitle>
            <CardCount>8 membros</CardCount>
          </FloatingCard>
        </HeroVisual>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection id="features">
        <SectionTitle>Funcionalidades Principais</SectionTitle>
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index} isActive={currentFeature === index}>
              <FeatureIcon src={feature.icon} alt={feature.title} />
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      {/* Benefits Section */}
      <BenefitsSection id="benefits">
        <SectionTitle>Por que escolher o StockManager?</SectionTitle>
        <BenefitsGrid>
          <BenefitCard>
            <BenefitIcon src={iconCloud} alt="Cloud" />
            <BenefitTitle>Armazenamento Seguro</BenefitTitle>
            <BenefitDescription>
              Seus dados ficam protegidos na nuvem com backup automático e sincronização em tempo real.
            </BenefitDescription>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon src={iconHistory} alt="Histórico" />
            <BenefitTitle>Histórico Completo</BenefitTitle>
            <BenefitDescription>
              Acompanhe todas as movimentações com relatórios detalhados e exportação para Excel.
            </BenefitDescription>
          </BenefitCard>
          <BenefitCard>
            <BenefitIcon src={iconEmployees} alt="Equipe" />
            <BenefitTitle>Gestão de Equipe</BenefitTitle>
            <BenefitDescription>
              Controle de acesso por usuário com permissões personalizadas para cada funcionário.
            </BenefitDescription>
          </BenefitCard>
        </BenefitsGrid>
      </BenefitsSection>

      {/* CTA Section */}
      <CTASection id="contact">
        <CTAContent>
          <CTATitle>Pronto para otimizar seu estoque?</CTATitle>
          <CTASubtitle>
            Junte-se a centenas de empresas que já confiam no StockManager para gerenciar seus inventários.
          </CTASubtitle>
          <CTAButton onClick={handleGetStarted}>
            <GoogleIcon src={iconGoogle} alt="Google" />
            Começar Gratuitamente
          </CTAButton>
        </CTAContent>
      </CTASection>

      {/* Footer */}
      <Footer>
        <FooterContent>
          <FooterSection>
            <FooterTitle>StockManager</FooterTitle>
            <FooterDescription>
              Sistema completo de gestão de estoque para empresas que buscam eficiência e controle total.
            </FooterDescription>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Funcionalidades</FooterTitle>
            <FooterLinks>
              <FooterLink>Gestão de Estoque</FooterLink>
              <FooterLink>Sistema de Carrinho</FooterLink>
              <FooterLink>Histórico de Movimentações</FooterLink>
              <FooterLink>Gestão de Funcionários</FooterLink>
            </FooterLinks>
          </FooterSection>
          <FooterSection>
            <FooterTitle>Suporte</FooterTitle>
            <FooterLinks>
              <FooterLink>Documentação</FooterLink>
              <FooterLink>Central de Ajuda</FooterLink>
              <FooterLink>Contato</FooterLink>
            </FooterLinks>
          </FooterSection>
        </FooterContent>
        <FooterBottom>
          <FooterText>&copy; 2024 StockManager. Todos os direitos reservados.</FooterText>
        </FooterBottom>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
`;



const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 140px 100px 80px;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 120px 20px 60px;
    text-align: center;
    gap: 40px;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  animation: ${fadeInUp} 1s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(45deg, #7c5cff, #a084ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #cccccc;
  margin-bottom: 40px;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: linear-gradient(45deg, #7c5cff, #a084ff);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(124, 92, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(124, 92, 255, 0.4);
  }
`;

const SecondaryButton = styled.button`
  padding: 15px 30px;
  background: transparent;
  color: #7c5cff;
  border: 2px solid #7c5cff;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #7c5cff;
    color: white;
  }
`;

const GoogleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const HeroVisual = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const FloatingCard = styled.div`
  position: absolute;
  background: rgba(124, 92, 255, 0.1);
  border: 1px solid rgba(124, 92, 255, 0.3);
  border-radius: 15px;
  padding: 20px;
  backdrop-filter: blur(10px);
  animation: ${float} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay || "0s"};

  &:nth-child(1) {
    top: 0;
    left: 0;
  }

  &:nth-child(2) {
    top: 50px;
    right: 0;
  }

  &:nth-child(3) {
    bottom: 0;
    left: 50px;
  }
`;

const CardIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 5px;
`;

const CardCount = styled.p`
  font-size: 0.9rem;
  color: #7c5cff;
  font-weight: 500;
`;

const FeaturesSection = styled.section`
  padding: 80px 100px;
  background: rgba(255, 255, 255, 0.02);

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 60px;
  background: linear-gradient(45deg, #7c5cff, #a084ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  animation: ${fadeInUp} 0.6s ease-out;
  animation-delay: ${props => props.isActive ? "0s" : "0.2s"};

  &:hover {
    transform: translateY(-5px);
    border-color: #7c5cff;
    box-shadow: 0 10px 30px rgba(124, 92, 255, 0.2);
  }
`;

const FeatureIcon = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #7c5cff;
`;

const FeatureDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
`;

const BenefitsSection = styled.section`
  padding: 80px 100px;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  padding: 40px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const BenefitIcon = styled.img`
  width: 56px;
  height: 56px;
  margin-bottom: 20px;
`;

const BenefitTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #7c5cff;
`;

const BenefitDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
`;

const CTASection = styled.section`
  padding: 80px 100px;
  background: linear-gradient(135deg, rgba(124, 92, 255, 0.1) 0%, rgba(160, 132, 255, 0.1) 100%);
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CTAContent = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const CTASubtitle = styled.p`
  font-size: 1.1rem;
  color: #cccccc;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const CTAButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 18px 40px;
  background: linear-gradient(45deg, #7c5cff, #a084ff);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(124, 92, 255, 0.3);
  margin: 0 auto;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(124, 92, 255, 0.4);
  }
`;

const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.3);
  padding: 60px 100px 20px;

  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
`;

const FooterSection = styled.div``;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 20px;
  color: #7c5cff;
`;

const FooterDescription = styled.p`
  color: #cccccc;
  line-height: 1.6;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  color: #cccccc;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #7c5cff;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 20px;
  text-align: center;
`;

const FooterText = styled.p`
  color: #999999;
  font-size: 0.9rem;
`;

export default Landing; 