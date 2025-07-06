package TCC.TCC;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import TCC.TCC.DTOs.ItemDTO.CriarItemDTO;

@SpringBootTest
public class InserirItem {


    @Test
    void testCriarFuncionario() {
        System.out.println("[TESTE] Iniciando teste...");

        CriarItemDTO criarItemDTO = new CriarItemDTO(
            "Machado",
            1,
            "asdasdsad",
            "Nao sei oque la"
        );

        System.out.println("[TESTE] Teste concluído.");

        System.out.println("valores: " + criarItemDTO);
    }
}

