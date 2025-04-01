package TCC.TCC.Filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import TCC.TCC.Service.JWTService;

@Component
@WebFilter("/v1/Usuarios/*")
public class JWTAuthorizationFilter implements Filter {

    @Autowired
    private JWTService jwtService;

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        
        HttpServletRequest httpRequest = (HttpServletRequest) request;
        String token = httpRequest.getHeader("Authorization");

        if (token != null && token.startsWith("Bearer ")) {
            token = token.substring(7);

            String usuarioEmail = jwtService.obterUsuarioDoToken(token);
            if (usuarioEmail != null && jwtService.validarToken(token, usuarioEmail)) {
                httpRequest.setAttribute("usuarioEmail", usuarioEmail);
                chain.doFilter(request, response);
                return;
            }
        }

        throw new ServletException("Token JWT inválido ou expirado.");
    }

    @Override
    public void destroy() {
    }
}
