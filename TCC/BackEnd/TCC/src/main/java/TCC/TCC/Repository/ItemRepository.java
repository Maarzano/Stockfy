package TCC.TCC.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TCC.TCC.Entities.*;

@Repository
public interface ItemRepository extends JpaRepository<Item, Long>{
    Optional<Item> findByName(String nomeItem);
    
    boolean existsByName(String nomeItem);

}
