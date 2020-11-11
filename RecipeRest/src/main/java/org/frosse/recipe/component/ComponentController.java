package org.frosse.recipe.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/v1/component")
@RestController
public class ComponentController {

    @Autowired
    private ComponentService componentService;

    @PostMapping()
    public Component addNew(@RequestBody Component component) {
        return componentService.addNew(component);
    }

    @GetMapping
    public List<Component> getAll() {
        return componentService.findAll();
    }
}
