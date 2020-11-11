package org.frosse.recipe.unitofmeasure;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/unitOfMeasure")
@RestController
public class UnitOfMeasureController {

    @Autowired
    private UnitOfMeasureService unitOfMeasureService;

    @GetMapping
    public List<UnitOfMeasure> getAll() {
        return unitOfMeasureService.getAll();
    }

    @GetMapping("/{id}")
    public Optional<UnitOfMeasure> getById(@PathVariable("id")Integer id) {
        return unitOfMeasureService.getById(id);
    }

    @PostMapping
    public UnitOfMeasure addUnitOfMeasure(@RequestBody UnitOfMeasure unitOfMeasure) {
        return unitOfMeasureService.addNew(unitOfMeasure);
    }

    @DeleteMapping("/{id}")
    public void deleteUnitOfMeasure(@PathVariable("id") Integer id) {
        unitOfMeasureService.deleteUnitOfMeasure(id);
    }

    @PutMapping
    public UnitOfMeasure updateUnitOfMeasure(@Valid @RequestBody UnitOfMeasure unitOfMeasure) {
        return unitOfMeasureService.addNew(unitOfMeasure);
    }
}
