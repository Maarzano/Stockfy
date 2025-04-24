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