package TCC.TCC.DTOs;

import jakarta.validation.constraints.Min;

public record AtualizarItemDTO ( 
    String nomeItem,
    @Min(value = 0, message = "A quantidade não pode ser negativa")
    int quantidade,
    String imagem,
    String descricao) { }
