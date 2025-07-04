package TCC.TCC;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import TCC.TCC.DTOs.UsuarioDTO.CriarUsuarioDTO;
import TCC.TCC.Entities.Usuario;
import TCC.TCC.Service.UsuarioService;

import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class Cadastro {
    
    @Autowired
    private UsuarioService usuarioService;

    @Test
    void testCriarUsuario() {
        CriarUsuarioDTO usuarioDTO = new CriarUsuarioDTO(
            "Gabriel da Silva",
            "12345678",
            "12345678901", 
            "11987654321", 
            "gbl4828132@gmail.com"
           
            );
        System.out.println("Valores: " + usuarioDTO);
        long usuarioId = usuarioService.criarUsuario(usuarioDTO);
        Usuario usuarioSalvo = usuarioService.pegarUsuarioPeloID(usuarioId)
            .orElse(null);
        assertNotNull(usuarioSalvo, "Usuário foi cadastrado corretamente.");
        System.out.println("[TESTE] Teste concluído.");
    }
}