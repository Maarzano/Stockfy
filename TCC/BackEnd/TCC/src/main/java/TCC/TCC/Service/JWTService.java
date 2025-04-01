package TCC.TCC.Service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class JWTService {

    @Value("${jwt.secret}")  // Armazene sua chave secreta no application.properties
    private String secretKey;

    @Value("${jwt.expiration}")
    private long expirationTime;

    // Método para gerar o token JWT
    public String gerarToken(String username) {
        Map<String, Object> claims = new HashMap<>();
        return Jwts.builder()
                .setClaims(claims)
                .setSubject(username)  // O "nome do usuário" pode ser o email do ADM
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expirationTime))  // Definir a expiração do token
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    // Método para verificar o token JWT
    public boolean validarToken(String token, String username) {
        String usuario = obterUsuarioDoToken(token);
        return (usuario.equals(username) && !isTokenExpirado(token));
    }

    // Método para obter o nome do usuário (email) a partir do token
    public String obterUsuarioDoToken(String token) {
        return Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getSubject();
    }

    // Método para verificar se o token está expirado
    private boolean isTokenExpirado(String token) {
        Date expiration = Jwts.parser()
                .setSigningKey(secretKey)
                .parseClaimsJws(token)
                .getBody()
                .getExpiration();
        return expiration.before(new Date());
    }
}
