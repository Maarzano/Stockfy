import { useEffect, useState } from "react";
import styled from "styled-components";
import imagemProfile from "../../../Assets/SVGs/Icons/icon-profile-white&purple.svg";
import SaveCancelBTN from "../../../Components/Buttons/SaveCancelBTN";

const Profile = () => {
    const [usuario, setUsuario] = useState({
        nomeCompleto: "",
        email: "",
        cpf: "",
        celular: "",
        senha: ""
    });

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem("usuario");
        if (usuarioSalvo) {
            const dados = JSON.parse(usuarioSalvo);
            setUsuario(dados);
        }
    }, []);

    return (
        <Wrapper>
            <NamePage>Seu Perfil</NamePage>
            <Main>
                <ImgProfile src={imagemProfile} alt="Perfil" />
                <Form>
                    <DivInputLabel>
                        <Label htmlFor="NomeCompleto">Nome Completo</Label>
                        <Input id="NomeCompleto" value={usuario.nomeCompleto} readOnly />
                    </DivInputLabel>
                    <DivInputLabel>
                        <Label htmlFor="Email">Email</Label>
                        <Input id="Email" value={usuario.email} readOnly />
                    </DivInputLabel>
                    <LadoDoOutro>
                        <DivInputLabel>
                            <Label htmlFor="CPF">CPF</Label>
                            <Input id="CPF" value={usuario.cpf} readOnly />
                        </DivInputLabel>
                        <DivInputLabel>
                            <Label htmlFor="Celular">Celular</Label>
                            <Input id="Celular" value={usuario.celular} readOnly />
                        </DivInputLabel>
                    </LadoDoOutro>
                    <DivInputLabel>
                        <Label htmlFor="Senha">Senha</Label>
                        <Input id="Senha" value={usuario.senha} type="password" readOnly />
                    </DivInputLabel>
                    <DivBTN>
                        <SaveCancelBTN type="cancel" />
                        <SaveCancelBTN />
                    </DivBTN>
                </Form>
            </Main>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    max-width: 1650px;
    margin: auto;
    background-color: black;
    color: white;
    height: 100%;
    padding: 40px;
    padding-top: 100px;
`;

const NamePage = styled.h1`
    font-size: 70px;
`;

const ImgProfile = styled.img`
    max-width: 200px;
    margin: auto;
    width: 100%;
`;

const Main = styled.main`
    padding: 40px;
    margin: 0px auto 100px auto;
    background-color: #1a1a1a;
    border-radius: 20px;
    max-width: 870px;
`;

const Form = styled.form``;

const Label = styled.label`
    margin-left: 3px;
    display: inline-block;
    width: 100%;
`;

const DivInputLabel = styled.div`
    margin-top: 20px;
`;

const LadoDoOutro = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;

    & > div {
        flex: 1;
    }
`;

const DivBTN = styled.div`
    margin: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Input = styled.input`
    width: 100%;
    border-radius: 0.375rem;
    border: 1px solid rgba(55, 65, 81, 1);
    outline: 0;
    background-color: rgba(17, 24, 39, 1);
    padding: 0.75rem 1rem;
    color: rgba(243, 244, 246, 1);
`;

export default Profile;
