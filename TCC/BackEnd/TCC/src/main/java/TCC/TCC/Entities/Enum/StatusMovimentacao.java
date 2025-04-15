package TCC.TCC.Entities.Enum;

import com.fasterxml.jackson.annotation.JsonProperty;

public enum StatusMovimentacao {
    @JsonProperty("pendente")
    PENDENTE,
    @JsonProperty("concluido")
    CONCLUIDO,
    @JsonProperty("cancelado")
    CANCELADO

}
