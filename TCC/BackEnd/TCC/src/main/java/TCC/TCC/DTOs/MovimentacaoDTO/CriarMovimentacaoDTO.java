package TCC.TCC.DTOs.MovimentacaoDTO;

import TCC.TCC.Entities.Enum.TipoMovimentacao;

public record CriarMovimentacaoDTO(
    Long itemId,
    Long funcionarioId,
    int quantidade,
    TipoMovimentacao tipoMovimentacao
) {}