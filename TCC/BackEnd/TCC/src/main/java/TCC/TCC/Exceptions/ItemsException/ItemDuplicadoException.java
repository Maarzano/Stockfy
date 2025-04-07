package TCC.TCC.Exceptions.ItemsException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.CONFLICT)
public class ItemDuplicadoException extends RuntimeException {
    public ItemDuplicadoException(String nomeItem) {
        super("Item com nome " + nomeItem + " já existe e não pode haver nomes duplicados");
    }
}
