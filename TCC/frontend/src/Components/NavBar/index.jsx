import styled from "styled-components"
import LogoutBTN from "../Buttons/LogoutBTN"

const NavBar = () =>{
    
    
    return (
        <Wrapper>
            <LogoutBTN/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 5.5vw;
    background-color: black;
    width: 100%;
`

export default NavBar