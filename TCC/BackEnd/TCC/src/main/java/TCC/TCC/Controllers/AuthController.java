package TCC.TCC.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import TCC.TCC.DTOs.UsuarioDTO.LoginDTO;
import TCC.TCC.Entities.Usuario;
import TCC.TCC.Security.JwtUtil;
import TCC.TCC.Service.UsuarioService;

@RestController
@RequestMapping("/v1/auth")
public class AuthController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO loginDTO) {
        Usuario usuario = usuarioService.validarLogin(loginDTO.login(), loginDTO.senha());

        if (usuario != null) {
            String token = JwtUtil.gerarToken(usuario.getEmail());

            Map<String, Object> response = new HashMap<>();
            response.put("token", "Bearer " + token);
            response.put("usuario", usuario);

            return ResponseEntity.ok(response);
        } else {
            return ResponseEntity.status(401).body("Usuário ou senha inválidos.");
        }
    }


    @GetMapping("/perfil")
    public ResponseEntity<?> perfil(Authentication authentication) {
        return ResponseEntity.ok().body("Usuário autenticado: " + authentication.getName());
    }

}
