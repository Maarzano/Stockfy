package TCC.TCC.Controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import TCC.TCC.DTOs.MovimentacaoDTO.AtualizarMovimentacaoDTo;
import TCC.TCC.DTOs.MovimentacaoDTO.CriarMovimentacaoDTO;
import TCC.TCC.DTOs.MovimentacaoDTO.DetalhesMovimentacaoDTO;
import TCC.TCC.Service.MovimentacaoService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/v1/movimentacoes")
@RequiredArgsConstructor
public class MovimentacaoController {

    private final MovimentacaoService movimentacaoService;

    @PostMapping
    public ResponseEntity<DetalhesMovimentacaoDTO> criarMovimentacao(@RequestBody CriarMovimentacaoDTO dto) {
        return ResponseEntity.ok(movimentacaoService.criarMovimentacao(dto));
    }

    @GetMapping
    public ResponseEntity<List<DetalhesMovimentacaoDTO>> listarMovimentacoes() {
        return ResponseEntity.ok(movimentacaoService.listarMovimentacoes());
    }

    @PutMapping("/{id}")
    public ResponseEntity<DetalhesMovimentacaoDTO> atualizarMovimentacao(@PathVariable("id") Long id, 
            @RequestBody AtualizarMovimentacaoDTo dto) {
        return ResponseEntity.ok(movimentacaoService.atualizarMovimentacao(id, dto));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletarMovimentacao(@PathVariable("id") Long id) {
        movimentacaoService.deletarMovimentacao(id);
        return ResponseEntity.noContent().build();
    }
}
