package TCC.TCC.DTOs;

public record CriarUsuarioDTO(
    String nomeCompleto, 
    String email, 
    String senha, 
    String celular, 
    String cpf
    ) { }
