package TCC.TCC.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import TCC.TCC.Service.JWTService;
import TCC.TCC.Service.UsuarioService;
import TCC.TCC.DTOs.UsuarioDTO.LoginDTO;
import TCC.TCC.Entities.Usuario;

@RestController
@RequestMapping("/v1/Usuarios")
public class LoginController {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JWTService jwtService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginDTO loginDTO) {
        // Verificar as credenciais do ADM
        Usuario usuario = usuarioService.buscarPorEmailESenha(loginDTO.getEmail(), loginDTO.getSenha());
        if (usuario != null) {
            // Gerar o token JWT
            String token = jwtService.gerarToken(usuario.getEmail());
            return ResponseEntity.ok(token);
        }
        return ResponseEntity.status(401).body("Credenciais inválidas.");
    }
}
