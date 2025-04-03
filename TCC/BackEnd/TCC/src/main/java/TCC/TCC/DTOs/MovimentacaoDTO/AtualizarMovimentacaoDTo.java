package TCC.TCC.DTOs.MovimentacaoDTO;

import TCC.TCC.Entities.Enum.TipoMovimentacao;

public record AtualizarMovimentacaoDTo(
    int quantidade,
    TipoMovimentacao tipoMovimentacao
) {}