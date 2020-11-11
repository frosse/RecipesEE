package org.frosse.recipe.component;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComponentService {
    @Autowired
    private ComponentRepository componentRepository;

    public Component addNew(Component component) {
        return componentRepository.save(component);
    }

    public List<Component> findAll() {
        return componentRepository.findAll();
    }
}
