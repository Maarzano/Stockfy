package TCC.TCC;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import TCC.TCC.DTOs.FuncionarioDTO.CriarFuncionarioDTO;
import TCC.TCC.Entities.Funcionario;
import TCC.TCC.Service.FuncionarioService;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.Date;

@SpringBootTest
public class InserirFuncionario {

    @Autowired
    private FuncionarioService funcionarioService;

    @Test
    void testCriarFuncionario() {
        System.out.println("[TESTE] Iniciando teste...");

        String cpfValido = ("" + System.currentTimeMillis()).substring(0, 11);
        CriarFuncionarioDTO funcionarioDTO = new CriarFuncionarioDTO(
            "Gabriel2 da Silva",
            "GBL2w3@GMAIL.COM",
            cpfValido,
            "11987654325",
            new Date(),
            "Funcionário de teste",
            true,
            null
        );

        System.out.println("valores: " + funcionarioDTO);

        long funcionarioId = funcionarioService.criarFuncionario(funcionarioDTO);

        Funcionario funcionarioSalvo = funcionarioService.pegarFuncionarioPeloId(funcionarioId)
            .orElse(null);

        assertNotNull(funcionarioSalvo, "Funcionário foi cadastrado corretamente.");
        System.out.println("[TESTE] Teste concluído.");
    }
}
