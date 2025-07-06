package TCC.TCC;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import TCC.TCC.Entities.Funcionario;
import TCC.TCC.Service.FuncionarioService;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ExclusaoFuncionario {

    @Autowired
    private FuncionarioService funcionarioService;

    @Test
    void testExclusaoFuncionarios() {
        System.out.println("[TESTE] Iniciando teste de exclusão de funcionários...");

        List<Funcionario> funcionarios = funcionarioService.listarFuncionario();
        assertNotNull(funcionarios, "A lista de funcionários não deveria ser nula.");

        if (funcionarios.isEmpty()) {
            System.out.println("[TESTE] Nenhum funcionário encontrado para exclusão.");
        } else {
            System.out.println("[TESTE] Funcionários encontrados: " + funcionarios.size());

            for (Funcionario funcionario : funcionarios) {
                System.out.println(" - Deletando funcionário: ");
                funcionarioService.deletarFuncionario(funcionario.getFuncionarioId());
            }

            List<Funcionario> funcionariosDepois = null;
            try {
                funcionariosDepois = funcionarioService.listarFuncionario();
            } catch (Exception e) {
                System.out.println("[TESTE] Exceção esperada após deletar todos os funcionários: " + e.getMessage());
            }

            assertTrue(funcionariosDepois == null || funcionariosDepois.isEmpty(), "Todos os funcionários deveriam ter sido excluídos.");
            System.out.println("[TESTE] Todos os funcionários foram excluídos com sucesso.");
        }
    }
}
