package TCC.TCC.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TCC.TCC.DTOs.AtualizarFuncionarioDTO;
import TCC.TCC.DTOs.CriarFuncionarioDTO;
import TCC.TCC.Entities.Funcionario;
import TCC.TCC.Service.FuncionarioService;
import jakarta.validation.Valid;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/v1/Funcionarios")
public class FuncionarioController {
    private FuncionarioService funcService;

    public FuncionarioController(FuncionarioService funcService){
        this.funcService = funcService;
    }

    @PostMapping
    public ResponseEntity<Funcionario> criarFuncionario(@Valid @RequestBody CriarFuncionarioDTO entity){
        var funcId = funcService.criarFuncionario(entity);
        return ResponseEntity.created(URI.create("/v1/Funcionarios/" + funcId))
        .body(funcService.pegarFuncionarioPeloId(funcId).orElseThrow(()-> new RuntimeException("Item não encontrado")));
    }

    @GetMapping("/{funcId}")
    public ResponseEntity<Funcionario> pegarFuncionarioPeloId(@PathVariable("funcId") long funcId){
        var funcionario = funcService.pegarFuncionarioPeloId(funcId);
        return funcionario.map(ResponseEntity::ok).orElseGet(()-> ResponseEntity.notFound().build());
    }

    @GetMapping
    public ResponseEntity<List<Funcionario>> listarFuncionarios(){
        var funcionarios = funcService.listarFuncionario();
        return ResponseEntity.ok(funcionarios);
    }

    @DeleteMapping("/{funcId}")
    public ResponseEntity<Void> deletarFuncionarioPorId(@Valid @PathVariable("funcId") long funcId){
        funcService.deletarFuncionario(funcId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{funcId}")
    public ResponseEntity<Void> atualiazarFuncionarioPorId(@Valid @PathVariable("funcId") long funcId, @RequestBody AtualizarFuncionarioDTO dto){
        funcService.atualizarFuncionarioPeloId(funcId, dto);
        return ResponseEntity.noContent().build();
    }

    
    
}
