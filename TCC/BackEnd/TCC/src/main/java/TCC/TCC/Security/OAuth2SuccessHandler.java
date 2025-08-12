package TCC.TCC.Security;

import TCC.TCC.Entities.Usuario;
import TCC.TCC.Repository.UsuarioRepository;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.core.Authentication;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Component
public class OAuth2SuccessHandler implements AuthenticationSuccessHandler {

    private final UsuarioRepository usuarioRepository;

    public OAuth2SuccessHandler(UsuarioRepository usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException, ServletException {

        OAuth2User oauthUser = (OAuth2User) authentication.getPrincipal();

        String email = oauthUser.getAttribute("email");

        if (email == null || email.isEmpty()) {
            response.sendRedirect("https://stockfy-ten.vercel.app/login?error=email_missing");
            return;
        }

        Usuario usuario = usuarioRepository.findByEmail(email)
            .orElseGet(() -> {
                Usuario novoUsuario = new Usuario();
                novoUsuario.setEmail(email);
                novoUsuario.setNomeCompleto(oauthUser.getAttribute("name"));
                novoUsuario.setImagem(oauthUser.getAttribute("picture"));
                
                return usuarioRepository.save(novoUsuario);
            });

        String token = JwtUtil.gerarToken(usuario.getEmail());

        String redirectUrl = "https://stockfy-ten.vercel.app/auth/callback?token=" + URLEncoder.encode(token, StandardCharsets.UTF_8);
        response.sendRedirect(redirectUrl);
    }
}
