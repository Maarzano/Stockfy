package TCC.TCC.Entities;

import org.hibernate.annotations.CreationTimestamp;
import java.time.Instant;

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
    
    public Item(String nomeItem, int quantidade, String imagem, String descricao, Instant dataDeCriacao) {
        this.nomeItem = nomeItem;
        this.quantidade = quantidade;
        this.imagem = imagem;
        this.descricao = descricao;
        this.dataDeCriacao = dataDeCriacao;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item")
    private Long ItemId;

    @Column(name = "nome_item", nullable = false, unique = true)
    private String nomeItem;

    @Column(name = "quantidade", nullable = false)
    private int quantidade;

    @Column(name = "imagem", nullable = true)
    private String imagem;

    @Column(name = "descricao", nullable = true)
    private String descricao;

    @Column(name = "data_de_criacao", updatable = false)
    @CreationTimestamp
    private Instant dataDeCriacao;

}
