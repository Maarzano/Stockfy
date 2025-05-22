import styled from "styled-components";
import NavBar from "../../Components/Navs/NavBar"
import Subnav from "../../Components/Navs/Subnav";

const Gallery = () => {
    return (
        <>
            <NavBar/>
            <SubnavWrapper>
                <Subnav/>
            </SubnavWrapper>
        </>
    )
}

export default Gallery;


const SubnavWrapper = styled.div`
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
`