package TCC.TCC.Entities;

import org.hibernate.annotations.CreationTimestamp;

import java.time.OffsetDateTime;
import java.time.ZoneId;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
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
    
    public Item(String nomeItem, int quantidadeDisponivel, String imagem, String descricao) {
        this.nomeItem = nomeItem;
        this.quantidadeDisponivel = quantidadeDisponivel;
        this.imagem = imagem;
        this.descricao = descricao;
    }


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item")
    private long itemId;

    @Column(name = "nome_item", nullable = false, unique = false) 
    private String nomeItem;

    @Column(name = "quantidade_disponivel", nullable = false)
    private int quantidadeDisponivel;

    @Column(name = "quantidade_retirada")
    private int quantidadeRetirada;

    @Column(name = "imagem", nullable = true)
    private String imagem;

    @Column(name = "descricao", nullable = true)
    private String descricao;

    @Column(name = "data_de_criacao", updatable = false, nullable = false)
    @CreationTimestamp
    private OffsetDateTime dataDeCriacao;

    @ManyToOne
    @JoinColumn(name = "criado_por", referencedColumnName = "id_usuario", nullable = false)
    private Usuario criadoPor;

    @Column(name = "ativo", nullable = false)
    private Boolean ativo;


    @PrePersist
    protected void onCreate() {
        this.dataDeCriacao = OffsetDateTime.now(ZoneId.of("America/Sao_Paulo"));
        this.ativo = true;
    }

}
