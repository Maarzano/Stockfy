document.addEventListener("DOMContentLoaded", function () {
    const formCadastro = document.getElementById("form-cadastro");

    formCadastro.addEventListener("submit", async function (event) {
        event.preventDefault();

        const nome = document.getElementById("username").value;
        const cpf = document.getElementById("cpf").value;
        const celular = document.getElementById("celular").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("password").value;

        const usuario = {
            nomeCompleto: nome,
            email: email,
            senha: senha,
            celular: celular,
            cpf: cpf
        };

        try {
            const response = await fetch("http://localhost:8080/v1/Usuarios", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(usuario)
            });

            if (response.ok) {
                alert("Usuário cadastrado com sucesso!");
                window.location.href = "GaleriaItens.html";
            } else {
                const error = await response.json();
                console.error("Erro ao cadastrar:", error);
                alert("Erro ao cadastrar o usuário.");
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            alert("Erro de conexão com o servidor.");
        }
    });
});
