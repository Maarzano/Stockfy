package TCC.TCC.DTOs;

import io.micrometer.common.lang.NonNull;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public record CriarUsuarioDTO(
    @NonNull String nomeCompleto, 
    @Email String email, 
    @NonNull @Size(min = 6) String senha, 
    @NonNull Long celular, 
    @NonNull String cpf
    ){

}
