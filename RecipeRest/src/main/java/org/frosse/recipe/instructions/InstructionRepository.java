package org.frosse.recipe.instructions;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstructionRepository extends CrudRepository<Instruction, Integer> {
  List<Instruction> findAll();

}
