package TCC.TCC.Exceptions.ItemsException;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class QuantidadeInvalida extends RuntimeException{
    public QuantidadeInvalida(int quant){
        super("não pode criar item com quantidade: " + quant );
    }
}
