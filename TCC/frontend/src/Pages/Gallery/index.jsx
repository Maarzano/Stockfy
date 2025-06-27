import styled from "styled-components";
import NavBar from "../../Components/Navs/NavBar"
import GalleryItenSection from "../../Components/GalleryItemSection";
import Subnav from "../../Components/Navs/Subnav";

const Gallery = () => {
    return (
        <Wrapper>
            <NavBar/>
            <Subnav />
            <GalleryItenSection/>
        </Wrapper>
    )
}

export default Gallery;


const Wrapper = styled.div`
    background-color: #1a1a1a;
`