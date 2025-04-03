package TCC.TCC.Entities;

import org.hibernate.annotations.CreationTimestamp;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.Instant;

@Entity
@Table(name = "historico")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Historico {


    public Historico(Movimentacao movimentacaoId, String descricao, Instant dataRegistro) {
        this.movimentacaoId = movimentacaoId;
        this.descricao = descricao;
        this.dataRegistro = dataRegistro;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_historico")
    private Long idHistorico;

    @ManyToOne
    @JoinColumn(name = "id_movimentacao", nullable = false)
    private Movimentacao movimentacaoId;

    @Column(name = "descricao", nullable = false)
    private String descricao;

    @CreationTimestamp
    @Column(name = "data_registro", nullable = false, updatable = false)
    private Instant dataRegistro;

}
