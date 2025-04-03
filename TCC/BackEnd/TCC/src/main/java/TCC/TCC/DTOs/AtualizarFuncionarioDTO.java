package TCC.TCC.DTOs;

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
