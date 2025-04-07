package TCC.TCC.DTOs.ItemDTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;

@JsonIgnoreProperties(ignoreUnknown = false)
public record AtualizarItemDTO ( 
    String nomeItem,
    Integer quantidade,
    String imagem,
    String descricao) { }
