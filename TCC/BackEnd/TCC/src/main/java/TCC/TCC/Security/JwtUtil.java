package TCC.TCC.Security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import java.security.Key;

public class JwtUtil {
    private static final String SECRET_KEY = "chave-secreta-superforte-com-32-caracteres!";

    private static final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

    public static String gerarToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public static String validarToken(String token) {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(key)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            return claims.getSubject();  // e-mail do usuário
        } catch (JwtException | IllegalArgumentException e) {
            return null;
        }
    }
}
