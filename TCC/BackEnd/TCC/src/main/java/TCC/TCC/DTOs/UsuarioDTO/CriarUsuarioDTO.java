package TCC.TCC.DTOs.UsuarioDTO;

public record CriarUsuarioDTO(
    String nomeCompleto, 
    String email, 
    String senha, 
    String celular, 
    String cpf
    ) { }
