package TCC.TCC.DTOs.ItemDTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = false)
public record CriarItemDTO (
    String nomeItem,
    Integer quantidadeDisponivel,
    String imagem,
    String descricao) { }
