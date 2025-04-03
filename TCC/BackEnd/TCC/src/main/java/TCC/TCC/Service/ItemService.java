package TCC.TCC.Service;

import java.time.Instant;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import TCC.TCC.DTOs.*;
import TCC.TCC.Entities.*;
import TCC.TCC.Repository.*;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public ItemService(ItemRepository itemRepository){
        this.itemRepository = itemRepository;
    }

    public long criarItem(CriarItemDTO criarItemDTO){
        Item entity = new Item(criarItemDTO.nomeItem(), criarItemDTO.quantidade(), criarItemDTO.imagem(), criarItemDTO.descricao(), Instant.now());
        Item itemSalvo = itemRepository.save(entity);

        return itemSalvo.getItemId();
    }
    public Optional<Item> pegarItemPeloId(long itemId){
        return itemRepository.findById(itemId);
    }
    public List<Item> listarItems(){
        return itemRepository.findAll();
    }
    public void deletarItem(long itemId){
        var itemExiste = itemRepository.existsById(itemId);

        if(itemExiste){
            itemRepository.deleteById(itemId);
        } else {
            throw new IllegalArgumentException("Item com ID " + itemId + " não encontrado");
        }
    }
    public void AtualizarItemPorId(long itemId, AtualizarItemDTO atualziarItemDTO){
        var itemExiste = itemRepository.findById(itemId);

        if(itemExiste.isPresent()){
            var item = itemExiste.get();
            if(atualziarItemDTO.nomeItem() != null){
                item.setNomeItem(atualziarItemDTO.nomeItem());
            }
            if (atualziarItemDTO.quantidade() > 0){
                item.setQuantidade(atualziarItemDTO.quantidade());
            }
            if (atualziarItemDTO.descricao() != null) {
                item.setDescricao(atualziarItemDTO.descricao());
            }
            if (atualziarItemDTO.imagem() != null) {
                item.setImagem(atualziarItemDTO.imagem());
            }
        }
    }
    public Item buscarItemPorNome(String nome){
        return itemRepository.findByName(nome).orElse(null);
    }
}
