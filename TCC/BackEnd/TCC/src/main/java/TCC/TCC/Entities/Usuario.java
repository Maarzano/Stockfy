package TCC.TCC.Entities;

import java.time.Instant;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "usuarios")
public class Usuario {

    public Usuario() { }

    public Usuario(String nome, String senha, String CPF, Long celular, String email, Instant creationTimestamp, Instant updateTimestamp) {
        this.nomeCompleto = nome;
        this.senha = senha;
        this.cpf = CPF;
        this.celular = celular;
        this.email = email;
        this.updateTimestamp = updateTimestamp;
        this.creationTimesstamp = creationTimestamp;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long UsuarioID;

    @Column(name =  "NomeCompleto")
    private String nomeCompleto;

    @Column(name = "Senha")
    private String senha;

    @Column(name = "CPF", unique = true)
    private String cpf;

    @Column(name = "Celular")
    private Long celular;

    @Column(name = "Email", unique = true)
    private String email;

    @Column(name = "DataDeCriação", updatable = false)
    @CreationTimestamp
    private Instant creationTimesstamp;
    
    @Column(name = "DataDeAtualização")
    @UpdateTimestamp
    private Instant updateTimestamp;



    public long getUsuarioID() {
        return UsuarioID;
    }
    
    public void setUsuarioID(long usuarioID) {
        UsuarioID = usuarioID;
    }
    
    public String getNomeCompleto() {
        return nomeCompleto;
    }
    
    public void setNomeCompleto(String nomeCompleto) {
        this.nomeCompleto = nomeCompleto;
    }
    
    public String getSenha() {
        return senha;
    }
    
    public void setSenha(String senha) {
        this.senha = senha;
    }
    
    public String getCpf() {
        return cpf;
    }
    
    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
    
    public Long getCelular() {
        return celular;
    }
    
    public void setCelular(Long celular) {
        this.celular = celular;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public Instant getUpdateTimesstamp() {
        return updateTimestamp;
    }
    
    public void setUpdateTimesstamp(Instant updateTimesstamp) {
        this.updateTimestamp = updateTimesstamp;
    }
    
    public Instant getCreationTimestamp() {
        return creationTimesstamp;
    }
    
    public void setCreationTimestamp(Instant creationTimestamp) {
        this.creationTimesstamp = creationTimestamp;
    }
}
