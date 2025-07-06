package TCC.TCC;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import TCC.TCC.Entities.Item;
import TCC.TCC.Service.ItemService;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@SpringBootTest
public class ListarEstoque {

    @Autowired
    private ItemService itemService;

    @Test
    void testListarItens() {
        System.out.println("[TESTE] Iniciando teste de listagem de itens...");

        List<Item> itens = itemService.listarItems();

        assertNotNull(itens, "A lista de itens não deveria ser nula.");
        assertFalse(itens.isEmpty(), "A lista de itens está vazia.");

        System.out.println("[TESTE] Itens listados com sucesso:");
        itens.forEach(item -> System.out.println(" - " + item.getNomeItem()));
    }
}
