package TCC.TCC.Service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import TCC.TCC.DTOs.ItemDTO.ItemMovimentadoDTO;
import TCC.TCC.DTOs.ItemDTO.ItemQuantidadeDTO;
import TCC.TCC.DTOs.MovimentacaoDTO.CriarMovimentacaoDTO;
import TCC.TCC.DTOs.MovimentacaoDTO.DetalhesMovimentacaoDTO;
import TCC.TCC.Entities.Funcionario;
import TCC.TCC.Entities.Item;
import TCC.TCC.Entities.Movimentacao;
import TCC.TCC.Entities.MovimentacaoItem;
import TCC.TCC.Entities.Usuario;
import TCC.TCC.Entities.Enum.StatusMovimentacao;
import TCC.TCC.Exceptions.ItemsException.ItemNaoEncontradoException;
import TCC.TCC.Repository.FuncionarioRepository;
import TCC.TCC.Repository.ItemRepository;
import TCC.TCC.Repository.MovimentacaoItemRepository;
import TCC.TCC.Repository.MovimentacaoRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
@RequiredArgsConstructor
public class MovimentacaoService {

    private final MovimentacaoRepository movimentacaoRepository;
    private final ItemRepository itemRepository;
    private final FuncionarioRepository funcionarioRepository;
    private final MovimentacaoItemRepository movimentacaoItemRepository;

    @Transactional
    public DetalhesMovimentacaoDTO criarMovimentacao(CriarMovimentacaoDTO dto, Usuario usuario) {
        Funcionario funcionario = funcionarioRepository.findById(dto.funcionarioId())
            .orElseThrow(() -> new RuntimeException("Funcionário não encontrado"));

        Movimentacao movimentacao = new Movimentacao(
            funcionario,
            dto.tipoMovimentacao(), 
            StatusMovimentacao.PENDENTE,
            null
        );
        movimentacao.setCriadoPor(usuario);

        movimentacao = movimentacaoRepository.save(movimentacao);

        List<MovimentacaoItem> movimentacaoItens = new ArrayList<>();

        for (ItemQuantidadeDTO itemDTO : dto.itens()) {
            Item item = itemRepository.findById(itemDTO.IdItem())
                .orElseThrow(() -> new ItemNaoEncontradoException("Item com ID " + itemDTO.IdItem() + " não encontrado"));

            int quantidadeOperacao = itemDTO.quantidade();

            switch (dto.tipoMovimentacao()) {
                case SAIDA:
                    if (quantidadeOperacao > item.getQuantidadeDisponivel()) {
                        throw new IllegalArgumentException("Quantidade para retirada maior que a disponível");
                    }
                    item.setQuantidadeDisponivel(item.getQuantidadeDisponivel() - quantidadeOperacao);
                    item.setQuantidadeRetirada(item.getQuantidadeRetirada() + quantidadeOperacao);
                    break;

                case ENTRADA:
                    if (quantidadeOperacao > item.getQuantidadeRetirada()) {
                        throw new IllegalArgumentException("Quantidade para devolução maior que a retirada");
                    }
                    item.setQuantidadeDisponivel(item.getQuantidadeDisponivel() + quantidadeOperacao);
                    item.setQuantidadeRetirada(item.getQuantidadeRetirada() - quantidadeOperacao);
                    break;

                default:
                    throw new IllegalArgumentException("Tipo de movimentação inválido");
            }

            itemRepository.save(item);

            MovimentacaoItem movimentacaoItem = new MovimentacaoItem();
            movimentacaoItem.setMovimentacao(movimentacao);
            movimentacaoItem.setItem(item);
            movimentacaoItem.setQuantidade(quantidadeOperacao);

            movimentacaoItem = movimentacaoItemRepository.save(movimentacaoItem);
            movimentacaoItens.add(movimentacaoItem);
        }

        return new DetalhesMovimentacaoDTO(
            movimentacao.getIdMovimentacao(),
            movimentacao.getFuncionario(),
            movimentacao.getTipoMovimentacao(),
            movimentacaoItens.stream()
                .map(item -> new ItemMovimentadoDTO(
                    item.getItem().getItemId(),
                    item.getItem().getNomeItem(),
                    item.getQuantidade()
                ))
                .toList(),
            movimentacao.getDataMovimentacao()
        );
    }


    public void concluirMovimentacao(Long id) {
        Movimentacao movimentacao = movimentacaoRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Movimentação não encontrada com ID: " + id));

        if (movimentacao.getStatusMovimentacao() != StatusMovimentacao.PENDENTE) {
            throw new IllegalStateException("Apenas movimentações com status PENDENTE podem ser concluídas.");
        }
        movimentacao.setStatusMovimentacao(StatusMovimentacao.CONCLUIDO);
        movimentacaoRepository.save(movimentacao);
    }

    public List<DetalhesMovimentacaoDTO> listarMovimentacoes(Usuario usuario) {
        List<Movimentacao> movimentacoes = movimentacaoRepository.findByCriadoPor(usuario);

        return movimentacoes.stream().map(mov -> {
            List<MovimentacaoItem> itens = movimentacaoItemRepository.findByMovimentacao(mov);

            List<ItemMovimentadoDTO> itensDTO = itens.stream()
                .map(item -> new ItemMovimentadoDTO(
                    item.getItem().getItemId(),
                    item.getItem().getNomeItem(),
                    item.getQuantidade()
                ))
                .toList();

            return new DetalhesMovimentacaoDTO(
                mov.getIdMovimentacao(),
                mov.getFuncionario(),
                mov.getTipoMovimentacao(),
                itensDTO,
                mov.getDataMovimentacao()
            );
        }).collect(Collectors.toList()).reversed();
    }


    @Transactional
    public void deletarMovimentacao(Long id) {
        if (!movimentacaoRepository.existsById(id)) {
            throw new RuntimeException("Movimentação não encontrada");
        }
        movimentacaoRepository.deleteById(id);
    }
}
