package TCC.TCC.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;

import TCC.TCC.DTOs.AtualizarFuncionarioDTO;
import TCC.TCC.DTOs.CriarUsuarioDTO;
import TCC.TCC.Entities.Usuario;
import TCC.TCC.Repository.UsuarioRepository;

@Service
public class UsuarioService {
    private UsuarioRepository usuarioRepository;

    public UsuarioService(UsuarioRepository usuarioRepository){
        this.usuarioRepository = usuarioRepository;
    }

    public long criarUsuario(CriarUsuarioDTO createUserDTO){

        var entity = new Usuario(createUserDTO.nomeCompleto(), createUserDTO.senha(), createUserDTO.cpf(), createUserDTO.celular(), createUserDTO.email(), Instant.now(), null);
        var usuarioSalvo =  usuarioRepository.save(entity);

       return usuarioSalvo.getUsuarioID();

    }
    public Optional<Usuario> pegarUsuarioPeloID(Long UsuarioID){
        return usuarioRepository.findById(UsuarioID);
    }

    public List<Usuario> listarUsuarios(){
        return usuarioRepository.findAll();
    }

    public void DeletarUsuario(Long userId){
        var usuarioExiste = usuarioRepository.existsById(userId);

        if (usuarioExiste){
            usuarioRepository.deleteById(userId);
        } else {

        }
    }
    public void AtualiazarusuarioPorId(Long userId, AtualizarFuncionarioDTO atualizarFuncionarioDTO){
        var usuarioExiste = usuarioRepository.findById(userId);

        if (usuarioExiste.isPresent()){
            var usuario = usuarioExiste.get();

            if (atualizarFuncionarioDTO.nomeCompleto() != null){
                usuario.setNomeCompleto(atualizarFuncionarioDTO.nomeCompleto());
            }

            if (atualizarFuncionarioDTO.senha() != null){
                usuario.setSenha(atualizarFuncionarioDTO.senha());
            }
            usuarioRepository.save(usuario);
        }

    }

}
