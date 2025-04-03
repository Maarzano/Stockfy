package TCC.TCC.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import TCC.TCC.Entities.Funcionario;

@Repository
public interface FuncionarioRepository extends JpaRepository<Funcionario, Long>{

}
