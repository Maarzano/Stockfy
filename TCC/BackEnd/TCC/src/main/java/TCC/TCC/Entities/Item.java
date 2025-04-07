package TCC.TCC.Entities;

import org.hibernate.annotations.CreationTimestamp;

import java.time.OffsetDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "items")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Item {
    
    public Item(String nomeItem, Integer quantidade, String imagem, String descricao) {
        this.nomeItem = nomeItem;
        this.quantidade = quantidade;
        this.imagem = imagem;
        this.descricao = descricao;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item")
    private long ItemId;

    @Column(name = "nome_item", nullable = false, unique = true)
    private String nomeItem;

    @Column(name = "quantidade", nullable = false)
    private Integer quantidade;

    @Column(name = "imagem", nullable = true)
    private String imagem;

    @Column(name = "descricao", nullable = true)
    private String descricao;

    @Column(name = "data_de_criacao", updatable = false, nullable = false)
    @CreationTimestamp
    private OffsetDateTime dataDeCriacao = OffsetDateTime.now();

}
