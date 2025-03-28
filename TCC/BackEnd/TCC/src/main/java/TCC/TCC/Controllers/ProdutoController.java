package TCC.TCC.Controllers;

import TCC.TCC.model.*;
import TCC.TCC.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {

    @Autowired
    private ProdutoRepository produtoRepository;

    @GetMapping
    public List<Produto> getAll() {
        return produtoRepository.findAll();
    }

    @PostMapping
    public Produto create(@RequestBody Produto produto) {
        return produtoRepository.save(produto);
    }
}
