package TCC.TCC.Entities;

import java.sql.Date;

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
@Table(name = "funcionarios")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Funcionario {

    public Funcionario(String nomeFuncionario, String emailFuncionario, String cpfFuncionario, String celularFuncionario, Date dataNascimentoFuncionario, String descricaoFuncionario, boolean ativo) {
        this.nomeFuncionario = nomeFuncionario;
        this.emailFuncionario = emailFuncionario;
        this.cpfFuncionario = cpfFuncionario;
        this.celularFuncionario = celularFuncionario;
        this.dataNascimentoFuncionario = dataNascimentoFuncionario;
        this.descricaoFuncionario = descricaoFuncionario;
        this.ativo = ativo;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_funcionario")
    private Long funcionarioId;


    @Column(name = "nome_funcionario", unique = true, nullable = false)
    private String nomeFuncionario;

    @Column(name = "email_funcionario", unique = true, nullable = false)
    private String emailFuncionario;

    @Column(name = "cpf_funcionario", unique = true, nullable = false)
    private String cpfFuncionario;

    @Column(name = "celular_funcionario")
    private String celularFuncionario;

    @Column(name = "data_nascimento_funcionario")
    private Date dataNascimentoFuncionario;

    @Column(name = "descricao_funcionario")
    private String descricaoFuncionario;

    @Column(name = "ativo_desativo_funcionario", nullable = false)
    private boolean ativo;


}
