package TCC.TCC;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import TCC.TCC.Entities.Item;
import TCC.TCC.Service.ItemService;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class ExclusaoItem {

    @Autowired
    private ItemService itemService;

    @Test
    void testExclusaoItems() {
        System.out.println("[TESTE] Iniciando teste de exclusão de itens...");

        List<Item> itens = itemService.listarItems();
        assertNotNull(itens, "A lista de itens não deveria ser nula.");

        if (itens.isEmpty()) {
            System.out.println("[TESTE] Nenhum item encontrado para exclusão.");
        } else {
            System.out.println("[TESTE] Itens encontrados: " + itens.size());

            for (Item item : itens) {
                System.out.println(" - Deletando item: " + item.getNomeItem() + " (ID: " + item.getItemId() + ")");
                itemService.deletarItem(item.getItemId());
            }

            List<Item> itensDepois = itemService.listarItems();
            assertTrue(itensDepois.isEmpty(), "Todos os itens deveriam ter sido excluídos.");
            System.out.println("[TESTE] Todos os itens foram excluídos com sucesso.");
        }
    }
}
