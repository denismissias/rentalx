import { Category } from "../../model/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

class ListCategoriesService {
  constructor(private categoryRepository: ICategoryRepository) {
    
  }

  execute(): Category[] {
    return this.categoryRepository.list();
  }
}

export { ListCategoriesService };