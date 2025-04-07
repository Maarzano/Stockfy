package TCC.TCC.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class FuncionarioNaoEncontradoException extends RuntimeException{
    public FuncionarioNaoEncontradoException(long id){
        super("Funcionario com ID " + id + " não encontrado");
    }
}
