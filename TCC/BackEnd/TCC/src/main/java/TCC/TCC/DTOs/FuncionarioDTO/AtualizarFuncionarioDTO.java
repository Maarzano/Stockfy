package TCC.TCC.DTOs.FuncionarioDTO;

import java.util.Date;

public record AtualizarFuncionarioDTO(
    String nomeFuncionario,
    String emailFuncionario,
    String cpfFuncionario,
    String celularFuncionario,
    Date dataNascimentoFuncionario,
    String descricaoFuncionario,
    Boolean ativo
) { }
