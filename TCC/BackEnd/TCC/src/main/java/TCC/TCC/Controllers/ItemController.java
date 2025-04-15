package TCC.TCC.Controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import TCC.TCC.DTOs.ItemDTO.AtualizarItemDTO;
import TCC.TCC.DTOs.ItemDTO.CriarItemDTO;
import TCC.TCC.Entities.Item;
import TCC.TCC.Service.ItemService;
import jakarta.validation.Valid;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequestMapping("/v1/Items")
public class ItemController {
    private ItemService itemService;

    public ItemController(ItemService itemService){
        this.itemService = itemService;
    }

    @PostMapping
    public ResponseEntity<?> criarItem(@Valid @RequestBody CriarItemDTO entity) {
        var itemId = itemService.criarItem(entity);

        return ResponseEntity.created(URI.create("/v1/Items/" + itemId))
                .body(itemService.pegarItemPeloId(itemId));
    }

    @GetMapping("/{itemId}")
    public Item pegarItemPeloId(@PathVariable("itemId") long itemId) {
        return  itemService.pegarItemPeloId(itemId);
    }

    @GetMapping
    public  ResponseEntity<List<Item>> ListarItems() {
        var items = itemService.listarItems();
        return ResponseEntity.ok(items);
    }

    @GetMapping("/buscar/{nomeItem}")
    public ResponseEntity<?> buscarItemPorNome(@PathVariable("nomeItem") String nomeItem) {
            return ResponseEntity.ok(itemService.buscarItemPorNome(nomeItem));
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<Void> apagarItemPorId(@PathVariable("itemId")long itemId){
        itemService.deletarItem(itemId);
        return ResponseEntity.noContent().build();
    }
    @PutMapping("/{itemId}")
    public ResponseEntity<?> AtualiazarItemPorId(@PathVariable("itemId") long itemId, @RequestBody AtualizarItemDTO atualizarItemDTO) {
        itemService.AtualizarItemPorId(itemId, atualizarItemDTO);
        return ResponseEntity.noContent().build();
    }

}
