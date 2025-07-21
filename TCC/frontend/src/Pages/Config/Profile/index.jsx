import { useEffect, useState } from "react";
import styled from "styled-components";
import imagemProfile from "../../../Assets/SVGs/Icons/icon-profile-white&purple.svg";
import SaveCancelBTN from "../../../Components/Buttons/SaveCancelBTN";
import { placeholder } from "../../../Utils/verificandoImagem";
import ajustarTamanhoImagemGoogle from "../../../Utils/ajustarTamanhoImagemGoogle";
import { atualizarUsuario } from '../../../Services/usuarioService';

const Profile = () => {
    const [usuario, setUsuario] = useState({
        nomeCompleto: "",
        email: "",
        cpf: "",
        celular: "",
        senha: "", 
        Imagem: ""
    });

    const [isEditing, setIsEditing] = useState(false);
    const [usuarioOriginal, setUsuarioOriginal] = useState(null);

    useEffect(() => {
        const usuarioSalvo = localStorage.getItem("usuario");
        
        if (usuarioSalvo) {
            const dados = JSON.parse(usuarioSalvo);
            setUsuario(dados);
        }
    }, []);

    const handleEdit = () => {
        setUsuarioOriginal(usuario); // backup
        setIsEditing(true);
    };

    const confirmCancel = () => {
        setUsuario(usuarioOriginal);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUsuario((prev) => ({ ...prev, [id]: value }));
    };

    const handleConfirmSave = async () => {
        try {
            await atualizarUsuario(usuario.usuarioID, {
                nomeCompleto: usuario.nomeCompleto,
                senha: usuario.senha,
                cpf: usuario.cpf,
                celular: usuario.celular,
                email: usuario.email
            });
            localStorage.setItem("usuario", JSON.stringify(usuario));
            setIsEditing(false);
        } catch (e) {
            alert("Erro ao atualizar usuário");
        }
    };

    return (
        <Wrapper>
            <NamePage>Seu Perfil</NamePage>
            <Main>
                <ImgProfile src={usuario.imagem ?  placeholder(ajustarTamanhoImagemGoogle(usuario.imagem, 256)) : imagemProfile} alt="Perfil" />
                <Form>
                    <DivInputLabel>
                        <Label htmlFor="nomeCompleto">Nome Completo</Label>
                        <Input id="nomeCompleto" value={usuario.nomeCompleto} readOnly={!isEditing} onChange={isEditing ? handleChange : undefined} />
                    </DivInputLabel>
                    <DivInputLabel>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={usuario.email} readOnly={!isEditing} onChange={isEditing ? handleChange : undefined} />
                    </DivInputLabel>
                    <LadoDoOutro>
                        <DivInputLabel>
                            <Label htmlFor="cpf">CPF</Label>
                            <Input id="cpf" value={usuario.cpf} readOnly={!isEditing} onChange={isEditing ? handleChange : undefined} />
                        </DivInputLabel>
                        <DivInputLabel>
                            <Label htmlFor="celular">Celular</Label>
                            <Input id="celular" value={usuario.celular} readOnly={!isEditing} onChange={isEditing ? handleChange : undefined} />
                        </DivInputLabel>
                    </LadoDoOutro>
                    <DivInputLabel>
                        <Label htmlFor="senha">Senha</Label>
                        <Input id="senha" value={usuario.senha} type="password" readOnly={!isEditing} onChange={isEditing ? handleChange : undefined} />
                    </DivInputLabel>
                    <DivBTN center={!isEditing}>
                        {!isEditing ? (
                            <SaveCancelBTN type="edit" onClick={handleEdit} />
                        ) : (
                            <>
                                <SaveCancelBTN type="cancel" onConfirm={confirmCancel} />
                                <SaveCancelBTN type="save" data={usuario} onConfirm={handleConfirmSave} />
                            </>
                        )}
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
    border-radius: 5rem;
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
    justify-content: ${props => props.center ? 'center' : 'space-between'};
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
