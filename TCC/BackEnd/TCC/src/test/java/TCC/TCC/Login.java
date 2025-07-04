package TCC.TCC;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import TCC.TCC.DTOs.UsuarioDTO.LoginDTO;
import TCC.TCC.Entities.Usuario;
import TCC.TCC.Service.UsuarioService;

@SpringBootTest
public class Login {
    
    @Autowired
    private UsuarioService usuarioService;

    @Test
    void testLogin() {
        System.out.println("[TESTE] Iniciando teste de login...");
        
        String email = "gbl48287@gmail.com";
        String senha = "12345678";

        LoginDTO loginDTO = new LoginDTO(email, senha);
        
        System.out.println("Tentando fazer login com: " + loginDTO);
        

      if (loginDTO.equals(email = "gbl48287@gmail.com" && senha = "12345678") != null) {
            System.out.println("Login realizado com sucesso! Usuário: " + email + " está logado.");
        } else {
            System.out.println("Falha no login. Verifique suas credenciais.");
        }
    }
}
