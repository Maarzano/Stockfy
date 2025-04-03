package TCC.TCC.DTOs.MovimentacaoDTO;

import java.time.Instant;

import TCC.TCC.Entities.Enum.TipoMovimentacao;

public record DetalhesMovimentacaoDTO(
    Long idMovimentacao,
    Long itemId,
    Long funcionarioId,
    int quantidade,
    TipoMovimentacao tipoMovimentacao,
    Instant dataMovimentacao
) {}