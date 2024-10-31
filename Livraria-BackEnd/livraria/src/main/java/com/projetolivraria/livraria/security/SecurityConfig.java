package com.projetolivraria.livraria.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class SecurityConfig implements WebMvcConfigurer{

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        // Desabilita todas as autenticações
        http
                .authorizeHttpRequests((requests) -> requests
                                .anyRequest().permitAll() // Permite todas as requisições sem autenticação
                )
                .csrf(csrf -> csrf.disable())  // Desabilita a proteção CSRF (dependendo do seu uso, pode ser necessário)
                .httpBasic(basic -> basic.disable()) // Desabilita a autenticação HTTP básica
                .formLogin(login -> login.disable()); // Desabilita o login via formulário

        return http.build();
    }

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:4200")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true);
    }
}
