import { Outlet } from "react-router-dom";
import NavBar from "../../Components/Navs/NavBar";
import Subnav from "../../Components/Navs/Subnav";
import styled from "styled-components";

const Config = () => {
    return (
        <>
            <NavBar/>
            <Wrapper>
                <Outlet/>
            </Wrapper>
            <Subnav/>
        </>
    )
}


const Wrapper = styled.div`
    margin-top: 100px;
    background-color: #1a1a1a;
`

export default Config;