package edu.kits.finalproject.Repository;

import edu.kits.finalproject.Domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.ResponseBody;

@ResponseBody
public interface CategoryRepository extends JpaRepository<Category, Long> {

}
