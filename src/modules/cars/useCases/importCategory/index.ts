import { CategoryRepository } from "../../repositories/implementations/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryService } from "./ImportCategoryService";

const importCategoryService = new ImportCategoryService(CategoryRepository.getInstance());
const importCategoryController = new ImportCategoryController(importCategoryService);

export { importCategoryController }