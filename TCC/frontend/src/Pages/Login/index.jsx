import styled from "styled-components";
import CardLogin from "../../Components/Cards/CardLogin"
import bgImage from "../../Assets/SVGs/background-login-cadastro.svg"


const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position: center;
`




const Login = () => {
    return (
        <Wrapper bg={bgImage}> 
            <CardLogin/>
        </Wrapper>
    )
}

export default Login;