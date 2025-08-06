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

  const fakeComments = [
    {
      name: "Ana Souza",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      comment: "O Stockfy revolucionou o controle do nosso estoque! Interface intuitiva e suporte excelente.",
    },
    {
      name: "Carlos Lima",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 4,
      comment: "Muito prático e fácil de usar. Recomendo para qualquer empresa!",
    },
    {
      name: "Juliana Alves",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      rating: 5,
      comment: "A integração com a equipe foi perfeita. O sistema é rápido e seguro.",
    },
    {
      name: "Roberto Silva",
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      rating: 5,
      comment: "Nunca mais perdemos produtos por falta de controle. O histórico é sensacional!",
    },
    {
      name: "Fernanda Dias",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      rating: 4,
      comment: "O design é lindo e a navegação super fluida. Parabéns à equipe!",
    },
    {
      name: "Lucas Pereira",
      avatar: "https://randomuser.me/api/portraits/men/23.jpg",
      rating: 5,
      comment: "A função de exportar para Excel salvou minha vida! Muito útil.",
    },
    {
      name: "Marina Costa",
      avatar: "https://randomuser.me/api/portraits/women/21.jpg",
      rating: 5,
      comment: "O melhor sistema de estoque que já usei. Simplesmente perfeito!",
    },
    {
      name: "Eduardo Ramos",
      avatar: "https://randomuser.me/api/portraits/men/41.jpg",
      rating: 4,
      comment: "O suporte técnico é muito ágil. Resolveram meu problema em minutos.",
    },
    {
      name: "Patrícia Santos",
      avatar: "https://randomuser.me/api/portraits/women/33.jpg",
      rating: 5,
      comment: "A gestão de funcionários é incrível. Cada um com suas permissões específicas.",
    },
    {
      name: "Thiago Oliveira",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
      rating: 5,
      comment: "O carrinho de movimentação é genial! Facilita muito o dia a dia.",
    },
    {
      name: "Camila Ferreira",
      avatar: "https://randomuser.me/api/portraits/women/89.jpg",
      rating: 4,
      comment: "Interface moderna e responsiva. Funciona perfeitamente no mobile.",
    },
    {
      name: "Rafael Martins",
      avatar: "https://randomuser.me/api/portraits/men/67.jpg",
      rating: 5,
      comment: "O backup automático na nuvem me dá total segurança. Recomendo!",
    },
    {
      name: "Isabela Rodrigues",
      avatar: "https://randomuser.me/api/portraits/women/45.jpg",
      rating: 5,
      comment: "Relatórios detalhados e exportação para Excel. Exatamente o que precisava!",
    },
    {
      name: "Gabriel Almeida",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      rating: 4,
      comment: "Sistema robusto e confiável. Não tive problemas desde que comecei a usar.",
    },
    {
      name: "Larissa Costa",
      avatar: "https://randomuser.me/api/portraits/women/56.jpg",
      rating: 5,
      comment: "A busca e filtros são muito eficientes. Encontro qualquer produto rapidamente.",
    },
    {
      name: "Diego Santos",
      avatar: "https://randomuser.me/api/portraits/men/34.jpg",
      rating: 5,
      comment: "O histórico de movimentações é completo. Nunca perco o controle de nada.",
    },
  ];

  // Remover bentoLayout e grid customizado

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

      {/* Comments Section */}
      <CommentsSection id="comentarios">
        <CommentsTitle>O que estão dizendo sobre o Stockfy</CommentsTitle>
        <CommentsDoubleCarousel>
          <CommentsCarouselRow $variant={1}>
            <CommentsCarouselScroller $reverse={false}>
              {[...fakeComments, ...fakeComments].map((c, i) => (
                <CommentCarouselCard key={i} $variant={1}>
                  <CommentHeader>
                    <Avatar src={c.avatar} alt={c.name} />
                    <div>
                      <CommentName>{c.name}</CommentName>
                      <CommentStars>
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} $active={idx < c.rating}>★</Star>
                        ))}
                      </CommentStars>
                    </div>
                  </CommentHeader>
                  <CommentText>"{c.comment}"</CommentText>
                </CommentCarouselCard>
              ))}
            </CommentsCarouselScroller>
          </CommentsCarouselRow>
          <CommentsCarouselRow $variant={2}>
            <CommentsCarouselScroller $reverse={true}>
              {[...fakeComments, ...fakeComments].map((c, i) => (
                <CommentCarouselCard key={i} $variant={2}>
                  <CommentHeader>
                    <Avatar src={c.avatar} alt={c.name} />
                    <div>
                      <CommentName>{c.name}</CommentName>
                      <CommentStars>
                        {Array.from({ length: 5 }).map((_, idx) => (
                          <Star key={idx} $active={idx < c.rating}>★</Star>
                        ))}
                      </CommentStars>
                    </div>
                  </CommentHeader>
                  <CommentText>"{c.comment}"</CommentText>
                </CommentCarouselCard>
              ))}
            </CommentsCarouselScroller>
          </CommentsCarouselRow>
        </CommentsDoubleCarousel>
      </CommentsSection>

      {/* Benefits Section */}
      <BenefitsSection id="benefits">
        <SectionTitle>Por que escolher o Stockfy?</SectionTitle>
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
            Junte-se a centenas de empresas que já confiam no Stockfy para gerenciar seus inventários.
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
            <FooterTitle>Stockfy</FooterTitle>
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
          <FooterText>&copy; 2024 Stockfy. Todos os direitos reservados.</FooterText>
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

// styled-components para a sessão de comentários
const CommentsSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: none;
  padding: 0;
`;
const CommentsTitle = styled.h2`
  text-align: center;
  font-size: 2.3rem;
  font-weight: bold;
  margin-bottom: 48px;
  background: linear-gradient(45deg, #7c5cff, #a084ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const CommentsDoubleCarousel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  width: 100vw;
  align-items: center;
`;
const CommentsCarouselRow = styled.div`
  width: 100vw;
  max-width: 100vw;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: ${({ $variant }) => $variant === 2 ? 2 : 1};
  margin-top: ${({ $variant }) => $variant === 1 ? '40px' : '0'};
  margin-bottom: ${({ $variant }) => $variant === 2 ? '40px' : '0'};
`;
const CommentsCarouselScroller = styled.div`
  display: flex;
  gap: 48px;
  width: max-content;
  animation: ${({ $reverse }) => $reverse ? 'scrollCarouselReverse' : 'scrollCarousel'} 80s linear infinite;
  will-change: transform;
  &:hover, &:focus {
    animation-play-state: paused;
  }
  @keyframes scrollCarousel {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  @keyframes scrollCarouselReverse {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }
`;
const CommentCarouselCard = styled.div`
  background: rgba(30, 24, 54, 0.88);
  border-radius: 22px;
  padding: 38px 32px 28px 32px;
  min-width: 400px;
  max-width: 440px;
  box-shadow: 0 6px 32px 0 rgba(124,92,255,0.18), 0 1.5px 8px 0 rgba(0,0,0,0.10);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid rgba(124,92,255,0.16);
  overflow: hidden;
  transition: transform 0.18s, box-shadow 0.18s;
  position: relative;
  z-index: 3;
  &:hover {
    transform: scale(1.045) translateY(-6px);
    box-shadow: 0 12px 36px 0 rgba(124,92,255,0.28), 0 2px 12px 0 rgba(0,0,0,0.13);
    border-color: #a084ff;
    z-index: 10;
  }
  @media (max-width: 900px) {
    min-width: 260px;
    max-width: 320px;
    padding: 18px 10px 14px 10px;
  }
`;
const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;
`;
const Avatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #a084ff;
`;
const CommentName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  color: #fff;
`;
const CommentStars = styled.div`
  display: flex;
  gap: 2px;
`;
const Star = styled.span`
  color: ${({ $active }) => ($active ? '#FFD700' : '#888')};
  font-size: 1.1rem;
`;
const CommentText = styled.p`
  color: #e6e6e6;
  font-size: 1.05rem;
  margin-top: 8px;
  font-style: italic;
`;

export default Landing;