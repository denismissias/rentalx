import { Router } from "express";

import { SpecificationRepository } from "../modules/cars/repositories/implementations/SpecificationRepository";
import { CreateSpecificationService } from "../modules/cars/useCases/createSpecification/CreateSpecificationService";

const specificationsRoutes = Router();
const specificationRepository = SpecificationRepository.getInstance();

specificationsRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(specificationRepository);

  createSpecificationService.execute({ name, description });

  return response.status(201).send();
});

specificationsRoutes.get("/", (request, response) => {
  return response.json(specificationRepository.list());
});

export { specificationsRoutes };