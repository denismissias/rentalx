
import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesService } from "./ListCategoriesService";

const categoryRepository = CategoryRepository.getInstance();
const listCategoriesService = new ListCategoriesService(categoryRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesService);

export { listCategoriesController };