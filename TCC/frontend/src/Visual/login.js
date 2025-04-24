const loginInput = document.getElementById("username");
let cpfMask;

const cpfMaskOptions = {
    mask: '000.000.000-00'
};

loginInput.addEventListener("input", function () {
    const value = loginInput.value;

    const isCpfPossivel = /^[\d.\-]*$/.test(value) && value.replace(/\D/g, "").length <= 11;

    if (isCpfPossivel && !cpfMask) {
        // eslint-disable-next-line no-undef
        cpfMask = IMask(loginInput, cpfMaskOptions);
    }

    if (/[a-zA-Z@]/.test(value)) {
        if (cpfMask) {
            cpfMask.destroy();
            cpfMask = null;
            loginInput.value = value;
        }
    }
});

document.getElementById("login-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    try {
      const response = await fetch("http://localhost:8080/v1/Usuarios/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          login: username,
          senha: password
        })
      });
  
        if (response.ok) {
            const usuario = await response.json();
            alert("Login efetuado com sucesso, bem-vindo " + usuario.nomeCompleto);
            window.location.href = "GaleriaItens.html";
        } else {
            alert("Usuário ou senha inválidos.");
        }

    } catch (error) {
        console.error("Erro ao fazer login:", error);
        alert("Erro ao conectar com o servidor.");
    }
});