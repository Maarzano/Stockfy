package TCC.TCC;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import TCC.TCC.DTOs.UsuarioDTO.CriarUsuarioDTO;
import TCC.TCC.DTOs.UsuarioDTO.LoginDTO;
import TCC.TCC.Entities.Usuario;
import TCC.TCC.Service.UsuarioService;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class Login {
    
    @Autowired
    private UsuarioService usuarioService;

    @Test
    void testLogin() {
        System.out.println("[TESTE] Iniciando teste de login...");
        
        String email = "gbl482837@gmail.com";
        String senha = "12345678";

        CriarUsuarioDTO criarUsuarioDTO = new CriarUsuarioDTO(
            "Gabriel",
            "gbl482837@gmail.com",
            "12345678",
            "12345678900",
            "11999999999"
        );

        usuarioService.criarUsuario(criarUsuarioDTO);
        
        LoginDTO loginDTO = new LoginDTO(email, senha);
        
        System.out.println("Tentando fazer login com: " + loginDTO);

        Usuario usuario = usuarioService.validarLogin(loginDTO.login(), loginDTO.senha());
        assertNotNull(usuario, "Falha no login: usuário não encontrado ou senha incorreta.");

        System.out.println("Login realizado com sucesso! Usuário: " + usuario.getEmail());
    }
}
