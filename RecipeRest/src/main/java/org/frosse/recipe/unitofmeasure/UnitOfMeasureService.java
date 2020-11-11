package org.frosse.recipe.unitofmeasure;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UnitOfMeasureService {

    @Autowired
    private UnitOfMeasureRepository unitOfMeasureRepository;

    public List<UnitOfMeasure> getAll() {
        return unitOfMeasureRepository.findAll();
    }

    public UnitOfMeasure addNew(UnitOfMeasure unitOfMeasure) {
        return unitOfMeasureRepository.save(unitOfMeasure);
    }

    public void deleteUnitOfMeasure(Integer id) {
        unitOfMeasureRepository.deleteById(id);
    }

    public Optional<UnitOfMeasure> getById(Integer id) {
        return unitOfMeasureRepository.findById(id);
    }
}
