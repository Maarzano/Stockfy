package TCC.TCC.Exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import com.fasterxml.jackson.databind.exc.UnrecognizedPropertyException;

import TCC.TCC.Exceptions.ItemsException.ItemDuplicadoException;
import TCC.TCC.Exceptions.ItemsException.ItemNaoEncontradoException;
import TCC.TCC.Exceptions.ItemsException.QuantidadeInvalida;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(UsuarioNaoEncontradoException.class)
    public ResponseEntity<String> handleUsuarioNaoEncontrado(UsuarioNaoEncontradoException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(FuncionarioNaoEncontradoException.class)
    public ResponseEntity<String> handleFuncionarioNaoEncontrado(FuncionarioNaoEncontradoException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(ItemNaoEncontradoException.class)
    public ResponseEntity<String> handleItemNaoEncontrado(ItemNaoEncontradoException ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
    }

    @ExceptionHandler(ItemDuplicadoException.class)
    public ResponseEntity<String> handleItemDuplicado(ItemDuplicadoException ex) {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(ex.getMessage());
    }

    @ExceptionHandler(QuantidadeInvalida.class)
    public ResponseEntity<String> handleQuantidadeInvalida(QuantidadeInvalida e) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
    }

    @ExceptionHandler(UnrecognizedPropertyException.class)
    public ResponseEntity<String> handleUnrecognizedProperty(UnrecognizedPropertyException ex) {
        return ResponseEntity
            .status(HttpStatus.BAD_REQUEST)
            .body("Campo inválido encontrado no JSON: " + ex.getPropertyName());
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleErroGeral(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Erro interno no servidor." + ex.getMessage());
    }

}
