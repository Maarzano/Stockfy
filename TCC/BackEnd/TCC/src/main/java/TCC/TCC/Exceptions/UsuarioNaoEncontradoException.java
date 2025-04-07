package TCC.TCC.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class UsuarioNaoEncontradoException extends RuntimeException{
    public UsuarioNaoEncontradoException(long id){
        super("Usuario com ID" + id + " não encontrado");
    }
}
