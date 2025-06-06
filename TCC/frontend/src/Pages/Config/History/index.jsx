import styled from "styled-components";
import CardHistory from "../../../Components/Cards/CardHistory";
import HeaderHistory from "../../../Components/Headers/HeaderHistory";
import Search from "../../../Components/Search";
import ExcelBTN from "../../../Components/Buttons/ExcelBTN";

const mockData = [


    /*
    Temos um puta problema no backend... vou incluir como se esta tela estivesse feito e pronta por enquanto, mas ainda não está
    pois a tabela de movimentações está deixando incluir apenas um item, temos que criar um tabela de relação, criar DTOs para trazer trazer de forma completa e facilitar 
    a utilização no componente...
    - FIXME
    */

  {
    id: "#001",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Alice Krejčová",
    actionType: "Retirada",
    items: [
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Fonte ATX", quantity: 1 },
      { name: "Teclado", quantity: 1 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Faca", quantity: 100 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
      { name: "Cabo HDMI", quantity: 2 },
    ],
    dateTime: "2025-06-05 14:32"
  },
  {
    id: "#002",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "Jurriaan van",
    actionType: "Devolução",
    items: [
      { name: 'Monitor 24"', quantity: 1 },
      { name: "Mouse Logitech", quantity: 2 }
    ],
    dateTime: "2025-06-05 10:47"
  },
  {
    id: "#003",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Annelies Koeman",
    actionType: "Retirada",
    items: [
      { name: 'Teclado Mecânico Redragon', quantity: 1 },
      { name: "Headset JBL Quantum", quantity: 1 }
    ],
    dateTime: "2025-06-05 11:12"
  },
  {
    id: "#004",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "Lucas Brunner",
    actionType: "Devolução",
    items: [
      { name: "Notebook Dell Latitude", quantity: 1 }
    ],
    dateTime: "2025-06-05 09:40"
  },
  {
    id: "#005",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
    name: "Sofie Janssen",
    actionType: "Retirada",
    items: [
      { name: "Webcam Logitech C920", quantity: 2 },
      { name: "Cabo HDMI 2m", quantity: 3 }
    ],
    dateTime: "2025-06-04 17:28"
  },
  {
    id: "#006",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    name: "Thiago Costa",
    actionType: "Devolução",
    items: [
      { name: "Projetor Epson X41", quantity: 1 },
      { name: "Controle Remoto Universal", quantity: 1 }
    ],
    dateTime: "2025-06-04 14:06"
  },
  {
    id: "#007",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Camila Duarte",
    actionType: "Retirada",
    items: [
      { name: "Hub USB-C 6 em 1", quantity: 1 }
    ],
    dateTime: "2025-06-03 16:45"
  },
  {
    id: "#008",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "Henrique Farias",
    actionType: "Retirada",
    items: [
      { name: "Scanner Epson DS-410", quantity: 1 }
    ],
    dateTime: "2025-06-03 09:30"
  },
  {
    id: "#009",
    image: "https://randomuser.me/api/portraits/women/34.jpg",
    name: "Juliana Torres",
    actionType: "Devolução",
    items: [
      { name: "Monitor 27\" Acer", quantity: 1 },
      { name: "Dock Station Dell", quantity: 1 }
    ],
    dateTime: "2025-06-02 15:12"
  },
  {
    id: "#010",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    name: "Carlos Menezes",
    actionType: "Retirada",
    items: [
      { name: "Switch 8 Portas TP-Link", quantity: 1 }
    ],
    dateTime: "2025-06-02 08:50"
  },
  {
    id: "#011",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Isabela Martins",
    actionType: "Devolução",
    items: [
      { name: "Fone Sony WH-1000XM4", quantity: 1 }
    ],
    dateTime: "2025-06-01 17:25"
  },
  {
    id: "#012",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Pedro Albuquerque",
    actionType: "Retirada",
    items: [
      { name: "Mousepad Gamer", quantity: 2 },
      { name: "Mouse Razer Viper", quantity: 1 }
    ],
    dateTime: "2025-06-01 10:05"
  },
  {
    id: "#013",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Renata Lima",
    actionType: "Devolução",
    items: [
      { name: "Notebook Lenovo ThinkPad", quantity: 1 }
    ],
    dateTime: "2025-05-31 16:43"
  },
  {
    id: "#014",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Marcelo Souza",
    actionType: "Retirada",
    items: [
      { name: "Cabo de rede Cat6", quantity: 5 }
    ],
    dateTime: "2025-05-31 08:15"
  },
  {
    id: "#015",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Fernanda Castro",
    actionType: "Devolução",
    items: [
      { name: "Microfone Blue Yeti", quantity: 1 },
      { name: "Tripé Ajustável", quantity: 1 }
    ],
    dateTime: "2025-05-30 14:55"
  },
  {
    id: "#016",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    name: "Eduardo Lima",
    actionType: "Retirada",
    items: [
      { name: "Impressora HP LaserJet", quantity: 1 }
    ],
    dateTime: "2025-05-30 10:20"
  },
  {
    id: "#017",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Tatiane Rocha",
    actionType: "Devolução",
    items: [
      { name: "Tablet Samsung Galaxy Tab S8", quantity: 1 }
    ],
    dateTime: "2025-05-29 18:35"
  }
];



const History = () => {
    return (
        <Wrapper>
            <HeaderHistory />
            <WrapperSearch>
                <Search />
                <ExcelBTN data={mockData}/>
            </WrapperSearch>
            <Table>
                <HeaderRow>
                    <HeaderCell width="7%">ID</HeaderCell>
                    <HeaderCell width="20%">Nome</HeaderCell>
                    <HeaderCell width="20%">Ação</HeaderCell>
                    <HeaderCell width="40%">Itens</HeaderCell>
                    <HeaderCell width="10%">Data e hora</HeaderCell>
                </HeaderRow>
                {mockData.map((item, index) => (
                    <CardHistory key={index} data={item} />
                ))}
            </Table>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 1650px;
    margin: auto;
    background-color: black;
    color: white;
    height: 100%;
    min-height: 100vh;
    padding: 40px;
    padding-top: 90px;
`;

const WrapperSearch = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
`;

const Table = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 90px;
`;

const HeaderRow = styled.div`
    display: flex;
    background-color: #3a3a3a;
    padding: 10px 15px;
    font-weight: bold;
    width: 80%;
    margin: auto;
`;

const HeaderCell = styled.div`
    width: ${({ width }) => width || 'auto'};
`;

export default History;
