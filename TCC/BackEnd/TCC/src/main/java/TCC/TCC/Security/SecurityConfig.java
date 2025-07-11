package TCC.TCC.Security;

import org.springframework.http.HttpMethod;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf().disable()
            .authorizeHttpRequests()
                .requestMatchers(
                    "/v3/api-docs/**",
                    "/swagger-ui/**",
                    "/swagger-ui.html"
                ).permitAll()
                .requestMatchers("/v1/auth/login").permitAll()
                .requestMatchers(HttpMethod.POST, "/v1/Usuarios").permitAll()
                .requestMatchers(HttpMethod.GET, "/v1/Usuarios/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/v1/Funcionarios/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/v1/Items/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/v1/movimentacoes/**").permitAll()
                .requestMatchers(HttpMethod.POST, "/v1/Funcionarios/**").authenticated()
                .requestMatchers(HttpMethod.PUT, "/v1/Funcionarios/**").authenticated()
                .requestMatchers(HttpMethod.DELETE, "/v1/Funcionarios/**").authenticated()
                .requestMatchers(HttpMethod.POST, "/v1/Items/**").authenticated()
                .requestMatchers(HttpMethod.PUT, "/v1/Items/**").authenticated()
                .requestMatchers(HttpMethod.DELETE, "/v1/Items/**").authenticated()
                .requestMatchers(HttpMethod.POST, "/v1/movimentacoes/**").authenticated()
                .requestMatchers(HttpMethod.DELETE, "/v1/movimentacoes/**").authenticated()
                .requestMatchers(HttpMethod.PATCH, "/v1/movimentacoes/**").authenticated()
                .anyRequest().authenticated()
            .and()
            .addFilterBefore(new JwtAuthFilter(), UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}