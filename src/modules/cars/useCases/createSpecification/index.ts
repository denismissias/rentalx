import { SpecificationRepository } from "../../repositories/implementations/SpecificationRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationService } from "./CreateSpecificationService";

const categoryRepository = SpecificationRepository.getInstance();
const createSpecificationService = new CreateSpecificationService(categoryRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationService);

export { createSpecificationController };